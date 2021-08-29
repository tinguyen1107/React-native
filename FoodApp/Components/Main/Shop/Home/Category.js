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
        <Swiper
          style={swiper}
          showsButtons={false}
          dot={
            <View
              style={{
                backgroundColor: "#D9D9D9",
                width: 4,
                height: 4,
                borderRadius: 4,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 3,
                marginBottom: 3,
              }}
            />
          }
          activeDot={
            <View
              style={{
                backgroundColor: "#34B089",
                width: 5,
                height: 5,
                borderRadius: 4,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 3,
                marginBottom: 3,
              }}
            />
          }
          paginationStyle={{
            bottom: 5,
          }}
        >
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
  text: {
    color: "#34B089",
    fontSize: 19,
    fontWeight: "bold",
  },
  swiper: {
    borderRadius: 5,
  },
});

export default Category;
