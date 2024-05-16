import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SearchInput = () => {
  return (
    <View className="flex flex-row items-center border border-gray-300 rounded-2xl px-4 py-2 bg-gray-50">
      <Ionicons
        name="search-outline"
        size={24}
        color="#999"
        className="w-20 h-20 object-contain"
      />
      <TextInput
        className="flex-1 text-base text-gray-700 ml-2"
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
