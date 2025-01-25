"use client";

import { useState } from "react";

export default function Ej12() {
    let [interactuando, setInteractuando] = useState(false);

    return (
        <div>

            <label>Nombre</label>
            <input type="text" onFocus={() => setInteractuando(true)} onBlur={() => setInteractuando(false)} />

            <label>Edad</label>
            <input type="number" onFocus={() => setInteractuando(true)} onBlur={() => setInteractuando(false)} />

            <label>Estudiante</label>
            <input type="checkbox" onFocus={() => setInteractuando(true)} onBlur={() => setInteractuando(false)} />

            <label>Coche propio</label>
            <input type="checkbox" onFocus={() => setInteractuando(true)} onBlur={() => setInteractuando(false)} />


            {interactuando && <p>Estás interactuando con el formulario!</p>}

        </div>
    )
}