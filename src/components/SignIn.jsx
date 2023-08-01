import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { StyleSheet, Text, SafeAreaView, Button, TextInput } from 'react-native';

import { changeUserSignInStatus } from '../redux/actions/SignInActions';

const SignIn = ({ navigation }) => {
    const dispatch = useDispatch();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    const handleLoginAction = () => {
        if (!emailRegex.test(userName)) {
            setError('Enter valid email address.');
        } else {
            setError('');
            navigation.navigate('Post List');
            dispatch(changeUserSignInStatus(true));
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text>Username</Text>
            <TextInput
                placeholder='Enter User Name'
                placeholderTextColor="#9a73ef"
                style={styles?.input}
                onChangeText={(userNameValue) => setUserName(userNameValue)}
            />
            {error.length ? <Text style={styles?.error}>{error}</Text> : null}
            <Text>Password</Text>
            <TextInput
                secureTextEntry={true}
                placeholder='Enter Password'
                placeholderTextColor="#9a73ef"
                style={styles?.input}
                onChangeText={(passwordValue) => setPassword(passwordValue)}
            />
            <Button onPress={handleLoginAction} disabled={!(userName && password)} title='Login' />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid black',
        padding: 20
    },
    input: {
        height: 40,
        minWidth: 300,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    error: {
        color: 'red'
    }
});

export default SignIn;
