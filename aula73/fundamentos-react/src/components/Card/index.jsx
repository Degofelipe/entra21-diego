import "./styles.css"

export function Card(props) {
    const cardStyle = {
        backgroundColor: props.cor,
        bordrColor: props.cor
    }
    return (
        <div className="card" style={cardStyle}>
            <h2 className="titulo">{props.titulo}</h2>
            <div className="conteudo"> {props.children}</div>
        </div>
    );
}

Card.defaultProps = {
    cor: "#333"
}