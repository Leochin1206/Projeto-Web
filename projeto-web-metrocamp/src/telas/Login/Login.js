import "./login.css";
import { Link } from "react-router-dom";

export function Login() {




    return (
        <div className="Login">

            <div className="style_login_logo">
                <h5>Login</h5>
            </div>
            
            <form className="formsLogin" action="" method="">
                <div className="acertaLogin">

                    <span className="campos">
                        <label for="email">Email:</label>
                        <input type="text" name="email" id="email" placeholder="Digite seu Email" required></input>
                    </span>

                    <span className="campos">
                        <label for="password">Senha:</label>
                        <input type="password" name="password" id="password" placeholder="Digite sua senha" required></input>
                    </span>

                    <button type="submit" className="botao-logar">Entrar</button>

                </div>
                
                    
                    <Link to="/Cadastro"><h3>Não tem uma conta? Cadastre-se!</h3></Link>

            </form>
        </div>
    )
}