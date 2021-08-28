import React from "react";
import { View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./Home/Home";
import Cart from "./Cart/Cart";
import Search from "./Search/Search";
import Contact from "./Contact/Contact";

import homeIconS from "../../../assets/images/appIcon/home.png";
import homeIcon from "../../../assets/images/appIcon/home0.png";
import cartIconS from "../../../assets/images/appIcon/cart.png";
import cartIcon from "../../../assets/images/appIcon/cart0.png";
import searchIconS from "../../../assets/images/appIcon/search.png";
import searchIcon from "../../../assets/images/appIcon/search0.png";
import contactIconS from "../../../assets/images/appIcon/contact.png";
import contactIcon from "../../../assets/images/appIcon/contact0.png";

const Tab = createBottomTabNavigator();

export default function Shop() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case "Home":
              iconName = focused ? homeIconS : homeIcon;
              break;
            case "Cart":
              iconName = focused ? cartIconS : cartIcon;
              break;
            case "Search":
              iconName = focused ? searchIconS : searchIcon;
              break;
            case "Contact":
              iconName = focused ? contactIconS : contactIcon;
              break;
          }

          // You can return any component that you like here!
          return (
            <View>
              <Image style={{ width: 25, height: 25 }} source={iconName} />
            </View>
          );
        },
        tabBarActiveTintColor: "#34B089",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Shop"
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Contact"
        component={Contact}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
