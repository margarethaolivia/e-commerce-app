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

const { width } = Dimensions.get("window");

const bannerImages = [
  { id: "1", src: require("./../../assets/banner1.jpg") },
  { id: "2", src: require("./../../assets/banner2.jpg") },
  { id: "3", src: require("./../../assets/banner3.jpg") },
];

const categories = [
  { id: "1", name: "Smartphones" },
  { id: "2", name: "Laptops" },
  { id: "3", name: "Fragrances" },
  { id: "4", name: "Skincare" },
  { id: "5", name: "Groceries" },
  { id: "6", name: "Home Decoration" },
];

const Header = () => {
  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (currentIndex + 1) % bannerImages.length;
      setCurrentIndex(nextIndex);

      if (flatListRef.current) {
        flatListRef.current.scrollToIndex({ animated: true, index: nextIndex });
      }
    }, 2000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <View>
      <Text style={styles.userName}>Hello, Olivia!</Text>
      <Text style={styles.headerText}>Welcome to the E-Commerce App</Text>
      <SearchInput />
      <View style={styles.bannerContainer}>
        <FlatList
          data={bannerImages}
          horizontal
          pagingEnabled
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Image source={item.src} style={styles.bannerImage} />
          )}
          showsHorizontalScrollIndicator={false}
          ref={flatListRef}
        />
      </View>
      <View style={styles.categoriesContainer}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <FlatList
          data={categories}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.categoryItem}>
              <Text>{item.name}</Text>
            </View>
          )}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <Text style={styles.sectionTitle}>Recommendation</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  userName: {
    fontSize: 32,
    fontWeight: "bold",
    paddingTop: 60,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  bannerContainer: {
    height: 200,
    width: width,
  },
  bannerImage: {
    width: width,
    height: "100%",
  },
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
    marginHorizontal: 5,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ccc",
  },
});

export default Header;
