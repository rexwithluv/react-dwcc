"use client"

import numAleatorio from "./helpers/numRandom";
import React, { useState } from 'react';

export default function Ej4B() {
    const [randomNumber, setRandomNumber] = useState([
        numAleatorio(0, 9),
        numAleatorio(0, 9),
        numAleatorio(0, 9),
        numAleatorio(0, 9),
        numAleatorio(0, 9),
    ]);

    const handleClick = () => {
        setRandomNumber([
            numAleatorio(0, 9),
            numAleatorio(0, 9),
            numAleatorio(0, 9),
            numAleatorio(0, 9),
            numAleatorio(0, 9),
        ]);
    };

    return (
        <div>
            <button type="button" onClick={handleClick}>
                Cambio el número!
            </button>

            <h2>
                {randomNumber.join(" - ")}
            </h2>
        </div>
    );
}