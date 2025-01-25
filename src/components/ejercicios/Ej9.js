"use client";

import { useEffect, useState } from "react";

export default function Ej9() {

    let [x, setX] = useState(0);
    let [y, setY] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setX(e.x);
            setY(e.y);
        };

        // Agregamos un eventListener
        document.addEventListener("mousemove", handleMouseMove);

        // Eliminamos el eventListener cuando no se ve el componente
        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div>
            Coordenada X: {x} <br />
            Coordenada Y: {y}
        </div>
    )

}

/* Código que necesitamos en la página de inicio para crear
un botón que desactive el componente

<button type="button" onClick={() => setActivo(!activo)}>
    {activo ? "Desactivar" : "Activar"} componente
</button>

{activo && <Ej9 />}
*/