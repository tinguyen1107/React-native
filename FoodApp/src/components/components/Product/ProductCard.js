import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default function ProductCard(props) {
  return (
    <View style={styles.container}>
      <Image
        style={{
          width: 120,
          height: 150,
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
          marginRight: 10,
        }}
        source={props.product[2]}
      />
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{props.product[0]}</Text>
        <Text style={{ fontFamily: "Avenir", fontSize: 17, color: "#595959" }}>
          Cost: {props.product[1]}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width - 20,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFF",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    margin: 10,
    borderRadius: 10,
  },
  title: {
    fontFamily: "Avenir",
    fontSize: 25,
    color: "#34B089",
  },
});
