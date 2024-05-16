import React, { useRef, useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
} from "react-native";
import SearchInput from "./SearchInput";
import Banner from "./Banner";
import Categories from "./Categories";

const { width } = Dimensions.get("window");

const bannerImages = [
  require("./../../assets/banner1.jpg"),
  require("./../../assets/banner2.jpg"),
  require("./../../assets/banner3.jpg"),
];

const Header = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategoryPress = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <View>
      <Text className="text-3xl font-bold pt-6">Hello, Olivia!</Text>
      <Text className="text-xl font-bold mb-5">
        Welcome to the E-Commerce App
      </Text>
      <SearchInput />
      {/* Pass the imported images as props */}
      <Banner images={bannerImages} />
      <View className="my-3">
        <Text className="text-xl font-bold my-2">Categories</Text>
        <Categories
          selectedCategory={selectedCategory}
          onPress={handleCategoryPress}
        />
      </View>
      <Text className="text-xl font-bold my-2">Recommendation</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  categoriesContainer: {
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  categoryItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 3,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ccc",
  },
});

export default Header;
