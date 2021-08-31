import React, { Component, useState } from "react";
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

import { back_left_white, logo } from "../../../assets/index";

const { width } = Dimensions.get("window");

export default function Authentication({ navigation }) {
  const {
    container,
    header,
    title,
    image,
    content,
    coupleButton,
    signIn,
    signUp,
    textActive,
    textInactive,
    buttonOutline,
    text,
  } = styles;

  const [state, setState] = useState();

  function changeState(isSignIn) {
    setState(isSignIn);
  }

  function ViewForState() {
    if (state) {
      return (
        <View style={content}>
          <CustomTextInput
            width={width * 0.8}
            placeholder="Enter your email..."
          />
          <CustomTextInput
            width={width * 0.8}
            placeholder="Enter your password..."
          />
          <TouchableOpacity
            onPress={() => alert("Sign in now")}
            style={buttonOutline}
          >
            <Text style={text}>Sign In</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View style={content}>
          <CustomTextInput
            width={width * 0.8}
            placeholder="Enter your name..."
          />
          <CustomTextInput
            width={width * 0.8}
            placeholder="Enter your email..."
          />
          <CustomTextInput
            width={width * 0.8}
            placeholder="Enter your password..."
          />
          <CustomTextInput
            width={width * 0.8}
            placeholder="Re-enter your password..."
          />
          <TouchableOpacity
            onPress={() => alert("Sign in now")}
            style={buttonOutline}
          >
            <Text style={text}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }

  return (
    <SafeAreaView style={container}>
      <View style={header}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image
            source={back_left_white}
            style={image}
          />
        </TouchableOpacity>
        <Text style={title}>Wearing a Dress</Text>
        <Image
          style={image}
          source={logo}
        />
      </View>

      <ViewForState />

      <View style={coupleButton}>
        <TouchableOpacity style={signIn} onPress={() => changeState(true)}>
          <Text style={state ? textActive : textInactive}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={signUp} onPress={() => changeState(false)}>
          <Text style={state ? textInactive : textActive}>Sign Up</Text>
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
    justifyContent: "space-between",
  },
  title: {
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
    width: width * 0.8,
    borderRadius: 25,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
  },
  signIn: {
    flex: 1,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderBottomLeftRadius: 25,
    borderTopLeftRadius: 25,
    marginRight: 5,
  },
  signUp: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    borderBottomRightRadius: 25,
    borderTopRightRadius: 25,
  },
  textActive: {
    color: "#34B089",
    fontFamily: "Avenir",
    fontSize: 17,
    fontWeight: "700",
  },
  textInactive: {
    color: "#A6A6A6",
    fontFamily: "Avenir",
    fontSize: 17,
    fontWeight: "500",
  },
  buttonOutline: {
    paddingVertical: 10,
    marginTop: 15,
    width: width * 0.8,
    borderColor: "#FFF",
    borderWidth: 2,
    borderRadius: 100,
    alignItems: "center",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
  },
  text: {
    fontSize: 15,
    color: "#FFF",
    fontFamily: "Avenir",
    fontWeight: "normal",
  },
});
