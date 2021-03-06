import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { fetchGroupByUserId } from '../API/firebaseMethods';
import ChatItem from '../components/ChatItem';
import * as firebase from 'firebase';

const itemData = {
    title: 'First message',
    message: 'hello this is first message',
    photoURL:
        'data:image/jpeg;base64,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',
};

const itemData2 = {
    title: 'Second message',
    message: 'hello this is second message',
    photoURL: '',
};

let LIST = [itemData, itemData2, itemData];

const Chat = ({ navigation }) => {
    let currentUserUID = firebase.auth().currentUser.uid;
    const [chatList, setChatList] = useState([]);

    useEffect(() => {
        const db = firebase.firestore();
        let allGroups = [];
        let unsubscribe = db
            .collection('chatroom')
            .where('members', 'array-contains', currentUserUID)
            .onSnapshot((snapshot) => {
                console.log('uid: ', currentUserUID);
                snapshot.forEach((doc) => {
                    data = doc.data();
                    data.id = doc.id;
                    console.log(data);
                    if (data.recentMessage) {
                        allGroups.push(data);
                    }
                });
                setChatList(allGroups);
            });
        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={chatList}
                keyExtractor={(item) => item.id}
                renderItem={({ item, index, separators }) => (
                    <ChatItem
                        item={item}
                        onPress={() => {
                            navigation.navigate('ChatRoom', {
                                currentUserUID: currentUserUID,
                                chatroomId: item.id,
                            })
                        }
                            // {
                            //     console.log('chatroomId:', item.id)
                            //     console.log('uid:', currentUserUID)
                            // }
                        }
                    />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});

export default Chat;
