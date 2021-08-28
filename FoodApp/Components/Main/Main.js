import React from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  Button,
  Dimensions,
} from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

import Shop from "./Shop/Shop";
import ChangeInfo from "../ChangeInfo/ChangeInfo";
import OrderHistory from "../OrderHistory/OrderHistory";

const Drawer = createDrawerNavigator();

export default function Main({ navigation }) {
  function goToAuthentication() {
    navigation.push("Authentication");
  }

  function goToChangeInfo() {
    navigation.push("ChangeInfo");
  }

  function goToOrderHistory() {
    navigation.push("OrderHistory");
  }

  function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 15,
          }}
        >
          <Image
            style={{
              width: 50,
              height: 50,
              marginTop: 5,
            }}
            source={require("../../assets/favicon.png")}
          />
          <Text>Nguyen Trong Tin</Text>
        </View>
        <DrawerItemList {...props} />
        <DrawerItem label="Help" onPress={() => alert("Link to help")} />
        <DrawerItem label="Log Out" onPress={() => alert("Log Out Account")} />
      </DrawerContentScrollView>
    );
  }

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerStyle: {
          backgroundColor: "#34B089",
        },
        headerTitle: (props) => <Header {...props} />,
      }}
    >
      <Drawer.Screen
        name="Shop"
        component={Shop}
        options={{ headerShown: false }}
      />
      <Drawer.Screen name="OrderHistory" component={OrderHistory} />
      <Drawer.Screen name="ChangeInfo" component={ChangeInfo} />
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
