import * as React from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    EdgeInsetsPropType,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import { windowHeight, windowWidth } from '../utils/Dimensions.js';

const FormInput = React.forwardRef(
    ({ labelValue, placeholderText, iconType, ...rest }, ref) => {
        return (
            <View style={styles.inputContainer}>
                {/* <View style={styles.iconStyle}>
                    <AntDesign name={iconType} size={25} color='#666' />
                </View> */}
                <TextInput
                    ref={ref}
                    value={labelValue}
                    style={styles.input}
                    numberOfLines={1}
                    placeholder={placeholderText}
                    placeholderTextColor='#666'
                    {...rest}
                />
            </View>
        );
    }
);

export default FormInput;

const styles = StyleSheet.create({
    inputContainer: {
        alignSelf: 'center',
        marginTop: 5,
        marginBottom: 10,
        width: '90%',
        height: windowHeight / 15,
        borderColor: '#ccc',
        borderRadius: 8,
        borderWidth: 0,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    // iconStyle: {
    //     padding: 10,
    //     height: '100%',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     borderRightColor: '#ccc',
    //     borderRightWidth: 1,
    //     width: 50,
    // },
    input: {
        padding: 10,
        marginTop: 0,
        marginBottom: 0,
        width: windowWidth / 1.2,
        height: windowHeight / 15,
        fontSize: 16,
        borderRadius: 8,
        borderWidth: 0,
    },
});
