"use client";

import { useState } from "react";

export default function Ej13() {
    const [inputValue, setInputValue] = useState("");

    function soloBinario(e) {
        const valor = e.target.value;
        const regex = /^[01]*$/;

        if (regex.test(valor)) {
            setInputValue(valor);
        }
    }

    return (
        <form>
            <label>Solo se permite introducir código binario (0-1)</label><br />
            <input type="text" value={inputValue} onInput={soloBinario}></input>
        </form>
    )
}