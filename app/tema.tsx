import { COLORS } from "@/constants/colors";
import React, { useContext } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import { ThemeContext } from "./ThemeContext";

export default function Tema() {
  const { theme, setTheme } = useContext(ThemeContext);

  const esOscuro = theme === "oscuro";

  function cambiarTema() {
    setTheme(esOscuro ? "claro" : "oscuro");
  }

  return (
    <View
      style={[styles.container, { backgroundColor: COLORS[theme].background }]}
    >
      <Text style={[styles.texto, { color: COLORS[theme].text }]}>
        Modo actual: {theme}
      </Text>

      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={esOscuro ? "#f5dd4b" : "#f4f3f4"}
        onValueChange={cambiarTema}
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
  texto: {
    fontSize: 24,
    marginBottom: 20,
    fontFamily: "Oswald",
  },
});
