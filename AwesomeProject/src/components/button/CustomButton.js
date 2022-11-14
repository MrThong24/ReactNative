import { StyleSheet, Text, View } from "react-native";

export default function CustomButton() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign In</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1DC071",
    width: "100%",
    paddingVertical: 13,
    borderRadius: 10,
  },
  text: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
    color: "#ffffff",
  },
});
