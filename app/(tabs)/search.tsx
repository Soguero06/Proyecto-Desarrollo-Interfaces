import { COLORS } from "@/constants/colors";
import { TEAMS } from "@/constants/teams";
import { useRouter } from "expo-router";
import React, { useContext, useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { ThemeContext } from "../ThemeContext";
import { filtrarEquipos } from "./utils/filtros";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 15,
  },
  input: {
    height: 50,
    borderWidth: 2,
    paddingLeft: 20,
    marginBottom: 25,
    borderRadius: 25,
    fontSize: 16,
  },
  fila: {
    justifyContent: "space-between",
    marginBottom: 15,
  },
  card: {
    borderRadius: 12,
    borderWidth: 1,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 3,

    width: "31%",
    height: 160,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  textoNombre: {
    fontSize: 13,
    fontFamily: "Oswald",
    textAlign: "center",
    marginTop: 8,
    fontWeight: "bold",
  },
  textoDetalle: {
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

  const { theme } = useContext(ThemeContext);
  const activeColors = theme === "oscuro" ? COLORS.oscuro : COLORS.claro;

  const generarItemsFicticios = (cantidad: number) => {
    const base = [...TEAMS];
    return Array.from({ length: cantidad }, (_, i) => ({
      ...base[i % base.length],
      id: i,
      nombre: `${base[i % base.length].nombre} ${i + 1}`,
    }));
  };

  const cantidadPrueba = 1000;
  const datosVolumen = generarItemsFicticios(cantidadPrueba);

  console.time(`Carga de ${cantidadPrueba} ítems`);
  const lista = filtrarEquipos(datosVolumen, texto);
  console.timeEnd(`Carga de ${cantidadPrueba} ítems`);

  return (
    <View
      style={[styles.container, { backgroundColor: activeColors.background }]}
    >
      <TextInput
        style={[
          styles.input,
          {
            borderColor: activeColors.primary,
            backgroundColor: activeColors.card,
            color: activeColors.text,
          },
        ]}
        onChangeText={setTexto}
        value={texto}
        placeholder="Buscar equipo"
        placeholderTextColor={activeColors.placeholder || "#999"}
      />

      <FlatList
        data={lista}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Pressable
            style={[
              styles.card,
              {
                backgroundColor: activeColors.card,
                borderColor: activeColors.secondary,
              },
            ]}
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
              <Text
                style={[styles.textoNombre, { color: activeColors.text }]}
                numberOfLines={1}
              >
                {item.nombre}
              </Text>
              <Text
                style={[styles.textoDetalle, { color: activeColors.secondary }]}
              >
                {item.division} - {item.categoria}
              </Text>
            </View>
          </Pressable>
        )}
        numColumns={3}
        columnWrapperStyle={styles.fila}
      />
    </View>
  );
}
