import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export const DavidScreen = ({navigation}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>
                Hello world! Testing...
                <Text style={{color: 'red'}}> and red</Text>
            </Text>
        </View>
    );
}
