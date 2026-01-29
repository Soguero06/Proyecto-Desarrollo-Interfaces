import { COLORS } from "@/constants/colors";
import { TEAMS } from "@/constants/teams";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.light.background,
    paddingTop: 50,
    paddingHorizontal: 15,
  },
  input: {
    height: 45,
    borderWidth: 1,
    paddingLeft: 20,
    marginBottom: 20,
    borderColor: COLORS.light.button,
    borderRadius: 25,
    backgroundColor: "#FFFFFF",
    color: "black",
  },
  fila: {
    justifyContent: "center",
    gap: 15,
    marginBottom: 15,
  },
  card: {
    backgroundColor: COLORS.light.background,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.light.icon,
    elevation: 3,

    width: 110,
    height: 160,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  textoNombre: {
    color: COLORS.light.text,
    fontSize: 14,
    fontFamily: "Oswald",
    textAlign: "center",
    marginTop: 5,
  },
  textoDetalle: {
    color: COLORS.light.text,
    fontSize: 10,
    fontFamily: "Roboto",
    textAlign: "center",
    marginTop: 2,
  },
  Logo: {
    width: 60,
    height: 60,
    marginBottom: 5,
  },
});

export default function SearchScreen() {
  const [texto, setTexto] = useState("");
  const [lista, setLista] = useState(TEAMS);

  const filtrar = (escrito) => {
    setTexto(escrito);
    if (escrito === "") {
      setLista(TEAMS);
    } else {
      const filtrados = TEAMS.filter((equipo) =>
        equipo.nombre.toLowerCase().includes(escrito.toLowerCase()),
      );
      setLista(filtrados);
    }
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.card}>
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
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={filtrar}
        value={texto}
        placeholder="Buscar equipo..."
        placeholderTextColor="#999"
      />

      <FlatList
        data={lista}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        numColumns={3}
        columnWrapperStyle={styles.fila}
      />
    </View>
  );
}
