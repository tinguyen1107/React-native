import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";

import { menu, logo } from "../../../../assets/index";

const { width } = Dimensions.get("window");

function Header(props) {
  const { wrapper, content, firstRow, menuButton, title, icon, textInput } =
    headerStyles;
  return (
    <View style={wrapper}>
      <SafeAreaView style={content}>
        <View style={firstRow}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.toggleDrawer();
            }}
            style={menuButton}
          >
            <Image
              style={icon}
              source={menu}
            />
          </TouchableOpacity>
          <Text style={title}>Wearing a Dress</Text>
          <Image
            style={icon}
            source={logo}
          />
        </View>
        <View>
          <TextInput style={textInput} placeholder="What do you want to buy?" />
        </View>
      </SafeAreaView>
    </View>
  );
}

const headerStyles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    height: 130,
    width: width,
    backgroundColor: "#34B089",
  },
  content: {
    margin: 15,
    width: "95%",
  },
  firstRow: {
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  menuButton: {
    width: 25,
    height: 25,
    marginRight: 15,
  },
  title: {
    fontFamily: "Avenir",
    fontSize: 20,
    color: "#FFF",
  },
  icon: {
    width: 25,
    height: 25,
  },
  textInput: {
    width: "100%",
    height: 30,
    backgroundColor: "#FFF",
    borderRadius: 7,
    paddingHorizontal: 7,
    marginBottom: 10,
  },
});

export default Header;
