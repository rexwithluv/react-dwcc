"use client"

import React, { useState } from 'react';

export default function Ej5a() {
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

    const eliminarUltimo = () => { setVector(vector.slice(0, -1)); }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {vector.map((producto) => (
                        <tr key={producto.codigo}>
                            <td>{producto.codigo}</td>
                            <td>{producto.descripcion}</td>
                            <td>{producto.precio}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <button type="button" onClick={eliminarUltimo}>
                Eliminar el último producto
            </button>
        </div>
    );
}