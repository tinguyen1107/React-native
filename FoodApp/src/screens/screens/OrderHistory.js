import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { SimpleHeader } from "../../components/index";
import { menu } from "../../../assets/index";

export default function OrderHistory({ navigation }) {
  const { container } = styles;

  return (
    <View style={container}>
      <SimpleHeader
        name="Order History"
        image={menu}
        onPress={() => {
          navigation.toggleDrawer();
        }}
        navigation={navigation}
      />
      <View style={container}>
        <Text>Order History Screen</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
