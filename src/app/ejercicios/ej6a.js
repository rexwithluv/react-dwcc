"use client"

import React from 'react';
import numAleatorio from './helpers/numRandom';

export default function Dado() {
    const DADOS = [
        `
         _____
        |     |
        |  o  |
        |_____|
        `,
        `
         _____
        |o    |
        |     |
        |____o|
        `,
        `
         _____
        |o    |
        |  o  |
        |____o|
        `,
        `
         _____
        |o   o|
        |     |
        |o___o|
        `,
        `
         _____
        |o   o|
        |  o  |
        |o___o|
        `,
        `
         _____
        |o   o|
        |o   o|
        |o___o|
        `
    ];

    const valor = numAleatorio(0, DADOS.length - 1);

    return (
        <pre>
            {DADOS[valor]}
        </pre>
    );
}