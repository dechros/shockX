import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import { colors, fontSizes, fontTypes } from "../Theme"

const HeaderContainer = () => {
  return (
    <View style={styles.HeaderContainer}>
      <Image source={require("../../assets/login_logo.png")} style={styles.logoImage} />
      <Text style={styles.logoText}>shockX</Text>
      <Text style={styles.subText}>Block Chain Messenger</Text>
    </View>
  );
};

export default HeaderContainer;

const styles = StyleSheet.create({
  HeaderContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: 20,
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