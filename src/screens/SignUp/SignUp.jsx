import React from 'react';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView, TextInput, Button } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { NavigationContainer } from '@react-navigation/native';
import { auth } from "../../../firebaseConfig";

// const auth = getAuth();

const onSignUp = (navigation, em, pass) => {

    createUserWithEmailAndPassword(auth, em, pass)
        .then((userCredential) => {
            const user = userCredential.user;
            navigation.push('Home');
            
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            navigation.navigate('Home');
        });

}

export const SignUp = ({navigation}) => {

    const [email, setEmail] = useState({ value: '', error: '' })
    const [password, setPassword] = useState({ value: '', error: '' })
    return (
        <SafeAreaView>
                <TextInput
                    returnKeyType="next"
                    style={styles.input}
                    value={email.value}
                    onChangeText={(text) => setEmail({ value: text, error: '' })}
                    error={!!email.error}
                    errorText={email.error}
                    autoCapitalize="none"
                    autoCompleteType="email"
                    textContentType="emailAddress"
                    keyboardType="email-address"
                />
                <TextInput
                    label="Password"
                    returnKeyType="done"
                    style={styles.input}
                    value={password.value}
                    onChangeText={(text) => setPassword({ value: text, error: '' })}
                    error={!!password.error}
                    errorText={password.error}
                    secureTextEntry
                />
                <Button title={"Sign Up"} onPress={() => onSignUp(navigation, email.value, password.value)}></Button>
                    
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });