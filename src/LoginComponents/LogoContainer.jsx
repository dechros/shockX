import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import { colors, fontSizes, fontTypes } from "../Theme"

const LogoContainer = () => {
  return (
    <View style={styles.logoContainer}>
      <Image source={require("../../assets/login_logo.png")} style={styles.logoImage} />
      <Text style={styles.logoText}>shockX</Text>
      <Text style={styles.subText}>Instant messenger</Text>
    </View>
  );
};

export default LogoContainer;

const styles = StyleSheet.create({
  logoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: 'red',
  },
  logoImage: {
    height: "50%",
    aspectRatio: 1,
  },
  logoText: {
    fontFamily: fontTypes.normal,
    fontSize: fontSizes.loginHeader,
    color: colors.textLight,
  },
  subText: {
    fontFamily: fontTypes.normal,
    fontSize: fontSizes.normal,
    color: colors.textLight,
  },
});