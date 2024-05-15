import React from "react";
import { SafeAreaView, FlatList, StyleSheet } from "react-native";
import Header from "./../components/Header";
import ProductCard from "./../components/ProductCard";

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

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={Header}
        data={trendingProducts}
        renderItem={({ item }) => <ProductCard item={item} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.productsContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  productsContainer: {
    justifyContent: "space-between",
    paddingBottom: 20,
  },
});

export default HomeScreen;
