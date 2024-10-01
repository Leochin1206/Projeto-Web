import './Preco.css'
import ImagemPerfil from '../../images/icone.png'

export function Preco() {
    return (
        <div className='Preco'>

            <div className="PerfilUsuario">
                <img src={ImagemPerfil} alt="" className="imagem-perfil" />

                <h5>Renato Willian</h5>

                <div className="Bolinha"></div>

                <h6>Calheiro | Pedreiro | Encanador</h6>
            </div>

            <h1>R$800,00</h1>

            <button className="SolicitarServico">
                <h2>Solicitar Serviço</h2>
            </button>
        </div>
    );
}