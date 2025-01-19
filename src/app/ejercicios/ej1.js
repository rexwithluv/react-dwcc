import numRandom from "./helpers/numRandom"
class Persona {
    constructor(nombre, edad, telefono) {
        this.nombre = nombre;
        this.edad = edad;
        this.telefono = telefono;
    }

    toString() {
        return `Nombre: ${this.nombre} · Edad: ${this.edad} · Tlf: ${this.telefono}`;
    }
}

function numAleatorio() {
    return numRandom(0, 10);
}

function anyoActual() {
    return new Date().getFullYear();
}

function sigloActual() {
    return parseInt(anyoActual().toString().slice(0, 2)) + 1;
}

function calculoMatematico() {
    return numAleatorio() + numAleatorio();
}

export default function Ej1() {
    let persona = new Persona("María", 36, "650458963");
    return (
        <div>
            <p>Persona: {persona.toString()}</p>
            <p>Número aleatorio: {numAleatorio()}</p>
            <p>Año y siglo actual: {anyoActual()} | {sigloActual()}</p>
            <p>Calculo que cambia: {calculoMatematico()}</p>
        </div>
    );
}

