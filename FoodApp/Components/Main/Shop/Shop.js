import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./Home/Home";
import Cart from "./Cart/Cart";
import Search from "./Search/Search";
import Contact from "./Contact/Contact";

const Tab = createBottomTabNavigator();

export default function Shop() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Shop"
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
