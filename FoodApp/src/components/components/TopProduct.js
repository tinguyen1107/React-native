import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const { width, height } = Dimensions.get("window");

function ProductContainer(props) {
  return (
    <View
      style={{
        width: (width - 60) / 2,
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
          width: (width - 60) / 2,
          height: (((width - 60) / 2) * 452) / 361,
          marginBottom: 5,
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
        }}
        source={props.image}
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
          justifyContent: "space-between",
        }}
      >
        {props.data.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                props.navigation.navigate("ProductDetail", { item: item });
              }}
            >
              <ProductContainer
                name={item[0]}
                price={item[1]}
                image={item[2]}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#FFF",
    width: width - 20,
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
