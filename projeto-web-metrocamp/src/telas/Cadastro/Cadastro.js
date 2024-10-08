import "./cadastro.css";
import { Link } from "react-router-dom";
export function Cadastro() {




    return (
        <div className="Cadastro">

            <div className="style_cadastro_logo">
                <h5>Cadastro</h5>
            </div>
            
            <form className="forms" action="https://webhook.site/6eb59883-6c66-4d25-80be-115a37a0ad17" method="get">
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
                        <input type="password" name="password" id="password" placeholder="Digite sua senha" required></input>
                    </span>

                    <button type="submit" className="botao-forms">Cadastrar</button>



                                <Link to="/Login"><h3>Já tem uma conta? Faça Login!</h3></Link>
                </div>
                

            </form>
        </div>
    )
}