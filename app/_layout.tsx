import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import ThemeProvider from "./ThemeContext";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Roboto: require("../assets/fonts/Roboto.ttf"),
    Oswald: require("../assets/fonts/Oswald.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
