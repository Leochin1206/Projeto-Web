import "../Card/card.css";
import { IoLocationSharp } from "react-icons/io5";
import ParedePintada from "../../images/image-painter.png"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../Context/UserContext";

export function Card() {

    const navigate = useNavigate();
    const {isLoggedIn} = useUserContext();

    return (

        <div className="Publicacao">
            <div className="ParedeImg">
                <Link to={isLoggedIn ? "/InfoService" : "/Cadastro"}><img src={ParedePintada} alt="" /></Link>
            </div>
            <h2>Pintor de Paredes</h2>
            <div className="TrabalhosPost">
                <h6>Pintor</h6>
            </div>
            <h5>R$ 100,00 - 800,00</h5>
            <div className="LocalizacaoPost">
                <IoLocationSharp />
                <h5>Campinas - SP</h5>
            </div>
        </div>
    )
}

