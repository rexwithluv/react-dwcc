"use client"

import React from 'react';

export default function Dado({ valor }) {
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

    // const valor = numAleatorio(0, DADOS.length - 1);

    return (
        <pre>
            {DADOS[valor]}
        </pre>
    );
}