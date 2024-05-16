import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import Carousel from "./../components/Carousel";

const ProductDetail = () => {
  const { productId } = useLocalSearchParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (productId) {
      fetch(`https://dummyjson.com/products/${productId}`)
        .then((response) => response.json())
        .then((data) => {
          setProduct(data);
        })
        .catch((error) => {
          console.error("Error fetching product details: ", error);
        });
    }
  }, [productId]);

  if (!product) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Carousel images={product.images} resizeMode="contain" />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.brand}>{product.brand}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  brand: {
    fontSize: 18,
    color: "#888",
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
  },
});

export default ProductDetail;
