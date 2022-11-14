import { StyleSheet, Text, View } from "react-native";
import CustomButtonGoogle from "../components/button/CustomButtonGoogle";
import Heading from "../components/Heading/Heading";

export default function LayoutAuthentication({ children }) {
  return (
    <View style={styles.background}>
      <Heading>Welcome Back!</Heading>
      <Text style={styles.des}>
        Don’t have an account? <Text style={styles.link}>Sign up</Text>
      </Text>
      {children}
    </View>
  );
}
const styles = StyleSheet.create({
  background: {
    width: "100%",
    backgroundColor: "#FCFCFD",
    paddingTop: 100,
    height: "100%",
  },
  des: {
    color: "#808191",
    fontWeight: "400",
    fontSize: 12,
    textAlign: "center",
    marginBottom: 25,
  },
  link: {
    color: "#1DC071",
  },
});
