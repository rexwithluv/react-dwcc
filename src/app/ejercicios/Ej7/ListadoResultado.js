"use client";


export default function ListadoResultado({ resultados }) {
    if (!resultados) return null;
    
    return <ul>
        {resultados.map((r, i) => (
            <li key={i}>{r}</li>
        ))}
    </ul>
}