import React from 'react';
import { 
    StyleSheet,
    View,
    Text,
} from 'react-native';

export default function ChangeInfo () {
    return (
        <View style={styles.container}>
            <Text>Change Info Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
