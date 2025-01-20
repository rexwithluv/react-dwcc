"use client";

import { useState } from "react";

export default function Ej8() {

    let [valor, setValor] = useState("");

    return (
        <div>
            <h2>{valor}</h2>
            <hr />

            <input type="text" onChange={e => setValor(e.target.value)} />
        </div>
    )

}