import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
import ThemeProvider from "../../ThemeContext";
import SearchScreen from "../search";

describe("Ejercicio 2, test componente SearchScreen", () => {
  test("Se renderiza la pantalla y el usuario puede escribir en el buscador", () => {
    const { getByPlaceholderText, getByText } = render(
      <ThemeProvider>
        <SearchScreen />
      </ThemeProvider>,
    );

    const input = getByPlaceholderText("Buscar equipo");

    fireEvent.changeText(input, "Zaragoza");
    expect(getByText("Real Zaragoza")).toBeTruthy();
  });
});
