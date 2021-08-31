import React from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import {
  Header,
  Category,
  Collection,
  TopProduct,
} from "../../components/index";

import {
  springCollection,
  fitDress,
  littleDress,
  maxiDress,
  midiDress,
  miniDress,
  partyDress,
  pinkDress,
  whiteDress,
  flowerDress,
  redDress,
  blackDress,
} from "../../../assets/index";

export default function Home({ navigation }) {
  const listTopProduct = [
    ["Pink Dress", "400$", pinkDress],
    ["White Dress", "450$", whiteDress],
    ["Flower Dress", "499$", flowerDress],
    ["Red Dress", "399$", redDress],
    ["Black Dress", "530$", blackDress],
  ];

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <ScrollView style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ProductList", {
              data: listTopProduct,
              headerTitle: "Spring Collection",
            });
          }}
        >
          <Collection title="SPRING COLLECTION" image={springCollection} />
        </TouchableOpacity>
        <Category
          title="LIST OF CATEGORY"
          image={[
            //fitImage,
            ["Little Dress", littleDress],
            ["Maxi Dress", maxiDress],
            ["Midi Dress", midiDress],
            //miniImage,
            // partyImage,
          ]}
        />
        <TopProduct
          title="TOP PRODUCT"
          data={listTopProduct}
          navigation={navigation}
        />
      </ScrollView>
    </View>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "#DBDBDB",
  },
});
