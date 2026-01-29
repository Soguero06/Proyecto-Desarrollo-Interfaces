import { COLORS } from "@/constants/colors";
import { useRouter } from "expo-router";
import React from "react";
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
} from "react-native";

const DATA = [
  {
    id: "1",
    nombre: "Perfil y privacidad",
  },
  {
    id: "2",
    nombre: "Tema",
  },
  {
    id: "3",
    nombre: "Versión de la aplicación",
  },
];

const Item = ({ nombre, onPress }: { nombre: string; onPress: () => void }) => (
  <Pressable onPress={onPress} style={styles.item}>
    <Text style={styles.title}>{nombre}</Text>
  </Pressable>
);

export default function SettingsScreen() {
  const router = useRouter();
  const manejarClic = (titulo: string) => {
    router.push("/tema");
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item nombre={item.nombre} onPress={() => manejarClic(item.nombre)} />
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
    backgroundColor: COLORS.light.background,
  },
  item: {
    backgroundColor: COLORS.light.background,
    padding: 20,
    marginVertical: 1,
    marginHorizontal: 16,
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    color: COLORS.light.text,
    fontFamily: "Roboto",
  },
});
