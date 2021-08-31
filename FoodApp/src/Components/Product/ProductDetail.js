import React from "react";
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";

import SimpleHeader from "../SimpleHeader";

const { width } = Dimensions.get("window");

export default function ProductDetail({ route, navigation }) {
  const { container } = styles;

  const product = route.params.item;

  return (
    <View style={container}>
      <SimpleHeader name={product[0]} navigation={navigation} />
      <View style={container}>
        <Image
          style={{ width: width, height: width * 1.25 }}
          source={product[2]}
        />
        <View style={{ padding: 10 }}>
          <Text>{product[0]}</Text>
          <Text>{product[1]}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
