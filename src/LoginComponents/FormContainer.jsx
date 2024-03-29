import React from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { colors, fontSizes, fontTypes, elementHeights } from "../Theme"

const FormContainer = () => {
  return (
    <View style={styles.formContainer}>
      <TextInput style={styles.input} placeholder="Username" placeholderTextColor={colors.textDark} />
      <View style={styles.rectangle}></View>
      <TextInput style={[styles.input, { marginTop: 10 }]} placeholder="Password" placeholderTextColor={colors.textDark} secureTextEntry={true} />
      <View style={styles.rectangle}></View>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.link}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
      <View style={styles.footerContainer}>
        <TouchableOpacity style={styles.link}>
          <Text style={styles.registerText}>New Here? Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
    backgroundColor: colors.secondaryLight,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  input: {
    width: "100%",
    height: elementHeights.textbox,
    backgroundColor: "transparent",
    paddingHorizontal: 15,
    fontFamily: fontTypes.normal,
    fontSize: fontSizes.normal,
    color: colors.textDark,
  },
  rectangle: {
    width: "100%",
    height: 1,
    backgroundColor: colors.primaryDark,
  },
  loginButton: {
    width: "100%",
    height: elementHeights.button,
    backgroundColor: colors.primaryDark,
    paddingVertical: 15,
    borderRadius: 20,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontFamily: fontTypes.normal,
    fontSize: fontSizes.normal,
    color: colors.textLight,
  },
  link: {
    padding: 10,
  },
  forgotPasswordText: {
    fontFamily: fontTypes.normal,
    fontSize: fontSizes.normal,
    color: colors.textDark,
  },
  footerContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: colors.secondaryLight,
  },
  link: {
    padding: 10,
  },
  registerText: {
    fontFamily: fontTypes.normal,
    fontSize: fontSizes.normal,
    color: colors.textDark,
  },
});

export default FormContainer;