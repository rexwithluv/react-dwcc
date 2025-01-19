import numAleatorio from "./helpers/numRandom";

export default function Ej4A() {
    return (
        <div>
            <button type="button" onClick={numAleatorio(0,9)}>
                Cambio el número!
            </button>

            <h2>
                {numAleatorio(0, 9)}
            </h2>
        </div>
    );
}