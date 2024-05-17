import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  Modal,
  TouchableOpacity,
  Linking,
} from "react-native";
import CustomButton from "./components/CustomButton";
import { useNavigation } from "expo-router";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation();

  const handleLogin = () => {
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
        expiresInMins: 30, // optional, defaults to 60
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.token) {
          navigation.navigate({
            name: "(tabs)",
            params: { username: data.firstName },
          });
        } else {
          setModalVisible(true);
        }
      })
      .catch((error) => {
        Alert.alert("Login Failed", "An error occurred. Please try again.");
        console.error("Error logging in:", error);
      });
  };

  return (
    <View className="w-full flex justify-center items-center h-full px-4 bg-white">
      <Image
        source={require("./../assets/login.png")}
        className="h-72"
        resizeMode="contain"
      />
      <Text className="text-3xl font-bold text-center">Login</Text>
      <Text className="text-lg text-gray-500 mt-3 mb-12 text-center mb-7">
        Log in to your account and pick up where you left off for your shopping
        experience
      </Text>
      <TextInput
        className="text-base px-4 my-1 h-14 w-full border border-gray-300 rounded-md"
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        className="text-base px-4 my-1 h-14 w-full border border-gray-300 rounded-md mb-12"
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <CustomButton
        title="            Login            "
        onPress={handleLogin}
      />

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View
          className="flex-1 justify-center items-center"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <View
            className="m-5 bg-white rounded-2xl p-4 items-center"
            style={styles.modalView}
          >
            <Text className="text-xl font-bold mb-2">Login Failed</Text>
            <Text className="text-base text-center">
              Username or password is incorrect. {`\n`} Hint: use any user's
              credentials from this API
            </Text>
            <TouchableOpacity
              onPress={() => Linking.openURL("https://dummyjson.com/users")}
            >
              <Text className="text-base text-blue-500 underline mb-5">
                https://dummyjson.com/users
              </Text>
            </TouchableOpacity>
            <Button
              title="     OK     "
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalView: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default LoginScreen;
