"use client";

import { useState } from "react"

export default function Ej15() {

    const [dias, setDias] = useState([]);

    function diasElegidos(e) {
        const elegido = e.target.value;

        if (dias.includes(elegido)) {
            setDias(dias.filter(dia => dia !== elegido));
            return;
        }

        setDias(dias.concat(elegido));
    }

    return (
        <div>
            <label htmlFor="diasSemana">Elige días de la semana</label> <br />

            <select name="diasSemana" multiple onChange={diasElegidos}>
                <option value="default" disabled selected>Selecciona...</option>
                <option value="lunes">Lunes</option>
                <option value="martes">Martes</option>
                <option value="miercoles">Miércoles</option>
                <option value="jueves">Jueves</option>
                <option value="viernes">Viernes</option>
                <option value="sabado">Sábado</option>
                <option value="domingo">Domingo</option>
            </select>

            <br /><hr /><br />

            {dias.length > 0 && (
                <p>Has elegido los siguientes días: {dias.join(", ")}</p>
            )}

        </div>
    )
}