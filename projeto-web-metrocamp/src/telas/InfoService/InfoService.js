import './InfoService.css'
import ImagemPintura from '../../images/pintor-profissional.png'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaMapMarkerAlt, FaShareAlt } from "react-icons/fa";

export function InfoService() {
    return (
        <div className="InfoService">
            <div className="Infos">
                <h1>Pintura de Paredes</h1>
                <img src={ImagemPintura} alt='' className='ImageInfoPost' />
                <button className='botaoSetaTras'><IoIosArrowBack /></button>
                <button className='botaoSetaFrente'><IoIosArrowForward /></button>

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
                            <h6>Campinas-SP-13000-000</h6>
                        </div>
                    </div>
                    <div>
                        <FaShareAlt className='IconeLoc' />
                        <h4>Compartilhar</h4>
                    </div>
                </div>

            </div>

            <div className="Componentes">
                {/* Inserir componente preço aqui */}

                {/* Inserir componente avaliação aqui */}
            </div>

        </div>
    );
}