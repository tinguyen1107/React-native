import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useFonts } from 'expo-font'; 
import colors from './assets/colors/colors';
//import Icon from 'react-native-vector-icons/Ionicons';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Authentication from './Components/Authentication/Authentication';
import ChangeInfo from './Components/ChangeInfo/ChangeInfo';
import Main from './Components/Main/Main';
import OrderHistory from './Components/OrderHistory/OrderHistory';

const Stack = createNativeStackNavigator();

export default function App() { 
    const link = './assets/fonts'
    const [loaded] = useFonts({
        Montserrat_Bold: require(link + '/Montserrat-Bold.ttf'),
        Montserrat_Medium: require(link + '/Montserrat-Medium.ttf'),
    })

    if (!loaded) {
        return null;
    }

    return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
            <Stack.Screen 
                name="Main" 
                component={Main} 
                options={{ headerShown: false }}
            />
            <Stack.Screen 
                name="Authentication" 
                component={Authentication} 
                options={{ headerShown: true }}
            />
            <Stack.Screen 
                name="ChangeInfo" 
                component={ChangeInfo} 
                options={{ headerShown: true }}
            />
            <Stack.Screen 
                name="OrderHistory" 
                component={OrderHistory} 
                options={{ headerShown: true }}
            />
        </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
