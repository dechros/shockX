import React from "react";
import { SafeAreaView, StatusBar, useColorScheme } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { colors } from "./Theme";
import Login from "./Login";

const App = () => {
  const colorScheme = (useColorScheme() === "dark") ? "dark-content" : "light-content";

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient colors={[colors.primaryDark, colors.primaryLight]} style={{ flex: 1 }}>
        <StatusBar barStyle={colorScheme} backgroundColor="transparent" translucent />
        <Login pageStyle={colorScheme} />
      </LinearGradient>
    </SafeAreaView>
  );
};

export default App;
