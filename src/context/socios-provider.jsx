import { useState } from "react";
import { SociosContext } from "./socios-context";
import sociosData from "../data/socios.json";

export function SociosProvider({ children }) {
  const [socios, setSocios] = useState(sociosData);

  const cambiarEstado = (id, nuevoEstado) => {
    setSocios((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, estado: nuevoEstado } : s
      )
    );
  };

  return (
    <SociosContext.Provider value={{ socios, cambiarEstado }}>
      {children}
    </SociosContext.Provider>
  );
}
