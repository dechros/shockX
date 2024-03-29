import React from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { colors, fontSizes, fontTypes, elementHeights } from "../Theme"

const FormContainer = () => {
  return (
    <View style={styles.formContainer}>
      <TextInput style={styles.input} placeholder="Username" placeholderTextColor={colors.textLight} />
      <TextInput style={[styles.input, { marginTop: 10 }]} placeholder="Password" placeholderTextColor={colors.textLight} secureTextEntry={true} />
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.forgotPasswordLink}>
        <Text style={styles.forgotPasswordText}>Forgot password?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: 'red',
  },
  input: {
    height: elementHeights.textbox,
    backgroundColor: "transparent",
    paddingHorizontal: 15,
    color: colors.textLight,
    borderWidth: 1,
    borderColor: 'green',
    fontFamily: fontTypes.normal,
  },
  loginButton: {
    height: elementHeights.button,
    backgroundColor: colors.backgroundDark,
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.textLight,
    fontSize: fontSizes.normal,
  },
  forgotPasswordLink: {
    marginTop: 10,
    alignItems: 'center',
  },
  forgotPasswordText: {
    color: colors.textLight,
    fontSize: fontSizes.normal,
  },
  footerContainer: {
    flex: 1,
    alignItems: "center",
    borderWidth: 1,
    borderColor: 'yellow',
  },
});

export default FormContainer;