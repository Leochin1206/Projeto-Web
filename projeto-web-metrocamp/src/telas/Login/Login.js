import { useContext } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../../componentes/Context/UserContext";
export function Login() {

const navigate = useNavigate();
const {login} = useUserContext();


const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const senha = event.target.senha.value;


    try{
        const response = await fetch("http://localhost:8080/users", 
            {
                method: "GET",
                headers: {"Content-Type": "application/json"},
            }
        );
    
        if (!response.ok) {
            throw new Error("Erro na requisição");
        }

        const users = await response.json();
        const user = users.find((user) => user.email === email && user.senha === senha);
    
        if (user) {
            console.log("Login bem-sucedido:", user);
            login(); 
            navigate("/");
        } else {
            alert("Email ou senha inválidos!");
        }
    
    
    
    } catch(error){
        console.log(error);
    }


}




    return (
        <div className="Login">

            <div className="style_login_logo">
                <h5>Login</h5>
            </div>
            
            <form className="formsLogin" onSubmit={handleSubmit}>
                <div className="acertaLogin">

                    <span className="campos">
                        <label for="email">Email:</label>
                        <input type="text" name="email" id="email" placeholder="Digite seu Email" required></input>
                    </span>

                    <span className="campos">
                        <label for="senha">Senha:</label>
                        <input type="password" name="senha" id="senha" placeholder="Digite sua senha" required></input>
                    </span>

                    <button type="submit" className="botao-logar">Entrar</button>

                </div>
                
                    
                    <Link to="/Cadastro"><h3>Não tem uma conta? Cadastre-se!</h3></Link>

            </form>
        </div>
    )
}