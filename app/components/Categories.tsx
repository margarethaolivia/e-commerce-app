import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import SearchInput from "./../components/SearchInput";
import ProductCard from "../components/ProductCard";

const categories = [
  { id: "0", text: "All", name: "all" },
  { id: "1", text: "Smartphones", name: "smartphones" },
  { id: "2", text: "Laptops", name: "laptops" },
  { id: "3", text: "Fragrances", name: "fragrances" },
  { id: "4", text: "Skincare", name: "skincare" },
  { id: "5", text: "Groceries", name: "groceries" },
  { id: "6", text: "Home Decoration", name: "home-decoration" },
];

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState("0");

  const handleCategoryPress = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const renderCategoryItem = ({ item }) => {
    const isSelected = item.id === selectedCategory;
    return (
      <TouchableOpacity
        style={[
          styles.categoryItem,
          isSelected && { backgroundColor: "#8B4000", borderColor: "#000" },
        ]}
        onPress={() => handleCategoryPress(item.id)}
      >
        <Text
          style={[
            styles.categoryText,
            isSelected && { color: "#fff", fontWeight: "bold" },
          ]}
        >
          {item.text}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={categories}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  categoryItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 5,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  categoryText: {
    color: "#000",
  },
});

export default Categories;
