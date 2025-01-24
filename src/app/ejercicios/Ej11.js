"use client";

import { useState } from "react";

export default function Ej11() {
    const [vector, setVector] = useState([
        {
            codigo: 1,
            descripcion: 'patatas',
            precio: 12.52
        }, {
            codigo: 2,
            descripcion: 'naranjas',
            precio: 21
        }, {
            codigo: 3,
            descripcion: 'limones',
            precio: 18.20
        }
    ]);

    const eliminar = (codigo) => { setVector(vector.filter(p => p.codigo !== codigo)); }

    return (
        <div>
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
                    <tr style={{ backgroundColor: "#000000", fontWeight: "bold" }}>
                        <th style={{ padding: "10px", border: "1px solid #ddd" }}>Código</th>
                        <th style={{ padding: "10px", border: "1px solid #ddd" }}>Descripción</th>
                        <th style={{ padding: "10px", border: "1px solid #ddd" }}>Precio</th>
                        <th style={{ padding: "10px", border: "1px solid #ddd" }}>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {vector.map((producto) => (
                        <tr
                            key={producto.codigo}
                            style={{ height: "40px", backgroundColor: "#000000" }}
                        >
                            <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                                {producto.codigo}
                            </td>
                            <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                                {producto.descripcion}
                            </td>
                            <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                                {producto.precio}
                            </td>
                            <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                                <button
                                    type="button"
                                    onClick={() => eliminar(producto.codigo)}
                                    style={{
                                        backgroundColor: "red",
                                        color: "white",
                                        border: "none",
                                        padding: "5px 10px",
                                        cursor: "pointer",
                                        borderRadius: "5px",
                                    }}
                                >
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
}