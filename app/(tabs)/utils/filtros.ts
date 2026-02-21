export function filtrarEquipos(equipos: any[], texto: string) {
  return equipos.filter((equipo) =>
    equipo.nombre.toLowerCase().includes(texto.toLowerCase()),
  );
}
