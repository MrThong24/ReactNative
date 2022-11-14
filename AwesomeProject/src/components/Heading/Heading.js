import { StyleSheet, Text } from "react-native";

export default function Heading({ children }) {
  return <Text style={styles.heading}>{children}</Text>;
}
const styles = StyleSheet.create({
  heading: {
    fontWeight: "600",
    fontSize: 18,
    color: "#171725",
    textAlign: "center",
    marginBottom: 5,
  },
});
