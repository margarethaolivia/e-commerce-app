import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

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
});

export default SearchInput;
