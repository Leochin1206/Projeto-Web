import "../BotaoMaior/botaomaior.css";
import { useNavigate } from "react-router-dom";

export function BotaoMaior({ titulo, cor, font, rota }) {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(rota);
    };

    const estiloBotao = {
        backgroundColor: cor || '#1565C0'
    };

    const estiloFonte = {
        color: font || 'white'
    };


    return (
        <button className="Prestado" style={estiloBotao} onClick={handleClick}>
            <h1 style={estiloFonte}>{titulo}</h1>
        </button>
    )
}