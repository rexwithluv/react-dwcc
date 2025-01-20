"use client";

import ListadoResultado from "./ListadoResultado";
import React, { useState } from "react";

export default function FormularioNumeros() {

    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [resultados, setResultados] = useState([]);

    const sumar = () => {
        const resultado = Number(num1) + Number(num2);
        setResultados(prev => [resultado, ...prev]);
    };

    return <div>
        <label>Número 1</label>
        <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)}></input>

        <label>Número 2</label>
        <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)}></input>

        <button type="button" onClick={sumar}>Sumar</button>

        <ListadoResultado resultados={resultados} />
    </div>
}