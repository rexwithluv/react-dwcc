"use client";

import React, { useState } from "react";

export default function Ej3() {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");

    function sumar(e) {
        e.preventDefault();
        alert(`La suma es: ${parseInt(num1) + parseInt(num2)}`);
    }
    return (
        <div>
            <form onSubmit={sumar}>
                <label>Número 1</label>
                <input type="number" value={num1} onChange={e => setNum1(e.target.value)}></input>

                <label>Número 2</label>
                <input type="number" value={num2} onChange={e => setNum2(e.target.value)}></input>

                <button type="submit">Sumar</button>
            </form>
        </div>
    )
}