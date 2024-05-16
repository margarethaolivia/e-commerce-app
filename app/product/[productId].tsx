import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import Carousel from "./../components/Carousel";
import { Ionicons } from "@expo/vector-icons";

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
      <View className="flex-1 justify-center items-center">
        <Text className="text-lg">Loading...</Text>
      </View>
    );
  }

  const originalPrice = Math.ceil(
    (parseFloat(product.price) * 100) /
      (100 - parseFloat(product.discountPercentage))
  );

  return (
    <View className="bg-white h-full">
      <Carousel images={product.images} resizeMode="contain" />
      <View className="p-4 bg-slate-100" style={styles.headerCard}>
        <Text className="text-lg">{product.title}</Text>
        <Text className="text-base text-gray-500">{product.brand}</Text>

        <View className="flex flex-row justify-between items-center">
          <View className="flex flex-row items-center mt-2">
            <Text className="text-3xl font-bold">${product.price}</Text>
            <Text className="text-base text-gray-500 ml-2 line-through">
              ${originalPrice}
            </Text>
            <Text className="text-base font-bold text-red-500 ml-2">
              {product.discountPercentage}% off
            </Text>
          </View>

          <View className="flex flex-row">
            <Ionicons name="star" size={24} color="#FFD700" />
            <Text className="text-lg text-gray-500 font-bold text-right ml-1">
              {product.rating}
            </Text>
          </View>
        </View>
      </View>

      <View className="mt-4 mb-2 p-4 bg-slate-50">
        <Text className="text-lg font-bold">Description</Text>
        <Text className="text-base my-1">{product.description}</Text>
      </View>

      <View className="flex flex-row items-center bg-slate-50">
        <View className="px-4 py-4 w-2/5">
          <Text className="text-lg font-bold">Availability</Text>
          <Text className="text-base my-1">{product.stock} in a stock</Text>
        </View>

        <View className="px-4 py-2">
          <Text className="text-lg font-bold">Category</Text>
          <Text className="text-base mt-1">{product.category}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerCard: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 4,
  },
});

export default ProductDetail;
