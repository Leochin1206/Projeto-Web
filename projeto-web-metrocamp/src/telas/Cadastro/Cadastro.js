import "./cadastro.css";
import { Link } from "react-router-dom";
import { useState } from "react";
export function Cadastro() {

    const [isLoading, setIsLoading] =useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault(); // Impede o comportamento padrão do submit
        setIsLoading(true)



        // Cria o objeto FormData a partir dos campos do formulário
        const formElement = document.getElementById("CadastroForm");
        const formData = new FormData(formElement);
       // const data = Object.fromEntries(formData.entries());


      
        const data = {
            nome: formData.get("nome"),
            email: formData.get("email"),
            senha: formData.get("senha"),
            telefone: parseInt(formData.get("telefone"), 10), // Converte para int
        };

        const dados = JSON.stringify(data)
        
        try {
            const response = await fetch("http://localhost:8080/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json", // Define o tipo de conteúdo
                },
                body: dados, // Enviando os dados do FormData
            });
            console.log("Resposta recebida:", response);
    
            if (response.ok) {
                //const data = await response.json();
                console.log("Usuário criado com sucesso:", data);
            } else {
                const errorText = await response.text();
                console.error("Erro na resposta", response, errorText);
            }
        } catch (error) {
            console.error("Erro de requisição", error);
           
        } finally{
            setTimeout(() => {
                setIsLoading(false); // Reativa o botão
              }, 2000); // Tempo em milissegundos
        }
    };
    

    return (
        <div className="Cadastro">

            <div className="style_cadastro_logo">
                <h5>Cadastro</h5>
            </div>
            
            <form className="forms" onSubmit={handleSubmit} id="CadastroForm">
                <div className="acertaForms">

                    <span className="campos">
                        <label>*Nome:</label>
                        <input type="text" name="nome" id="nome" placeholder="Digite seu nome" required></input>
                    </span>

                    <span className="campos">
                        <label>*Email:</label>
                        <input type="text" name="email" id="email" placeholder="Digite seu Email" required></input>
                    </span>

                    <span className="campos">
                        <label>*Senha:</label>
                        <input type="password" name="senha" id="senha" placeholder="Digite sua senha" required></input>
                    </span>

                    <span className="campos">
                        <label>*Telefone:</label>
                        <input type="text" name="telefone" id="telefone" placeholder="Digite seu número" required></input>
                    </span>

                    <button type="submit" className="botao-forms"  style={{
                        backgroundColor: isLoading ? '#ccc' : '#007BFF', 
                        cursor: isLoading ? 'not-allowed' : 'pointer', }}>Cadastrar</button>



                                <Link to="/Login"><h3>Já tem uma conta? Faça Login!</h3></Link>
                </div>
                

            </form>
        </div>
    )
}