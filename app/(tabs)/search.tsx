import { COLORS } from "@/constants/colors";
import { TEAMS } from '@/constants/teams';
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { FlatList, Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.Background,
    paddingTop: 50,
    paddingHorizontal: 15,
  },
  input: {
    height: 45,
    borderWidth: 1,
    paddingLeft: 20,
    marginBottom: 20,
    borderColor: COLORS.Buttons,
    borderRadius: 25,
    backgroundColor: "#FFFFFF",
    color: "black",
  },
  fila: {
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: COLORS.SecondaryBackground,
    marginBottom: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.Background,
    elevation: 3,
    width: "150%",
    padding: 10,
    alignItems: "center",
  },
  textoNombre: {
    color: COLORS.Text,
    fontSize: 16,
    fontFamily: "Oswald",
    textAlign: "center",
    marginTop: 5,
  },
  textoDetalle: {
    color: COLORS.SecondaryText,
    fontSize: 12,
    fontFamily: "Roboto",
    textAlign: "center",
    marginTop: 2,
  },
  Logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  }
});

const FlatListBasics = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(TEAMS);

  const searchFilterFunction = (text) => {
    setSearch(text);
    const newData = TEAMS.filter((item) =>
      item.nombre.toLowerCase().includes(text.toLowerCase()),
    );
    setFilteredData(newData);
  };

  const filterItem = ({ item }) => {
    return (
      <Pressable onPress={() => router.navigate('/detalle')}>
        <View style={styles.card}>
          <Image style={styles.Logo} source={{ uri: item.logo }} />
          <View>
            <Text style={styles.textoNombre}>{item.nombre}</Text>
            <Text style={styles.textoDetalle}>
              {item.division} - {item.categoria}
            </Text>
          </View>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(text) => searchFilterFunction(text)}
        value={search}
        placeholder="Buscar equipo"
      />

      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        columnWrapperStyle={styles.fila}
        renderItem={filterItem}

      />
    </View>
  );
};

export default FlatListBasics;
