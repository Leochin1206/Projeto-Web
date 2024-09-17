import "../Perfil/perfil.css"
import { FaUserCircle } from "react-icons/fa";

export function Perfil(){
    return(
        <>
            <div className="PerfilUsuario">
                <FaUserCircle id="IconeUsuario"/>
                <h5>Renato Willian</h5>
                <div className="Bolinha"></div>
                <h6>Calheiro | Pedreiro | Encanador</h6>
            </div>
        </>
    );
}