import "../BotaoMaior/botaomaior.css";

export function BotaoMaior({ titulo, cor, font }) {

    const estiloBotao = {
        backgroundColor: cor || '#1565C0'
    };

    const estiloFonte = {
        color: font || 'white'
    };


    return (
        <button className="Prestado" style={estiloBotao}>
            <h1 style={estiloFonte}>{titulo}</h1>
        </button>
    )
}