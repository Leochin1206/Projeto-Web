import '../CriarNovoPost/CriarNovoPost.css'
import InserirImg from '../../images/InserirImg.png'

export function CriarNovoPost(){
    return(
        <div className="PagPrincipal">
            <h1>Crie um novo Post:</h1>
            <img src={InserirImg} alt='Img Criar Post' className="ImgCriar"/>

            <div className="AcertarForms">
                <span className="camposCriarPost">
                    <label for="nome">*Título:</label>
                    <input type="text" name="Titulo" id="Titulo" placeholder="Dê um título para seu serviço" required></input>
                </span>

                <span className="camposCriarPost">
                    <label for="email">*Descrição:</label>
                    <input type="text" name="Descricao" id="Descricao" placeholder="Crie uma descrição para o seu serviço" required></input>
                </span>
            </div>

            <div className="pricing-section">
                <label>*Precificação: </label>
                <div className="pricing-options">
                    <label><input type="checkbox" name="preco" value="preco-fixo"></input>Preço fixo</label>
                    <label><input type="checkbox" name="preco" value="min-max"></input>Min - Max</label>
                    <label><input type="checkbox" name="preco" value="orcamento"></input>Mediante Orçamento</label>
                </div>

                <div id="precoFixoInput" className="pricing-inputs hidden">
                    <span>R$</span>
                    <input type="text" placeholder="Preço Fixo"></input>
                </div>

                <div id="minMaxInputs" className="pricing-inputs hidden">
                    <span>R$</span>
                    <input type="text" placeholder="Min"></input>
                    <span>-</span>
                    <input type="text" placeholder="Max"></input>
                </div>
            </div>

            <div id="orcamentoInput" className="pricing-inputs hidden">
                <input type="text" placeholder="Observação"></input>
            </div>

        </div>
    );
}