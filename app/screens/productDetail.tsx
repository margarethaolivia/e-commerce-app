// ProductDetail.js
import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

const ProductDetail = ({ route }) => {
  const { productId } = route.params;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [productId]);

  if (!product) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.thumbnail }} style={styles.productImage} />
      <Text style={styles.productTitle}>{product.title}</Text>
      <Text style={styles.productBrand}>{product.brand}</Text>
      <Text style={styles.productPrice}>${product.price}</Text>
      <Text style={styles.productDescription}>{product.description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  productImage: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },
  productTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  productBrand: {
    fontSize: 18,
    color: "#888",
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 22,
    color: "#000",
    marginBottom: 10,
  },
  productDescription: {
    fontSize: 16,
    color: "#000",
  },
});

export default ProductDetail;
