import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

function ProductContainer(props) {
  return (
    <View
      style={{
        width: width / 2.6 + 10,
        backgroundColor: "#FFF",
        shadowColor: "#2E272B",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        margin: 10,
        marginTop: 0,
        borderRadius: 5,
      }}
    >
      <Image
        style={{
          flex: 3,
          width: width / 2.6,
          height: ((width / 2.6) * 452) / 361,
          margin: 5,
          borderRadius: 3,
        }}
        source={require("../../../../assets/images/temp/sp1.jpeg")}
      />
      <View style={{ flex: 1, marginLeft: 5, marginBottom: 5 }}>
        <Text
          style={{ color: "#BFBFBF", fontFamily: "Avenir", fontWeight: "500" }}
        >
          {props.name}
        </Text>
        <Text
          style={{ color: "#FF9999", fontFamily: "Avenir", fontWeight: "500" }}
        >
          {props.price}
        </Text>
      </View>
    </View>
  );
}

function TopProduct(props) {
  const { wrapper, title } = styles;

  return (
    <View style={wrapper}>
      <View style={{ flex: 1, padding: 10, justifyContent: "center" }}>
        <Text style={title}>{props.title}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <ProductContainer name="Pinky Dress" price="400$" />
        <ProductContainer name="Pinky Dress" price="400$" />
        <ProductContainer name="Pinky Dress" price="400$" />
        <ProductContainer name="Pinky Dress" price="400$" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#FFF",
    width: width * 0.95,
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
});

export default TopProduct;
