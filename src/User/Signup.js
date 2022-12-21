import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity
} from "react-native";

import Ionicons from 'react-native-vector-icons/Ionicons'
import {useNavigation} from '@react-navigation/native'

const Signup = () => {

    const navigator = useNavigation();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    const [mobile, setMobile] = useState('')

    const [isPasswordVisible, setIsPasswordVisible] = useState(true)
    const [isIconVisible, setIsIconVisible] = useState(true)

    return (
        <View style={styles.container}>
            <Text style={styles.headingText}>Register Yourself!</Text>

            <View style={styles.formContainer}>

                <View style={styles.formbox}>

                    <View style={styles.customInputBox}>
                        <TextInput placeholder="Full Name"
                            value={name}
                            onChangeText={txt => setName(txt)}
                            style={styles.customInputText} />
                    </View>

                    <View style={[styles.customInputBox, { marginTop: 15 }]}>
                        <TextInput placeholder="Email"
                            value={email}
                            keyboardType='email-address'
                            onChangeText={txt => setEmail(txt)}
                            style={styles.customInputText} />
                    </View>

                    <View style={[styles.customInputBox, { marginTop: 15 }]}>
                        <TextInput placeholder="Password"
                            value={password}
                            onChangeText={txt => setPassword(txt)}
                            style={styles.customInputText}
                            secureTextEntry={isPasswordVisible ? true : false}
                        />
                        <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                            <Ionicons name={isPasswordVisible ? 'eye-off' : 'eye'}
                                size={22} color={'#212529'} style={{ marginRight: 10 }} />
                        </TouchableOpacity>
                    </View>

                    <View style={[styles.customInputBox, { marginTop: 15 }]}>
                        <TextInput placeholder="Re-Enter Password"
                            value={rePassword}
                            onChangeText={txt => setRePassword(txt)}
                            style={styles.customInputText}
                            secureTextEntry={isIconVisible ? true : false}
                        />
                        <TouchableOpacity onPress={() => setIsIconVisible(!isIconVisible)}>
                            <Ionicons name={isIconVisible ? 'eye-off' : 'eye'}
                                size={22} color={'#212529'} style={{ marginRight: 10 }} />
                        </TouchableOpacity>
                    </View>

                    <View style={[styles.customInputBox, { marginTop: 15 }]}>
                        <TextInput placeholder="Mobile Number"
                            value={mobile}
                            keyboardType='number-pad'
                            maxLength={10}
                            onChangeText={txt => setMobile(txt)}
                            style={styles.customInputText} />
                    </View>

                </View>

            </View>

            <TouchableOpacity onPress={() => {
                if (name !== '' &&
                    email !== '' &&
                    password !== '' && password == rePassword &&
                    mobile !== '') {
                        navigator.navigate('Login')
                    }else{
                        alert ('Enter Full Detailes / Password Does Not Match')
                    }
            }}
                style={styles.signupButton}>
                <Text style={styles.signupText}>SIGNUP</Text>
            </TouchableOpacity>

        </View>
    )
}

export default Signup

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E9ECEF',
        alignItems: 'center'
    },
    headingText: {
        // alignSelf: 'center',
        fontFamily: 'Sono-SemiBold',
        fontSize: 25,
        color: '#212529',
        marginTop: 150,
        paddingBottom: 50
    },
    formContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    formbox: {
        width: '90%',
        borderRadius: 10,
        //  height: 200,
        backgroundColor: 'rgba(127,127,127,0.5)',
        padding: 20,
        alignItems: 'center'
    },
    customInputBox: {
        flexDirection: 'row',
        width: '100%',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#F8F9FA',
        alignItems: 'center',
        paddingLeft: 20
    },
    customInputText: {
        flex: 1,
        fontSize: 18,
        fontFamily: 'Sono-SemiBold',
        color: '#212529'
    },
    signupButton: {
        width: '50%',
        borderRadius: 10,
        borderWidth: .5,
        backgroundColor: '#343A40',
        paddingVertical: 13,
        marginTop: 30,
        alignItems: 'center',
        elevation: 5
    },
    signupText: {
        fontSize: 20,
        fontFamily: 'Sono-SemiBold',
        color: '#F8F9FA'
    }
})