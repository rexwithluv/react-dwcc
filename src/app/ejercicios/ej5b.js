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

    const eliminarArticulo = (id) => { setVector(vector.filter(p => p.codigo != id)); }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {vector.map((producto) => (
                        <tr key={producto.codigo}>
                            <td>{producto.codigo}</td>
                            <td>{producto.descripcion}</td>
                            <td>{producto.precio}</td>
                            <td><button type='button' onClick={() => eliminarArticulo(producto.codigo)}> Eliminar</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>


        </div>
    );
}