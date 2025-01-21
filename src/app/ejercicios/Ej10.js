"use client"

import { useEffect, useState } from "react";

export default function Ej10() {

    const [productos, setProductos] = useState([]);

    const getProductos = async () => {
        try {
            const response = await fetch("http://localhost:5000/productos");
            if (!response.ok) {
                throw new Error("No se ha podido hacer fetch al server");
            }

            const data = await response.json();
            setProductos(data);
        } catch (error) {
            console.error("Error: ", error);
        }
    }

    // useEffect para hacer el fetch cuando el componente se monta
    useEffect(() => {
        getProductos();
    }, []);

    console.log(productos);

    return (
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>URL</th>
                    <th>Tipo</th>
                </tr>
            </thead>
            <tbody>
                {productos.map(p => (
                    <tr key={p.name}>
                        {p.}
                        <td></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

// Para correr el json-server
// `npx json-server -p 5000 Ej10.json`