import React, { useEffect, useState } from "react";
import { SafeAreaView, FlatList, StyleSheet } from "react-native";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";

const HomeScreen = () => {
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

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={Header}
        data={products}
        renderItem={({ item }) => <ProductCard item={item} />}
        keyExtractor={(item) => item.id.toString()}
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
