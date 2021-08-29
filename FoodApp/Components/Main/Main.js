import React from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import Shop from "./Shop/Shop";
import ChangeInfo from "../ChangeInfo/ChangeInfo";
import OrderHistory from "../OrderHistory/OrderHistory";

const Drawer = createDrawerNavigator();
const { width } = Dimensions.get("window");

export default function Main({ navigation }) {
  function CustomDrawerContentLoggedIn(props) {
    return (
      <View style={{ flex: 1, backgroundColor: "#34B089" }}>
        <DrawerContentScrollView>
          <View
            style={{
              margin: 15,
              marginBottom: 0,
              flexDirection: "row",
              flex: 1,
            }}
          >
            <Image
              style={{
                width: 50,
                height: 50,
                marginTop: 5,
                marginRight: 5,
              }}
              source={require("../../assets/favicon.png")}
            />
            <View style={{ justifyContent: "center" }}>
              <Text
                style={{
                  color: "#FFF",
                  fontFamily: "Avenir",
                  fontWeight: "700",
                  fontSize: 20,
                  marginRight: 49,
                }}
              >
                Nguyen Trong Tin
              </Text>
              <Text
                style={{
                  color: "#006622",
                  fontFamily: "Avenir",
                  fontSize: 15,
                  fontWeight: "600",
                  marginRight: 49,
                }}
              >
                ntrongtin11702@gmail.com
              </Text>
            </View>
          </View>
          <View
            style={{ width: "100%", alignItems: "center", marginVertical: 15 }}
          >
            <View
              style={{ width: "80%", height: 1, backgroundColor: "#FFF" }}
            />
          </View>
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="cart-outline" color={color} size={size} />
            )}
            label="Shop"
            onPress={() => {
              props.navigation.navigate("Shop");
            }}
            style={{
              backgroundColor: "#FFF",
            }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="clock-outline" color={color} size={size} />
            )}
            label="OrderHistory"
            onPress={() => {
              props.navigation.navigate("OrderHistory");
            }}
            style={{
              backgroundColor: "#FFF",
            }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="account-edit-outline" color={color} size={size} />
            )}
            label="ChangeInfo"
            onPress={() => {
              props.navigation.navigate("ChangeInfo");
            }}
            style={{
              backgroundColor: "#FFF",
            }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="help-circle-outline" color={color} size={size} />
            )}
            label="Help"
            onPress={() => alert("Link to help")}
            style={{
              backgroundColor: "#FFF",
            }}
          />
          <View
            style={{ width: "100%", alignItems: "center", marginVertical: 15 }}
          >
            <View
              style={{ width: "80%", height: 1, backgroundColor: "#FFF" }}
            />
          </View>
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="exit-to-app" color={color} size={size} />
            )}
            label="Sign Out"
            onPress={() => navigation.navigate("Authentication")}
            style={{
              backgroundColor: "#FFF",
            }}
          />
        </DrawerContentScrollView>
      </View>
    );
  }

  function CustomDrawerContent(props) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#34B089",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../../assets/images/temp/profile.png")}
            style={{ width: width / 2, height: width / 2 }}
          />
          <TouchableOpacity
            style={{
              paddingVertical: 10,
              backgroundColor: "#FFF",
              borderRadius: 7,
              marginTop: 15,
              width: width / 2.15,
              alignItems: "center",
            }}
            onPress={() => navigation.navigate("Authentication")}
          >
            <Text
              style={{
                fontFamily: "Avenir",
                fontSize: 15,
                fontWeight: "700",
                color: "#34B089",
              }}
            >
              Sign In
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              paddingVertical: 10,
              backgroundColor: "#FFF",
              borderRadius: 7,
              marginTop: 15,
              width: width / 2.4,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "Avenir",
                fontSize: 15,
                fontWeight: "700",
                color: "#34B089",
              }}
            >
              Setting
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              paddingVertical: 10,
              backgroundColor: "#FFF",
              borderRadius: 7,
              marginTop: 15,
              width: width / 2.8,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "Avenir",
                fontSize: 15,
                fontWeight: "700",
                color: "#34B089",
              }}
            >
              Help
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <Drawer.Navigator
      drawerContent={(props) => {
        if (true) return <CustomDrawerContentLoggedIn {...props} />;
        else return <CustomDrawerContent {...props} />;
      }}
    >
      <Drawer.Screen
        name="Shop"
        component={Shop}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="OrderHistory"
        component={OrderHistory}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="ChangeInfo"
        component={ChangeInfo}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
