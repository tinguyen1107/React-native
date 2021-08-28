import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Header from "../../Header";

export default function Contact({ navigation }) {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <View style={styles.container}>
        <Text>Contact View</Text>
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

