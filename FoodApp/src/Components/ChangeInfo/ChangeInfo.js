import React from "react";
import { StyleSheet, View, Text } from "react-native";

import SimpleHeader from "../SimpleHeader";

export default function ChangeInfo({ navigation }) {
  return (
    <View style={styles.container}>
      <SimpleHeader name="Information" navigation={navigation} />
      <View style={{ flex: 1 }}>
        <Text>Change Info Screen</Text>
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
