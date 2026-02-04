import { COLORS } from "@/constants/colors";
import { TEAMS } from "@/constants/teams";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // Usamos tu gris oscuro de fondo
    backgroundColor: COLORS.dark.background,
    paddingTop: 50,
    paddingHorizontal: 15,
  },
  input: {
    height: 50,
    borderWidth: 2,
    // El borde del buscador usa tu Azul Fuerte (Primary)
    borderColor: COLORS.dark.primary,
    paddingLeft: 20,
    marginBottom: 25,
    borderRadius: 25,
    // Fondo oscuro para el input también
    backgroundColor: COLORS.dark.card,
    // Texto blanco al escribir
    color: COLORS.dark.text,
    fontSize: 16,
  },
  fila: {
    justifyContent: "space-between",
    marginBottom: 15,
  },
  card: {
    backgroundColor: COLORS.dark.card,
    borderRadius: 12,
    borderWidth: 1,

    borderColor: COLORS.dark.secondary,

    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 3,

    width: "24%",
    height: 160,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  textoNombre: {
    color: COLORS.dark.text,
    fontSize: 13,
    fontFamily: "Oswald",
    textAlign: "center",
    marginTop: 8,
    fontWeight: "bold",
  },
  textoDetalle: {
    color: COLORS.dark.secondary,
    fontSize: 10,
    fontFamily: "Roboto",
    textAlign: "center",
    marginTop: 4,
    fontWeight: "600",
  },
  Logo: {
    width: 65,
    height: 65,
    marginBottom: 5,
  },
});

export default function SearchScreen() {
  const [texto, setTexto] = useState("");
  const router = useRouter();
  const lista = TEAMS.filter((equipo) =>
    equipo.nombre.toLowerCase().includes(texto.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(t) => setTexto(t)}
        value={texto}
        placeholder="Buscar equipo"
        placeholderTextColor={COLORS.dark.placeholder}
      />

      <FlatList
        data={lista}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Pressable
            style={styles.card}
            onPress={() => {
              router.push(("/equipo/" + item.id) as any);
            }}
          >
            <Image
              style={styles.Logo}
              source={{ uri: item.logo }}
              resizeMode="contain"
            />
            <View>
              <Text style={styles.textoNombre} numberOfLines={1}>
                {item.nombre}
              </Text>
              <Text style={styles.textoDetalle}>
                {item.division} - {item.categoria}
              </Text>
            </View>
          </Pressable>
        )}
        numColumns={4}
        columnWrapperStyle={styles.fila}
      />
    </View>
  );
}
