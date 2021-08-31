import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { SimpleHeader } from "../../components/index";
import { menu } from "../../../assets/index";
export default function ChangeInfo({ navigation }) {
  return (
    <View style={styles.container}>
      <SimpleHeader
        name="Information"
        image={menu}
        onPress={() => {
          navigation.toggleDrawer();
        }}
        navigation={navigation}
      />
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
