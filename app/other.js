import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text>Other text</Text>
      {/* <Link href="/">Home</Link> */}
      <Button onPress={() => router.push("/")} title="????????" />
      <StatusBar style="auto" />
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
