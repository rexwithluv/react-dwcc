const links = ["google", "bing", "yahoo", "duckduckgo", "ecosia"];

export default function Ej2() {
    return (
        <div>
            <h1>Lista de buscadores:</h1>
            <ul>
                {links.map(l => {
                    return (
                        <li key={l}>
                            <a href={`https://${l}.com`}> {l} </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}