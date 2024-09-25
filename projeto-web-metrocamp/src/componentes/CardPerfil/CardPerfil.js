import "../CardPerfil/CardPerfil.css"
import { Perfil } from "../Perfil/Perfil"
import pintandoParede1 from '../../images/pintarParede1.jpg'
import pintandoParede2 from '../../images/comopintarparedes2.jpeg'
import pintandoParede3 from '../../images/como-pintar-parede3.jpg'
import { CiEdit } from "react-icons/ci";
import { FaShare } from "react-icons/fa";

export function CardPerfil(){
    return(
        <>
            <div className="PubliPerfil">
                <Perfil className="Perfil-card"/>
                <h4>Pinto sua parede da cor que você quiser aqui na região de Pato Branco - PR, a cor e as tintas são disponibilizadas pelo cliente, levo apenas o ajudante e os materiais... <span class="verMais">Ver Mais</span></h4>
                <div className="ImagensPost">
                    <img src={pintandoParede1} alt="Pessoa Pintando 1" className="imagem-principal" />
                    <div className="ImagensMenores">
                        <img src={pintandoParede2} alt="Pessoa Pintando 2" className="imagem-menor" />
                        <img src={pintandoParede3} alt="Pessoa Pintando 3" className="imagem-menor" />
                    </div>
                </div>
                <div className="BotoesAcao">
                    <CiEdit className="icone-editar" />
                    <button className="CriarPost">
                        <h1>Solicitar Serviço</h1>
                    </button>
                    <FaShare className="icone-compartilhar" />
                </div>
            </div>
        </>
    );
}