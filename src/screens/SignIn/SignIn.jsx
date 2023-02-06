import React from 'react';
import {View, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export const SignIn = ({ navigation }) => {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
            title="Create an account" 
            onPress={() => navigation.push('SignUp')}
            />
        </View>
    )
    
}