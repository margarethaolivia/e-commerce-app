import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const ProductCard = ({ item }) => {
  return (
    <View style={styles.productItem}>
      <Image source={{ uri: item.thumbnail }} style={styles.productImage} />
      <Text style={styles.productName} numberOfLines={1} ellipsizeMode="tail">
        {item.title}
      </Text>
      <Text style={styles.productBrand}>{item.brand}</Text>
      <Text style={styles.productPrice}>${item.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  productItem: {
    backgroundColor: "#f9f9f9",
    padding: 10,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 15,
    width: width / 2 - 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 2,
  },
  productImage: {
    width: "100%",
    height: 100,
    resizeMode: "cover",
    borderRadius: 10,
  },
  productName: {
    fontSize: 14,
    marginTop: 10,
    maxWidth: "100%",
  },
  productBrand: {
    fontSize: 12,
    marginTop: 2,
    maxWidth: "100%",
    color: "#808080",
  },
  productPrice: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 5,
  },
});

export default ProductCard;
