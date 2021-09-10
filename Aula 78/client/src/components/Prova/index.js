import "./styles.css";

export function Prova({ nome, nota }) {
    return (
        <div className="prova">
            <p className="nome-prova">{nome}</p>
            <p className="nota">{nota}</p>
        </div>
    );
}