import React, { useRef, useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

const bannerImages = [
  { id: "1", src: require("./../../assets/banner1.jpg") },
  { id: "2", src: require("./../../assets/banner2.jpg") },
  { id: "3", src: require("./../../assets/banner3.jpg") },
];

const Banner = () => {
  const flatListRef = useRef(null);
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
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    marginTop: 20,
    height: 200,
    width: width,
  },
  bannerImage: {
    width: width,
    height: "100%",
  },
});

export default Banner;
