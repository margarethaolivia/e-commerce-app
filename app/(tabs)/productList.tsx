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
import Categories from "../components/Categories";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    fetchProducts(selectedCategory);
  }, [selectedCategory]);

  const fetchProducts = (category) => {
    let url = "https://dummyjson.com/products";
    if (category !== "all") {
      url = `https://dummyjson.com/product/category/${category}`;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  const handleCategoryPress = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Product List</Text>
      <SearchInput />
      <View style={styles.categoriesContainer}>
        <Categories
          selectedCategory={selectedCategory}
          onPress={handleCategoryPress}
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
  productsContainer: {
    justifyContent: "space-between",
    paddingBottom: 20,
  },
});

export default ProductList;