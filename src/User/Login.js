import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity
} from "react-native";

import Ionicons from 'react-native-vector-icons/Ionicons'

const Login = ({ navigation }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isPasswordVisible, setIsPasswordVisible] = useState(true)

const userLogin = () =>  {

    }

    return (
        <View style={styles.container}>

            <View style={styles.bgContainer}>
                <Image source={require('../../assets/Image/Clothing.png')}
                    style={{ height: 300, width: 300, borderRadius: 150 }} />
                <Text style={[styles.signupText, { marginLeft: -300 }]}>Login</Text>
            </View>

            <View style={{ justifyContent: 'center', alignItems: 'center' }}>

                <View style={styles.formBox}>

                    <View style={styles.customInput}>
                        <Ionicons name="mail" size={22} color={'#212529'}
                            style={{ padding: 5 }} />
                        <TextInput placeholder="Email"
                            keyboardType={'email-address'}
                            value={email}
                            onChangeText={text => setEmail(text)}
                            style={styles.inputBoxText}
                        />
                    </View>
                    <View style={[styles.customInput, { marginTop: 20 }]}>
                        <Ionicons name="lock-closed" size={22} color={'#212529'}
                            style={{ padding: 5 }} />
                        <TextInput placeholder="Password"
                            value={password}
                            onChangeText={text => setPassword(text)}
                            style={styles.inputBoxText}
                            secureTextEntry={isPasswordVisible ? true : false}
                        />
                        <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                            <Ionicons name={isPasswordVisible ? 'eye-off' : 'eye'}
                                size={22} color={'#212529'} style={{ marginRight: 10 }} />
                        </TouchableOpacity>
                    </View>

                </View>

                <TouchableOpacity onPress={() => {
                    if(email !== '' && password !== '')
                    {
                        userLogin();
                    }else {
                        alert('Please Enter Data')
                    }
                }}
                style={styles.signupButton}>
                    <Text style={styles.signupButtonText}>LOGIN</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    navigation.navigate('Signup')
                }}>
                    <Text style={styles.newAccount}>
                        Create New Account !
                    </Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E9ECEF',
    },
    bgContainer: {
        marginVertical: 80,
        justifyContent: 'center',
        alignItems: 'center'
    },
    signupText: {
        fontFamily: 'Sono-SemiBold',
        fontSize: 30,
        color: '#212529',
        textDecorationLine: 'underline',
    },
    formBox: {
        marginTop: -50,
        width: '95%',
        borderRadius: 10,
        backgroundColor: 'rgba(127,127,127,0.5)',
        // height: 200
        padding: 20,
        alignItems: 'center',
    },
    customInput: {
        width: '100%',
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F8F9FA'
    },
    inputBoxText: {
        flex: 1,
        fontSize: 17,
        fontFamily: 'Sono-SemiBold',
        color: '#212529'
    },
    signupButton: {
        width: '50%',
        borderRadius: 10,
        borderWidth: .5,
        backgroundColor: '#343A40',
        paddingVertical: 13,
        marginTop: 20,
        alignItems: 'center',
        elevation: 5
    },
    signupButtonText: {
        fontSize: 20,
        fontFamily: 'Sono-SemiBold',
        color: '#F8F9FA'
    },
    newAccount: {
        marginTop: 50,
        fontFamily: 'Sono-SemiBold',
        textDecorationLine: 'underline',
        fontSize: 17
    }
})