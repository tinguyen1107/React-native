import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

function Collection(props) {
  const { wrapper, title, image } = styles;

  return (
    <View style={wrapper}>
      <View style={{ flex: 1, padding: 10, justifyContent: "center" }}>
        <Text style={title}>{props.title}</Text>
      </View>
      <View style={{ flex: 6, alignItems: "center" }}>
        <Image style={image} source={props.image} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#FFF",
    width: width * 0.95,
    height: (width * 0.95) / 2 + 50,
    margin: 10,
    shadowColor: "#2E272B",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    borderRadius: 7,
  },
  title: {
    fontSize: 20,
    color: "#AFAEAF",
  },
  image: {
    width: width * 0.9,
    height: width * 0.45,
    borderRadius: 5,
  },
});

export default Collection;
