// components/CustomButton.js
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const CustomButton = ({ onPress, title }) => {
  return (
    <TouchableOpacity
      className="py-3 px-6 rounded-full"
      style={{ backgroundColor: "#8B4000" }}
      onPress={onPress}
    >
      <Text className="font-bold text-white text-lg text-center">{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
