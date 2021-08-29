import React from "react";
import { ScrollView, View, StyleSheet, Dimensions } from "react-native";

import Header from "../../Header";
import Collection from "./Collection";
import Category from "./Category";
import TopProduct from "./TopProduct";

import springCollection from "../../../../assets/images/temp/banner.jpg";

import fitImage from "../../../../assets/images/temp/fit.jpg";
import littleImage from "../../../../assets/images/temp/little.jpg";
import maxiImage from "../../../../assets/images/temp/maxi.jpg";
import midiImage from "../../../../assets/images/temp/midi.jpg";
import miniImage from "../../../../assets/images/temp/mini.jpg";
import partyImage from "../../../../assets/images/temp/party.jpg";

import pinkDress from "../../../../assets/images/temp/sp1.jpeg";
import whiteDress from "../../../../assets/images/temp/sp2.jpeg";
import flowerDress from "../../../../assets/images/temp/sp3.jpeg";
import redDress from "../../../../assets/images/temp/sp4.jpeg";
import blackDress from "../../../../assets/images/temp/sp5.jpeg";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <ScrollView style={styles.container}>
        <Collection title="SPRING COLLECTION" image={springCollection} />
        <Category
          title="LIST OF CATEGORY"
          image={[
            //fitImage,
            ["Little Dress", littleImage],
            ["Maxi Dress", maxiImage],
            ["Midi Dress", midiImage],
            //miniImage,
            // partyImage,
          ]}
        />
        <TopProduct
          title="TOP PRODUCT"
          data={[
            ["Pink Dress", "400$", pinkDress],
            ["White Dress", "450$", whiteDress],
            ["Flower Dress", "499$", flowerDress],
            ["Red Dress", "399$", redDress],
            ["Black Dress", "530$", blackDress],
          ]}
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
