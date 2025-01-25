"use client";

import React, { useState } from 'react';
import Image from 'next/image';

export default function Ej16() {

    const [estudios, setEstudios] = useState([]);

    function actualizarEstudios(e) {
        if (e.target.checked) {
            setEstudios([...estudios, e.target.value]);
        } else {
            setEstudios(estudios.filter(estudio => estudio !== e.target.value));
        }
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th colSpan="3">
                            <h1>Estudios</h1>
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>
                            <input type='checkbox' id='primaria' name='primaria' value='primaria' onChange={actualizarEstudios} />
                            <Image src="/primaria.png" alt="Imagen" width={164} height={164} onClick={() => document.getElementById('primaria').click()} />
                        </td>

                        <td>
                            <input type='checkbox' id='secundaria' name='secundaria' value='secundaria' onChange={actualizarEstudios} />
                            <Image src="/secundaria.png" alt="Imagen" width={164} height={164} onClick={() => document.getElementById('secundaria').click()} />
                        </td>

                        <td>
                            <input type='checkbox' id='universidad' name='universidad' value='universidad' onChange={actualizarEstudios} />
                            <Image src="/universidad.jpg" alt="Imagen" width={164} height={164} onClick={() => document.getElementById('universidad').click()} />
                        </td>
                    </tr>
                </tbody>
            </table>

            <br /><hr /><br />

            <h2>Estudios seleccionados:</h2>
            <ul>
                {estudios.map(estudio => (
                    <li key={estudio}>{estudio}</li>
                ))}
            </ul>
        </div>
    );
};

