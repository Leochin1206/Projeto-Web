import { Fragment } from "react";
import "../CardPrancheta/cardprancheta.css";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import icone from "./icone.png";

export function CardPrancheta() {
    return (
        <div>
            <div className="Funcao">
                <img src={icone} alt=""/>

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
                    <h6>Reboco de Parede</h6>
                </div>
                <div className="Check"><IoMdCheckmarkCircleOutline /></div>
            </div>
        </div>                                                          
    )
}