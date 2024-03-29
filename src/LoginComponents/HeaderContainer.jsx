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

