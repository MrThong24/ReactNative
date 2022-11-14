import { StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/button/CustomButton";
import CustomButtonGoogle from "../components/button/CustomButtonGoogle";
import CustomInput from "../components/input/CustomInput";
import LayoutAuthentication from "../layout/LayoutAuthentication";

export default function SignIn() {
  return (
    <LayoutAuthentication>
      <View style={styles.container}>
        <CustomButtonGoogle></CustomButtonGoogle>
        <View style={styles.field}>
          <Text style={styles.label}>Số điện thoại *</Text>
          <CustomInput placeholder="Số diện thoại"></CustomInput>
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Mật khẩu *</Text>
          <CustomInput placeholder="Mật khẩu" secureTextEntry></CustomInput>
        </View>
        <Text style={styles.forgot}>Forgot password</Text>
        <CustomButton></CustomButton>
      </View>
    </LayoutAuthentication>
  );
}
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 44,
  },
  field: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    color: "#4B5264",
    marginBottom: 10,
  },
  forgot: {
    fontWeight: "500",
    fontSize: 16,
    color: "#1DC071",
    textAlign: "right",
    marginBottom: 30,
  },
});
