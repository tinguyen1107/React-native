import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Header from "../../Header";

export default function Cart({ navigation }) {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <View style={styles.container}>
        <Text>Cart View</Text>
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
