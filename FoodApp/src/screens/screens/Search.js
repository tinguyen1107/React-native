import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { Header } from "../../components/index";

export default function Search({ navigation }) {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <View style={styles.container}>
        <Text>Search View</Text>
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

