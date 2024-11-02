import "./cadastro.css";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../../componentes/Context/UserContext";

export function Cadastro() {

    const {saveData} = useUserContext();
    const navigate = useNavigate();

    const handleSubmit = (event)=>{
        event.preventDefault();

        const formElement = document.getElementById("CadastroForm");
        const formData = new FormData(formElement);

        const data = {
            nome:formData.get("nome"),
            email:formData.get("email"),
            senha:formData.get("senha"),
        }

        saveData(data);
        navigate("/ComplementoPerfil");
}


    return (
        <div className="Cadastro">

            <div className="style_cadastro_logo">
                <h5>Cadastro</h5>
            </div>
            
            <form className="forms" onSubmit={handleSubmit} method="get" id ="CadastroForm">
                <div className="acertaForms">

                    <span className="campos">
                        <label for="nome">*Nome:</label>
                        <input type="text" name="nome" id="nome" placeholder="Digite seu nome" required></input>
                    </span>

                    <span className="campos">
                        <label for="email">*Email:</label>
                        <input type="text" name="email" id="email" placeholder="Digite seu Email" required></input>
                    </span>

                    <span className="campos">
                        <label for="password">*Senha:</label>
                        <input type="password" name="senha" id="senha" placeholder="Digite sua senha" required></input>
                    </span>

                    <button type="submit" className="botao-forms">Cadastrar</button>



                                <Link to="/Login"><h3>Já tem uma conta? Faça Login!</h3></Link>
                </div>
                

            </form>
        </div>
    )
}