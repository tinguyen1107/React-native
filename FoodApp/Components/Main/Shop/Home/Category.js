import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from "react-native";

import Swiper from "react-native-swiper";

const { width, height } = Dimensions.get("window");

function Category(props) {
  const { wrapper, title, image, swiper, text } = styles;

  return (
    <View style={wrapper}>
      <View style={{ flex: 1, padding: 10, justifyContent: "center" }}>
        <Text style={title}>{props.title}</Text>
      </View>
      <View
        style={{ flex: 6, alignItems: "center", padding: 10, paddingTop: 0 }}
      >
        <Swiper style={swiper} showsButtons={false}>
          {props.image.map((item, index) => {
            return (
              <View key={index}>
                <ImageBackground style={image} source={item[1]}>
                  <Text style={text}>{item[0]}</Text>
                </ImageBackground>
              </View>
            );
          })}
        </Swiper>
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
    alignItems: "center",
    justifyContent: "center",
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9",
    borderRadius: 5,
  },
  text: {
    color: "#92BBD9",
    fontSize: 19,
    fontWeight: "bold",
  },
  swiper: {
    borderRadius: 5,
  },
});

export default Category;
