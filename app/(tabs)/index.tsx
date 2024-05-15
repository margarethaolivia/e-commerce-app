import React, { useRef, useEffect, useState } from "react";
import {
  SafeAreaView,
  TextInput,
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const bannerImages = [
  { id: "1", src: require("./../../assets/placeholder.png") },
  { id: "2", src: require("./../../assets/placeholder.png") },
  { id: "3", src: require("./../../assets/placeholder.png") },
];

const categories = [
  { id: "1", name: "Smartphones" },
  { id: "2", name: "Laptops" },
  { id: "3", name: "Fragrances" },
  { id: "4", name: "Skincare" },
  { id: "5", name: "Groceries" },
  { id: "6", name: "Home Decoration" },
];

const trendingProducts = [
  {
    id: "1",
    name: "Microsoft Surface Laptop 4",
    image: require("./../../assets/placeholder.png"),
    price: "100",
  },
  {
    id: "2",
    name: "Non-Alcoholic Concentrated Perfume Oil",
    image: require("./../../assets/placeholder.png"),
    price: "150",
  },
  {
    id: "3",
    name: "Product 3",
    image: require("./../../assets/placeholder.png"),
    price: "200",
  },
];

const SearchInput = () => {
  return (
    <View style={styles.inputContainer}>
      <Ionicons
        name="search-outline"
        size={24}
        color="#999"
        style={styles.searchIcon}
      />
      <TextInput
        style={styles.input}
        placeholder="Search for products..."
        placeholderTextColor="#999"
      />
    </View>
  );
};

const HeaderComponent = () => {
  const flatListRef = useRef<FlatList>(null); // Add FlatList type here
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (currentIndex + 1) % bannerImages.length;
      setCurrentIndex(nextIndex);

      if (flatListRef.current) {
        flatListRef.current.scrollToIndex({ animated: true, index: nextIndex });
      }
    }, 2000); // Change image every 0.5 seconds

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

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={HeaderComponent}
        data={trendingProducts}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <Image source={item.image} style={styles.productImage} />
            <Text
              style={styles.productName}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {item.name}
            </Text>
            <Text style={styles.productPrice}>${item.price}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.productsContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: "#f9f9f9",
    marginBottom: 20,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
    resizeMode: "contain",
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
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
  searchBar: {
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 16,
    color: "#333",
    backgroundColor: "#f9f9f9",
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
  trendingContainer: {
    marginVertical: 10,
  },
  productItem: {
    backgroundColor: "#f9f9f9",
    padding: 10,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 20,
    width: width / 2 - 25,
  },
  productImage: {
    width: "100%",
    height: 100,
    resizeMode: "cover",
    borderRadius: 10,
  },
  productName: {
    fontSize: 14,
    marginTop: 10,
    maxWidth: "100%",
  },
  productPrice: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 5,
  },
  productsContainer: {
    justifyContent: "space-between",
    paddingBottom: 20,
  },
});

export default HomeScreen;
