import { COLORS } from "@/constants/colors";
import { useRouter } from "expo-router";
import React, { useContext } from "react";
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
} from "react-native";
import { ThemeContext } from "../ThemeContext";

const DATA = [
  { id: "1", nombre: "Perfil y privacidad" },
  { id: "2", nombre: "Tema" },
  { id: "3", nombre: "Versión de la aplicación" },
];

const Item = ({ nombre, onPress, colors }: { nombre: string; onPress: () => void; colors: any }) => (
  <Pressable 
    onPress={onPress} 
    style={[styles.item, { backgroundColor: colors.card }]}
  >
    <Text style={[styles.title, { color: colors.text }]}>{nombre}</Text>
  </Pressable>
);

export default function Settings() {
  const router = useRouter();
  const { theme } = useContext(ThemeContext);
  const activeColors = theme === "oscuro" ? COLORS.oscuro : COLORS.claro;

  const manejarClic = (titulo: string) => {
    if (titulo === "Tema") {
      router.push("/tema");
    }
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: activeColors.background }]}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item 
            nombre={item.nombre} 
            onPress={() => manejarClic(item.nombre)} 
            colors={activeColors}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 1,
    marginHorizontal: 16,
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontFamily: "Roboto",
  },
});