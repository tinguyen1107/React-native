import React from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  SafeAreaView,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import { SimpleHeader } from "../../components/index";

import { back_left_white, cartIconS } from "../../../assets/index";

const { width } = Dimensions.get("window");

export default function ProductDetail({ route, navigation }) {
  const { container } = styles;

  const product = route.params.item;

  return (
    <View style={container}>
      <SimpleHeader
        name={product[0]}
        image={back_left_white}
        navigation={navigation}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <ScrollView style={{ backgroundColor: "#FFF" }}>
        <SafeAreaView>
          <Image
            style={{
              width: width - 20,
              height: (width - 20) * 1.25,
              borderRadius: 10,
              margin: 10,
            }}
            source={product[2]}
          />
          <View
            style={{
              padding: 10,
              borderRadius: 10,
              backgroundColor: "#FFF",
              shadowColor: "#000000",
              shadowOffset: { width: 0, height: 3 },
              shadowOpacity: 0.4,
              shadowRadius: 5,
              marginHorizontal: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "baseline",
              }}
            >
              <Text
                style={{
                  fontFamily: "Avenir",
                  fontSize: 35,
                  color: "#34B089",
                  fontWeight: "300",
                }}
              >
                {product[0]}
              </Text>
              <TouchableOpacity>
                <Image style={{ width: 35, height: 35 }} source={cartIconS} />
              </TouchableOpacity>
            </View>
            <Text
              style={{ fontFamily: "Avenir", fontSize: 20, color: "#666666" }}
            >
              || Cost: {product[1]} ||
            </Text>
            <View style={{}}>
              <Text
                style={{ fontFamily: "Avenir", fontSize: 20, color: "#34B089" }}
              >
                Description
              </Text>
              <Text
                style={{ fontFamily: "Avenir", fontSize: 15, color: "#4D4D4D" }}
              >
                The dancer was one with the music … She raised softly curved
                arms, and a myriad of gold bangles jangled to the rhythm of the
                mounting beat. Only her green feline eyes were visible above the
                diaphanous red silk draped loosely about her head and across the
                lower half of her face. A red peasant blouse slipped down one
                shoulder, sparking the imaginations of her hushed,
                gray-uniformed audience. Inky tresses swirled about her
                undulating hips, hips that invited a man’s caress. … She pivoted
                abruptly and dashed into the oblivion of the night. Gradey
                started to rise, but the clicking of rifles being cocked and
                aimed froze him in place.
              </Text>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
