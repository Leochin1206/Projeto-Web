import '../ClipBoardAndamento/ClipBoardAndamento.css'
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaHammer } from "react-icons/fa6";


export function ClipBoardAndamento() {
    return(
        <>
            <div className="Funcao">
                <FaUserCircle id="IconeUsuario"/>

                <h6>Renato Willian</h6>

                <h3> (19)99999-9999 </h3>
                <div className='Estrela'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                    <FaRegStar />
                </div>

                <div className='Reboco'>
                    <button>Finalizar Serviço</button>
                </div>
                <div className="Check"><FaHammer /></div>
            </div>
        </>        
);
}