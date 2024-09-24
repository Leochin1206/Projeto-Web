import "../Perfil/perfil.css"
import ImagemPerfil from '../../images/icone.png'


export function Perfil() {
    return (
        <>
            <div className="PerfilUsuario">
                <img src={ImagemPerfil} alt="" className="imagem-perfil" />
                <h5>Renato Willian</h5>
                <div className="Bolinha"></div>
                <h6>Calheiro | Pedreiro | Encanador</h6>
            </div>
        </>
    );
}