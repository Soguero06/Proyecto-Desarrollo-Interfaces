import { COLORS } from "@/constants/colors";
import { TEAMS } from "@/constants/teams";
import { useLocalSearchParams } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.dark.background,
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
    color: COLORS.dark.text,
    fontSize: 32,
    fontFamily: "Oswald",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
  },
  infoContainer: {
    backgroundColor: COLORS.dark.card,
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
    color: COLORS.dark.text,
    fontFamily: "Roboto",
    fontWeight: "500",
    marginBottom: 15,
  },
});

export default function equipo() {
  const { id } = useLocalSearchParams();
  console.log("--- DEBUG ---");
  console.log("ID que llega del buzón:", id);
  console.log("Tipo del ID:", typeof id);
  console.log("ID convertido a número:", Number(id));
  console.log("----------------");
  const idNumero = Number(id);
  const equipoEncontrado = TEAMS.find((team) => team.id == idNumero);
  if (!equipoEncontrado) {
    return <Text>No se ha encontrado el equipo</Text>;
  }
  return (
    <View style={styles.container}>
      <Image
        style={styles.imagen}
        source={{ uri: equipoEncontrado.logo }}
        resizeMode="contain"
      />
      <Text style={styles.titulo}>{equipoEncontrado.nombre}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.etiqueta}>Categoría</Text>
        <Text style={styles.dato}>{equipoEncontrado.categoria}</Text>
        <Text style={styles.etiqueta}>División</Text>
        <Text style={[styles.dato, { marginBottom: 0 }]}>
          {equipoEncontrado.division}
        </Text>
      </View>
    </View>
  );
}
