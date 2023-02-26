import { StyleSheet, Text, View, Button} from 'react-native';

export const NicholasPage = ( {navigation} ) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Hello Nicholas</Text>
        <Button
            title="Go to Nicholas's Screen" 
            onPress={() => navigation.push('NicholasPage')}
            />
    </View>
    )

    
}