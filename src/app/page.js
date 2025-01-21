"use client";


import { useState } from "react";
import Ej9 from "./ejercicios/Ej9";

export default function Home() {
  const [activo, setActivo] = useState(true);

  return (
    <div>
      <button type="button" onClick={() => setActivo(!activo)}>
        {activo ? "Desactivar" : "Activar"} componente
      </button>

      {activo && <Ej9 />}
    </div>
  );
}
