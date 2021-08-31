import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { useFonts } from "expo-font";
import colors from "./assets/colors/colors";
//import Icon from 'react-native-vector-icons/Ionicons';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Main from "./src/Components/Main/Main";
import OrderHistory from "./src/Components/OrderHistory/OrderHistory";

import ProductDetail from "./src/Components/Product/ProductDetail";

const Stack = createNativeStackNavigator();

export default function App() {
  const link = "./assets/fonts";
  const [loaded] = useFonts({
    Montserrat_Bold: require(link + "/Montserrat-Bold.ttf"),
    Montserrat_Medium: require(link + "/Montserrat-Medium.ttf"),
  });

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
          name="ProductList"
          component={OrderHistory}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
});
