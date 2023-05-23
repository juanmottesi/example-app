import { useState } from "react";

import { useRouter } from "expo-router";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text>Username</Text>
      <TextInput onChangeText={setUsername} value={username} />
      <Text>Password</Text>
      <TextInput onChangeText={setPassword} value={password} />
      <Button onPress={() => router.push("/auth")} title="Login" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
