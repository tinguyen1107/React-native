import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

import Header from "../../Header";
import Collection from "./Collection";
import Category from "./Category";

import springCollection from "../../../../assets/images/temp/banner.jpg";

import fitImage from "../../../../assets/images/temp/fit.jpg";
import littleImage from "../../../../assets/images/temp/little.jpg";
import maxiImage from "../../../../assets/images/temp/maxi.jpg";
import midiImage from "../../../../assets/images/temp/midi.jpg";
import miniImage from "../../../../assets/images/temp/mini.jpg";
import partyImage from "../../../../assets/images/temp/party.jpg";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <View style={styles.container}>
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
      </View>
    </View>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "#DBDBDB",
  },
});
