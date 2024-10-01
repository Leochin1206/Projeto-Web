import './InfoService.css'
import ImagemPintura1 from '../../images/pintor-profissional.png';
import ImagemPintura2 from '../../images/pintor2.png';
import ImagemPintura3 from '../../images/pintor3.png';
import { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaMapMarkerAlt, FaShareAlt } from "react-icons/fa";
import { Preco } from '../../componentes/Preco/Preco.js'

export function InfoService() {

    const imagens = [ImagemPintura1, ImagemPintura2, ImagemPintura3];
    const [indiceAtual, setIndiceAtual] = useState(0);

    const handlePrevImage = () => {
        setIndiceAtual(indiceAtual === 0 ? imagens.length - 1 : indiceAtual - 1);
    };

    const handleNextImage = () => {
        setIndiceAtual(indiceAtual === imagens.length - 1 ? 0 : indiceAtual + 1);
    };

    return (
        <div className="InfoService">
            <div className="Infos">
                <h1>Pintura de Paredes</h1>

                <div className="slider">
                    <img src={imagens[indiceAtual]} alt='' className="ImageInfoPost" />
                </div>

                <div className='arrow-button'>
                    <button className='botaoSetaTras' onClick={handlePrevImage}><IoIosArrowBack /></button>
                    <button className='botaoSetaFrente' onClick={handleNextImage}><IoIosArrowForward /></button>
                </div>

                <h2>
                    Pinto sua parede da cor que você quiser aqui na região de
                    Campinas-SP, as tintas são disponibilizadas pelo
                    cliente, levo apenas os materiais e o ajudante dependendo do serviço.
                </h2>

                <h3>Localização</h3>

                <div className='localizacao'>
                    <div>
                        <FaMapMarkerAlt className='IconeLoc' />
                        <div className='loc-infos'>
                            <h5>Campinas</h5>
                            <h6>Campinas-SP</h6>
                        </div>
                    </div>
                    <div>
                        <FaShareAlt className='IconeLoc' />
                        <h4>Compartilhar</h4>
                    </div>
                </div>

            </div>

            <div className="Componentes">
                <Preco />

                {/* Inserir componente avaliação aqui */}
            </div>

        </div>
    );
}