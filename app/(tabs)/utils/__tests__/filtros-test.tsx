import { filtrarEquipos } from "../filtros";

describe("Ejercicio 1: Test de caja negra y caja blanca de filtrarEquipos", () => {
  const Equipos = [
    { id: 1, nombre: "Zaragoza Futsal" },
    { id: 2, nombre: "Inter Movistar" },
    { id: 3, nombre: "Barça Futsal" },
  ];

  test("Test de caja negra, filtra correctamente si coincide el texto", () => {
    const resultado = filtrarEquipos(Equipos, "Zaragoza");
    expect(resultado).toStrictEqual([{ id: 1, nombre: "Zaragoza Futsal" }]);
  });

  test("Test de caja negra, ignora mayúsculas y minúsculas", () => {
    const resultado = filtrarEquipos(Equipos, "movistar");
    expect(resultado).toStrictEqual([{ id: 2, nombre: "Inter Movistar" }]);
  });

  test("Test de caja blanca, si el texto está vacío, devuelve toda la lista original", () => {
    const resultado = filtrarEquipos(Equipos, "");
    expect(resultado).toStrictEqual(Equipos);
  });
});
