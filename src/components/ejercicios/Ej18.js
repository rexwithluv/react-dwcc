"use client";

import { useState } from "react";
import Image from 'next/image';

export default function Ej18() {
    const [image, setImage] = useState(1);

    function cambiarImagen(e) {
        const accion = e.target.name;

        if (accion === "siguiente") {
            setImage((image % 50) + 1);
        } else if (accion === "anterior") {
            setImage(image == 1 ? 50 : image - 1);
        }
    }

    return (
        <div>
            <h2>Banderas</h2><br />

            <Image src={`/images-ej18/${image}.png`} alt="Banderas" width={164} height={164} />

            <br /><hr /><br />


            <button type="button" name='anterior' onClick={cambiarImagen}>
                Anterior
            </button>
            <button type="button" name='siguiente' onClick={cambiarImagen}>
                Siguiente
            </button>

        </div>
    );
}