import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const ProductCard = ({ item }) => {
  return (
    <View style={styles.productItem}>
      <Image source={{ uri: item.thumbnail }} style={styles.productImage} />
      <Text style={styles.productName} numberOfLines={1} ellipsizeMode="tail">
        {item.title}
      </Text>
      <Text style={styles.productBrand}>{item.brand}</Text>
      <View style={styles.priceRatingContainer}>
        <Text style={styles.productPrice}>${item.price}</Text>
        <View style={styles.ratingContainer}>
          <Ionicons name="star" size={16} color="#FFD700" />
          <Text style={styles.productRating}>{item.rating}</Text>
        </View>
      </View>
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
  priceRatingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  productPrice: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 5,
    textAlign: "left",
  },
  ratingContainer: {
    flexDirection: "row",
  },
  productRating: {
    fontSize: 14,
    color: "#808080",
    textAlign: "right",
    marginLeft: 2,
  },
});

export default ProductCard;
