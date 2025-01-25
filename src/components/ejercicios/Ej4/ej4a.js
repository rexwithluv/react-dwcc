"use client"

import numAleatorio from "../helpers/numRandom";
import React, { useState } from 'react';

export default function Ej4A() {
    const [randomNumber, setRandomNumber] = useState(numAleatorio(0, 9));

    const handleClick = () => {
        setRandomNumber(numAleatorio(0, 9));
    };

    return (
        <div>
            <button type="button" onClick={handleClick}>
                Cambio el número!
            </button>

            <h2>
                {randomNumber}
            </h2>
        </div>
    );
}