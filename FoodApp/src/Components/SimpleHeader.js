import React from "react";
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";

const { width } = Dimensions.get("window");

export default function SimpleHeader(props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={{
            width: 25,
            height: 25,
            marginLeft: 15,
          }}
          onPress={() => {
            props.navigation.toggleDrawer();
          }}
        >
          <Image
            style={{ width: 25, height: 25 }}
            source={require("../../assets/images/appIcon/ic_menu.png")}
          />
        </TouchableOpacity>
      </View>
      <Text
        style={{
          margin: 15,
          fontFamily: "Avenir",
          color: "#FFF",
          fontSize: 20,
        }}
      >
        {props.name}
      </Text>
      <View
        style={{
          flex: 1,
          alignItems: "flex-end",
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: width,
    backgroundColor: "#34B089",
    alignItems: "center",
    //justifyContent: "",
  },
});
