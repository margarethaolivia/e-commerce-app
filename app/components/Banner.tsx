import React, { useRef, useEffect, useState } from "react";
import { View, Image, FlatList, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const Banner = ({ images, resizeMode }) => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      setCurrentIndex(nextIndex);

      if (flatListRef.current) {
        flatListRef.current.scrollToIndex({ animated: true, index: nextIndex });
      }
    }, 2000);

    return () => clearInterval(timer);
  }, [currentIndex, images]);

  return (
    <View className="mt-5 h-48 w-full">
      <FlatList
        data={images}
        horizontal
        pagingEnabled
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Image
            source={item}
            style={styles.bannerImage}
            resizeMode={resizeMode}
          />
        )}
        showsHorizontalScrollIndicator={false}
        ref={flatListRef}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bannerImage: {
    width: width,
    height: "100%",
  },
});

export default Banner;
