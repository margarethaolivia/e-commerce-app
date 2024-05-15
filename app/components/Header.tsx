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

const Header = () => {
  return (
    <View>
      <Text style={styles.userName}>Hello, Olivia!</Text>
      <Text style={styles.headerText}>Welcome to the E-Commerce App</Text>
      <SearchInput />
      <Banner />
      <View style={styles.categoriesContainer}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <Categories />
      </View>
      <Text style={styles.sectionTitle}>Recommendation</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  userName: {
    fontSize: 32,
    fontWeight: "bold",
    paddingTop: 50,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  bannerContainer: {
    marginTop: 20,
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
    marginHorizontal: 3,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ccc",
  },
});

export default Header;
