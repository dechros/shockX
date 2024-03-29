import React, { useRef, useEffect } from "react";
import { Animated } from "react-native";
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
      <Animated.View style={[{ flex: 4 }, { transform: [{ translateY: translateY }] }]}>
        <HeaderContainer />
      </Animated.View>
      <Animated.View style={[{ flex: 3 }, { transform: [{ translateY: translateY }] }]}>
        <FormContainer />
      </Animated.View>
    </>
  );
};

export default Login;
