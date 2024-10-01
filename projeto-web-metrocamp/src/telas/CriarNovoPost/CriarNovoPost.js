import '../CriarNovoPost/CriarNovoPost.css'
import InserirImg from '../../images/InserirImg.png'
import React, {useState} from 'react';

export function CriarNovoPost(){
    const[selectedOption, setSelectedOption] = useState('');
    
    const handleSelectchange = (event) => {
        setSelectedOption(event.target.value);
    }

    const [isSelected, setIsSelected] = useState("")

    function optionSelected(isSelected){
        switch(isSelected){
            case "precoFixo":
                return (<div id="precoFixoInput" className="pricing-inputs hidden">
                            <span>R$</span>
                            <input type="text" placeholder="Preço Fixo"></input>
                        </div>
                        )
            case "minMax":
                return  (<div id="minMaxInputs" className="pricing-inputs hidden">
                            <span>R$</span>
                            <input type="text" placeholder="Min"></input>
                            <span>-</span>
                            <input type="text" placeholder="Max"></input>
                        </div>
                        )
            case "orcamento":
                return (<div id="orcamentoInput" className="pricing-inputs hidden">
                            <input type="text" placeholder="Observação"></input>
                        </div>                     
                        )
            default:
                return null;                        
        }
    }

    return(
        <div className="PagPrincipal">
            <div className='gapImgTitle'>
                <h1>Crie um novo Post:</h1>
                <div className='Imgcriar'>    
                    <img src={InserirImg} alt='Img Criar Post'/>
                </div>
            </div>    
            <div className="AcertarForms">
                <span className="camposCriarPost">
                    <label for="nome" id="nomeTitulo">Título:</label>
                    <input type="text" name="Titulo" id="Titulo" placeholder="Dê um título para seu serviço" required></input>
                </span>

                <span className="camposCriarPost">
                    <label for="email">Descrição:</label>
                    <input type="text" name="Descricao" id="Descricao" placeholder="Crie uma descrição para o seu serviço" required></input>
                </span>
            </div>

            <div className='cidadePreco'>       
                    {/*Lista de cidades que vão abranger os serviços*/}
                <div className="cidadeLista">
                    <h1 className='tituloLista'>Selecione sua cidade:</h1>
                    <select className='selectCampo' value={selectedOption} onChange={handleSelectchange}>
                        <option value="">Selecione...</option>
                        <option value="Americana">Americana</option>
                        <option value="Artur Nogueira">Artur Nogueira</option>
                        <option value="Campinas">Campinas</option>
                        <option value="Cosmópolis">Cosmópolis</option>
                        <option value="Engenheiro Colelho">Engenheiro Coelho</option>
                        <option value="Holambra">Holambra</option>
                        <option value="Hortolândia">Hortolândia</option>
                        <option value="Indaiatuba">Indaiatuba</option>
                        <option value="Itatiba">Itatiba</option>
                        <option value="Jaguariúna">Jaguariúna</option>
                        <option value="Monte Mor">Monte Mor</option>
                        <option value="Nova Odessa">Nova Odessa</option>
                        <option value="Paulínia">Paulínia</option>
                        <option value="Pedreira">Pedreira</option>
                        <option value="Santa Bárbara d'Oeste">SBO</option>
                        <option value="Sumaré">Sumaré</option>
                        <option value="Valinhos">Valinhos</option>
                        <option value="Vinhedo">Vinhedo</option>
                    </select>
                    {selectedOption && <p className='campoSelected'>Você selecionou: {selectedOption}</p>}
                </div>

                <div className="pricing-section">
                    <label>Precificação: </label>
                    <div className="pricing-options">
                    <label><input type="checkbox" name="preco" value="precoFixo" checked={isSelected==="precoFixo"} onChange={(e)=> setIsSelected(e.target.value)}></input>Preço fixo</label>
                    <label><input type="checkbox" name="preco" value="minMax" checked={isSelected==="minMax"} onChange={(e)=> setIsSelected(e.target.value)}></input>Min - Max</label>
                    <label><input type="checkbox" name="preco" value="orcamento" checked={isSelected==="orcamento"} onChange={(e)=> setIsSelected(e.target.value)}></input>Mediante Orçamento</label>
                </div>
                    {optionSelected(isSelected)}

                </div>
            </div>
        </div>
    );
}