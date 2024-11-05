import "../Card/card.css";
import { IoLocationSharp } from "react-icons/io5";
import ParedePintada from "../../images/image-painter.png"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../Context/UserContext";

export function Card({ titulo, descricao, preco, cidadeServico, imagem }) {

    const navigate = useNavigate();
    const {isLoggedIn} = useUserContext();

    return (

        <div className="Publicacao">
            <div className="ParedeImg">
                <Link to={isLoggedIn ? "/InfoService" : "/Cadastro"}><img src={imagem} alt="" /></Link>
            </div>
            <h2>{titulo}</h2>
            <div className="TrabalhosPost">
                <h6>{descricao}</h6>
            </div>
            <h5>{preco}</h5>
            <div className="LocalizacaoPost">
                <IoLocationSharp />
                <h5>{cidadeServico}</h5>
            </div>
        </div>
    )
}

