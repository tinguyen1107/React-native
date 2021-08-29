import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

export default function Authentication({ navigation }) {
  const {
    container,
    header,
    text,
    image,
    content,
    coupleButton,
    signIn,
    signUp,
  } = styles;
  return (
    <SafeAreaView style={container}>
      <View style={header}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Main");
          }}
        >
          <Image
            source={require("../../assets/images/appIcon/back_white.png")}
            style={image}
          />
        </TouchableOpacity>
        <Text style={text}>Wearing a Dress</Text>
        <Image
          style={image}
          source={require("../../assets/images/appIcon/ic_logo.png")}
        />
      </View>
      <View style={content}>
        <CustomTextInput
          width={width * 0.8}
          placeholder="Enter your email..."
        />
        <CustomTextInput
          width={width * 0.8}
          placeholder="Enter your Password..."
        />
      </View>
      <View style={coupleButton}>
        <TouchableOpacity style={signIn}>
          <Text>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={signUp}>
          <Text>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

class CustomTextInput extends Component {
  render() {
    return (
      <View style={{ width: this.props.width }}>
        <TextInput
          style={{
            paddingBottom: 5,
            fontSize: 20,
            borderBottomWidth: 1.5,
            borderBottomColor: "#FFF",
            shadowColor: "#000000",
            shadowOffset: { width: 0, height: 10 },
            shadowOpacity: 0.2,
            width: "100%",
            marginVertical: 10,
            color: "#FFF",
          }}
          placeholder={this.props.placeholder}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#34B089",
  },
  header: {
    flexDirection: "row",
    width: "90%",
    alignItems: "center",
  },
  text: {
    fontFamily: "Avenir",
    fontSize: 25,
    color: "#FFF",
  },
  image: {
    width: 30,
    height: 30,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  coupleButton: {
    flexDirection: "row",
    width: width * 0.7,
    height: 50,
    borderRadius: 25,
  },
  signIn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderBottomLeftRadius: 25,
    borderTopLeftRadius: 25,
    marginRight: 5,
  },
  signUp: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    borderBottomRightRadius: 25,
    borderTopRightRadius: 25,
  },
});
