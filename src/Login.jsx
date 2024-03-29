import React from "react";
import { Text, TextInput, TouchableOpacity, View, StyleSheet } from "react-native";
import { colors, fontSizes, fontTypes, elementHeights } from "./Theme"
import LogoContainer from "./LoginComponents/LogoContainer";
import FormContainer from "./LoginComponents/FormContainer";

const Login = ({ pageStyle }) => {
  console.log(pageStyle);
  return (
    <>
      <View style={{ flex: 3, borderWidth: 1, borderColor: 'blue', alignItems: "center"}}>
        <LogoContainer />
      </View>
      <View style={{ flex: 2, borderWidth: 1, borderColor: 'blue', alignItems: "center"}}>
        <FormContainer />
      </View>
      <View style={styles.footerContainer}>

      </View>
    </>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    flex: 1,
    alignItems: "center",
    borderWidth: 1,
    borderColor: 'yellow',
  },
});


export default Login;
