import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from "react-native";

import { back_left_white } from "../../../assets/index";
import { SimpleHeader, ProductCard } from "../../components/index";

export default function ProductList({ route, navigation }) {
  const listProduct = route.params.data;

  return (
    <View style={styles.container}>
      <SimpleHeader
        name={route.params.headerTitle}
        image={back_left_white}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <ScrollView style={{ flex: 1 }}>
        <SafeAreaView>
          {listProduct.map((product, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  navigation.navigate("ProductDetail", { item: product });
                }}
              >
                <ProductCard product={product} />
              </TouchableOpacity>
            );
          })}
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
