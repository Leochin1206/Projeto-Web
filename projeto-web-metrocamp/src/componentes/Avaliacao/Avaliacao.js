import React from 'react';
import { FaUserCircle, FaStar } from "react-icons/fa";
import './Avaliacao.css'; // Certifique-se de que o caminho para o CSS está correto

export function Avaliacao() {
    return (
        <div className='ComponenteAva'>
            <div className="header">
                <h1>Avaliações</h1> 
                <span>(25)</span>
            </div>

            <div className="EstrelaIcon">
                <FaStar className="estrela" />
                <FaStar className="estrela" />
                <FaStar className="estrela" />
                <FaStar className="estrela" />
                <FaStar className="estrela" />
            </div>

            <h6>Últimas avaliações</h6>

            <div className="Avaliacao">
                <div className="IconeAva">
                    <FaUserCircle className="iconeUsuario" />
                    <h5>Rafael Feltrin</h5>
                    <div className="Bolinha"></div>
                    <div className="EstrelaIconSmall">
                        <FaStar className="estrelaSmall" />
                        <FaStar className="estrelaSmall" />
                        <FaStar className="estrelaSmall" />
                        <FaStar className="estrelaSmall" />
                        <FaStar className="estrelaSmall" />
                    </div>
                </div>
                <p className="descricao">Ótima experiência! O serviço foi excelente e superou todas as expectativas. Recomendo fortemente!</p>
            </div>

            <div className="Avaliacao">
                <div className="IconeAva">
                    <FaUserCircle className="iconeUsuario" />
                    <h5>Rafael Feltrin</h5>
                    <div className="Bolinha"></div>
                    <div className="EstrelaIconSmall">
                    <FaStar className="estrelaSmall" />
                        <FaStar className="estrelaSmall" />
                        <FaStar className="estrelaSmall" />
                        <FaStar className="estrelaSmall" />
                        <FaStar className="estrelaSmall" />
                    </div>
                </div>
                <p className="descricao">Ótima experiência! O serviço foi excelente e superou todas as expectativas. Recomendo fortemente!</p>
            </div>

            <div className="Avaliacao">
                <div className="IconeAva">
                    <FaUserCircle className="iconeUsuario" />
                    <h5>Rafael Feltrin</h5>
                    <div className="Bolinha"></div>
                    <div className="EstrelaIconSmall">
                    <FaStar className="estrelaSmall" />
                        <FaStar className="estrelaSmall" />
                        <FaStar className="estrelaSmall" />
                        <FaStar className="estrelaSmall" />
                        <FaStar className="estrelaSmall" />
                    </div>
                </div>
                <p className="descricao">Ótima experiência! O serviço foi excelente e superou todas as expectativas. Recomendo fortemente!</p>
            </div>
        </div>
    );
}
