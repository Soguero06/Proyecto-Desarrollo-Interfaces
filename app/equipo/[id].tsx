import { COLORS } from "@/constants/colors";
import { TEAMS } from "@/constants/teams";
import { useLocalSearchParams } from "expo-router";
import React, { useContext } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ThemeContext } from "../ThemeContext";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  imagen: {
    width: 220,
    height: 220,
    marginBottom: 30,
  },
  titulo: {
    fontSize: 32,
    fontFamily: "Oswald",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
  },
  infoContainer: {
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 15,
    width: "100%",
    alignItems: "center",
  },
  etiqueta: {
    fontSize: 14,
    color: "#888",
    textTransform: "uppercase",
    marginBottom: 2,
  },
  dato: {
    fontSize: 20,
    fontFamily: "Roboto",
    fontWeight: "500",
    marginBottom: 15,
  },
});

export default function EquipoScreen() {
  const { id } = useLocalSearchParams();
  const { theme } = useContext(ThemeContext);
  const activeColors = theme === "oscuro" ? COLORS.oscuro : COLORS.claro;

  const idNumero = Number(id);
  const equipoEncontrado = TEAMS.find((team) => team.id == idNumero);

  if (!equipoEncontrado) {
    return (
      <Text style={{ color: activeColors.text }}>
        No se ha encontrado el equipo
      </Text>
    );
  }

  return (
    <View
      style={[styles.container, { backgroundColor: activeColors.background }]}
    >
      <Image
        style={styles.imagen}
        source={{ uri: equipoEncontrado.logo }}
        resizeMode="contain"
      />
      <Text style={[styles.titulo, { color: activeColors.text }]}>
        {equipoEncontrado.nombre}
      </Text>
      <View
        style={[styles.infoContainer, { backgroundColor: activeColors.card }]}
      >
        <Text style={styles.etiqueta}>Categoría</Text>
        <Text style={[styles.dato, { color: activeColors.text }]}>
          {equipoEncontrado.categoria}
        </Text>
        <Text style={styles.etiqueta}>División</Text>
        <Text style={[styles.dato, { color: activeColors.text }]}>
          {equipoEncontrado.division}
        </Text>
      </View>
    </View>
  );
}
