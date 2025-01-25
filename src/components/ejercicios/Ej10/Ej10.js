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
        <table
            style={{
                width: "80%",
                margin: "20px auto",
                borderCollapse: "collapse",
                textAlign: "center",
                border: "2px solid #ddd",
            }}
        >
            <thead>
                <tr style={{ backgroundColor: "#f4f4f4", height: "40px", color:"#000000" }}>
                    <th style={{ padding: "10px", border: "1px solid #ddd" }}>Nombre</th>
                    <th style={{ padding: "10px", border: "1px solid #ddd" }}>Precio</th>
                    <th style={{ padding: "10px", border: "1px solid #ddd" }}>Foto</th>
                    <th style={{ padding: "10px", border: "1px solid #ddd" }}>Tipo</th>
                </tr>
            </thead>
            <tbody>
                {productos.map((p) => (
                    <tr key={p.name} style={{ height: "35px" }}>
                        <td style={{ padding: "10px", border: "1px solid #ddd" }}>{p.name}</td>
                        <td style={{ padding: "10px", border: "1px solid #ddd" }}>{p.price}</td>
                        <td style={{ padding: "10px", border: "1px solid #ddd" }}>{p.image}</td>
                        <td style={{ padding: "10px", border: "1px solid #ddd" }}>{p.type}</td>
                    </tr>
                ))}
            </tbody>
        </table>

    )
}

// Para correr el json-server
// `npx json-server -p 5000 Ej10.json`