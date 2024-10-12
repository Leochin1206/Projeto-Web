import '../ClipBoardRequerido/ClipBoardRequerido.css'
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { CiClock1 } from "react-icons/ci";


export function ClipBoardRequerido() {
    return (
        <>
            <div className="CardRequirido">
                <FaUserCircle id="IconeUsuario" />

                <h6>Renato Willian</h6>

                <h3> (19)99999-9999 </h3>
                <div className='Estrela'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                    <FaRegStar />
                </div>

                <div className="Centralizarbtn">
                    <div className='Aceitar'>
                        <button className="BotaoAceitar">Aceitar</button>
                    </div>
                    <div className='Recusar'>
                        <button className="BotaoRecusar">Recusar</button>
                    </div>
                </div>

                <div className="Check"><CiClock1 /></div>
            </div>
        </>
    );
}