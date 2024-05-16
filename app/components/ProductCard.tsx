import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";

const { width } = Dimensions.get("window");

const ProductCard = ({ item }) => {
  const navigation = useNavigation();

  const handleCardPress = () => {
    navigation.navigate({
      name: "product/[productId]",
      params: { productId: item.id },
    });
  };

  return (
    <TouchableOpacity style={styles.productItem} onPress={handleCardPress}>
      <Image source={{ uri: item.thumbnail }} style={styles.productImage} />
      <Text
        className="text-sm mt-2 max-w-full"
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {item.title}
      </Text>
      <Text className="text-xs mt-1 max-w-full text-gray-500">
        {item.brand}
      </Text>
      <View className="flex flex-row justify-between items-center">
        <Text className="text-2xl font-bold my-2 text-left">${item.price}</Text>
        <View className="flex flex-row">
          <Ionicons name="star" size={16} color="#FFD700" />
          <Text className="text-sm text-gray-500 text-right ml-1">
            {item.rating}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
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
});

export default ProductCard;
