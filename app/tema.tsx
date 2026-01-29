import React, { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";

export default function TemaScreen() {
  const [esOscuro, setEsOscuro] = useState(false);

  const cambiarSwitch = () => {
    setEsOscuro((previousState) => !previousState);
  };

  return (
    <View style={[styles.container, esOscuro ? styles.dark : styles.light]}>
      <Text
        style={[styles.text, esOscuro ? styles.textDark : styles.textLight]}
      >
        {esOscuro ? "Modo Oscuro" : "Modo Claro"}
      </Text>

      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={esOscuro ? "#f5dd4b" : "#f4f3f4"}
        onValueChange={cambiarSwitch}
        value={esOscuro}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
    fontFamily: "Oswald",
  },
  light: { backgroundColor: "#ffffff" },
  dark: { backgroundColor: "#1B262C" },
  textLight: { color: "#000" },
  textDark: { color: "#fff" },
});
