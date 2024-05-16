import React from "react";
import { Text, FlatList, TouchableOpacity } from "react-native";

const categories = [
  { id: "0", text: "All", name: "all" },
  { id: "1", text: "Smartphones", name: "smartphones" },
  { id: "2", text: "Laptops", name: "laptops" },
  { id: "3", text: "Fragrances", name: "fragrances" },
  { id: "4", text: "Skincare", name: "skincare" },
  { id: "5", text: "Groceries", name: "groceries" },
  { id: "6", text: "Home Decoration", name: "home-decoration" },
];

const Categories = ({ selectedCategory, onPress }) => {
  const renderCategoryItem = ({ item }) => {
    const isSelected = item.name === selectedCategory;
    return (
      <TouchableOpacity
        className="py-2 px-5 mx-1 rounded-full border border-gray-300"
        style={[
          isSelected && { backgroundColor: "#8B4000", borderColor: "#000" },
        ]}
        onPress={() => onPress(item.name)}
      >
        <Text
          className="text-black"
          style={[isSelected && { color: "#fff", fontWeight: "bold" }]}
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

export default Categories;
