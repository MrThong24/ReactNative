import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function CustomButtonGoogle() {
  return (
    <View style={styles.container}>
      <Icon style={styles.icon} name="google" size={30} color="#900" />
      <Text style={styles.text}>Sign in with Google</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffff",
    borderColor: "#F1F1F3",
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 13,
    borderRadius: 10,
    lineHeight: 13,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  text: {
    marginLeft: 10,
    fontSize: 16,
    color: "#4B5264",
    fontWeight: "600",
  },
});
