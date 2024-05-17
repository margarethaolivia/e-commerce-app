import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";
import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "./components/CustomButton";

const Welcome = () => {
  const navigation = useNavigation();

  const handleLoginPress = () => {
    navigation.navigate("login");
  };

  return (
    <SafeAreaView className="bg-primary h-full bg-white p-4">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="w-full flex justify-center items-center h-full px-4">
          <Image
            source={require("./../assets/illustration.png")}
            className="h-80"
            resizeMode="contain"
          />
          <View className="relative mt-10">
            <Text className="text-3xl font-bold text-center">
              Welcome to ShopEase!
            </Text>
          </View>
          <Text className="text-lg text-gray-500 mt-3 mb-12 text-center">
            Explore thousands of products at your fingertips. Dive into a world
            of amazing products and unbeatable prices.
          </Text>
          <CustomButton title="Login to the app" onPress={handleLoginPress} />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default Welcome;
