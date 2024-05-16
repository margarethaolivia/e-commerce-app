import React, { useRef, useEffect, useState } from "react";
import { View, Image, FlatList, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const Carousel = ({ images, resizeMode }) => {
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
    <View className="p-4 m-1 h-72 w-fullr">
      <FlatList
        data={images}
        horizontal
        pagingEnabled
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item }}
            style={styles.carouselImage}
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
  container: {
    marginTop: 5,
    height: 200,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  carouselImage: {
    width: width,
    height: "100%",
  },
});

export default Carousel;
