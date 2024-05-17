import React, { useState } from "react";
import { View, Text } from "react-native";
import SearchInput from "./SearchInput";
import Banner from "./Banner";
import Categories from "./Categories";

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
      <Text className="text-3xl font-bold pt-5">Welcome Back!</Text>
      <Text className="text-xl font-semibold mb-5">
        Continue your journey at ShopEase
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

export default Header;
