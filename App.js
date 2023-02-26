import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './src/screens/Home';
import { SignIn } from './src/screens/SignIn';
import { SignUp } from './src/screens/SignUp';
import { ZeliaScreen } from'./src/screens/zelia-screen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (    
        <NavigationContainer>

            <Stack.Navigator initialRouteName="SignIn">
              <Stack.Screen name="Home" component={ Home } />
              <Stack.Screen name="SignIn" component={ SignIn } />
              <Stack.Screen name="SignUp" component={ SignUp } />
              <Stack.Screen name="ZeliaScreen" component={ ZeliaScreen } />
            </Stack.Navigator>

        </NavigationContainer>
  );
}
