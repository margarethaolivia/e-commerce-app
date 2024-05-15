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

const ProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState("0");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

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
    <View style={styles.container}>
      <Text style={styles.headerText}>Product List</Text>
      <SearchInput />
      <View style={styles.categoriesContainer}>
        <FlatList
          data={categories}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={renderCategoryItem}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCard item={item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.productsContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },
  categoriesContainer: {
    marginTop: 20,
    marginBottom: 15,
  },
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
  productsContainer: {
    justifyContent: "space-between",
    paddingBottom: 20,
  },
});

export default ProductList;
