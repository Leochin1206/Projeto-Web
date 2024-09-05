import "./cadastro.css";

export function Cadastro(){
    return(
        <div className="Cadastro">
            <form className="forms" action="https://webhook.site/6eb59883-6c66-4d25-80be-115a37a0ad17" method="get">
                <label for="nome">*Nome:</label>
                <input type="text" name="nome" id="nome" placeholder="Digite seu nome" required></input>

                <label for="email">*Email:</label>
                <input type="text" name="email" id="email" placeholder="Digite seu Email" required></input>

                <label for="number">*Celular:</label>
                <input type="number" name="cellphone" id="cellphone" placeholder="Digite seu número" required></input>

                <label for="text">*Cidade:</label>
                <input type="text" name="city" id="city" placeholder="Digite sua cidade" required></input>

                <label for="password">*Senha:</label>
                <input type="password" name="password" id="password" placeholder="Digite sua senha" required></input>

                <button type="submit" className="botao-forms">Enviar</button>
                                   
            </form>
        </div>
    )
}