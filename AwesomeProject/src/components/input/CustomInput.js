import { StyleSheet, TextInput, View } from "react-native";

export default function CustomInput({ placeholder, secureTextEntry }) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
      ></TextInput>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 10,
    borderColor: "#F1F1F3",
    borderWidth: 1,
  },
});
