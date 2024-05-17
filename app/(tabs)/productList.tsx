import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
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
    let url = "https://dummyjson.com/products?limit=100";
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
    <View className="flex-1 bg-white px-5 pt-12">
      <Text className="text-xl font-bold mb-4 pt-2">Product List</Text>
      <SearchInput />
      <View className="mt-5 mb-4">
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
        contentContainerClassName="flex justify-between pb-5"
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ProductList;
