"use client"

import numAleatorio from "./helpers/numRandom"
import Dado from "./ej6a";
import { useState } from "react";

export default function Ej6B() {

    function lanzarDados() {
        setDados([
            numAleatorio(0, 5),
            numAleatorio(0, 5),
            numAleatorio(0, 5),
        ])
    };

    const [dados, setDados] = useState([
        numAleatorio(0, 5),
        numAleatorio(0, 5),
        numAleatorio(0, 5),
    ]);



    return <div>
        <Dado valor={dados[0]} />
        <Dado valor={dados[1]} />
        <Dado valor={dados[2]} />

        <button type="button" onClick={lanzarDados}>Lanzar dados</button>
    </div>
}