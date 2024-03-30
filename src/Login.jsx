import React, { useRef, useEffect } from "react";
import { Animated, KeyboardAvoidingView, Platform } from "react-native";
import HeaderContainer from "./LoginComponents/HeaderContainer";
import FormContainer from "./LoginComponents/FormContainer";

const Login = ({ pageStyle }) => {
  const translateY = useRef(new Animated.Value(500)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true
      })
    ]).start();
  }, [translateY]);

  return (
    <>
      <Animated.View style={[{ flex: 2 }, { transform: [{ translateY: translateY }] }]}>
        <HeaderContainer />
      </Animated.View>
      <Animated.View style={[{ flex: 1.50 }, { transform: [{ translateY: translateY }] }]}>
        <FormContainer />
      </Animated.View>
    </>
  );
};

export default Login;
