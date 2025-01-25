"use client";

import { useState } from "react";

export default function Ej14() {
    const [lenTextarea, setLenTextarea] = useState(0);
    const [secondTextarea, setSecondTextarea] = useState("");

    function getLenTextarea(e) {
        const text = e.target.value;

        setLenTextarea(text.length);
        setSecondTextarea(text);
    }

    return (
        <div>
            <textarea placeholder="Escrbie algo!" onInput={getLenTextarea}></textarea>
            <p>Has escrito: <span>{lenTextarea}</span></p>

            <br /><hr /><br />

            <p>Aquí se copia lo que escribas!</p>
            <textarea placeholder="Copio lo que escribas!" value={secondTextarea} disabled></textarea>
        </div>
    )
}