import '../CriarNovoPost/CriarNovoPost.css'
import InserirImg from '../../images/InserirImg.png'
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

export function CriarNovoPost(){
    const [cidadeServico, setCidadeServico] = useState('');
    const [preco, setPreco] = useState("")
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [imagemCaminho, setImagem] = useState('');
    const [imagemPreview, setImagemPreview] = useState(InserirImg);
    const navigate = useNavigate();
    
    //Função da seleção de cidades
    const handleSelectchange = (event) => {
        setCidadeServico(event.target.value);
    }

    //Função para mexer com a imagem
    const handleImagemChange = (event) => { 
        //setImagem(event.target.files[0]);
        const file = event.target.files[0];



        if(file && file.size > 2 * 1024 * 1024){
            alert('Tamanho de imagem ultrapassa 2MB');
            setImagem(null);
        }else{
            setImagem(file);
            setImagemPreview(URL.createObjectURL(file));
        }
    }

    //Função do Submit/ Requisição
    const handleSubmit = async (event) => {
        event.preventDefault(); //impede q a página recarregue

        //interface mais flexivel do javaScript e bom para dados mistos
        /*
        const formCampos = new FormData(); 
        formCampos.append('data', JSON.stringify({
            titulo,
            descricao,
            cidadeServico,
            preco
        })); //pegam os valores dos inputs e adicionam ao objeto formCampos
        formCampos.append('imagem', imagemCaminho);

        try {
            const response = await fetch('http://localhost:8080/post',{
                method: 'POST',  //envia dos dados
                body: formCampos  //contem os dados do post
            });

            if(response.ok){
                console.log('Post criado');
            } else{
                console.error('Erro ao criar');
            }
        } catch(error){
            console.log('Erro na requisicao:', error)
        }
            */

        const data = {
            titulo: "Exemplo de Título",
            descricao: "Exemplo de Descrição",
            preco: "100.00",
            cidadeServico: "Cidade Exemplo"
        };
    
        const formData = new FormData();
        formData.append("data", new Blob([JSON.stringify(data)], { type: "application/json" }));
        formData.append("imagem", imagemCaminho);
    
        try {
            const response = await fetch("http://localhost:8080/post", {
                method: "POST",
                body: formData
            });
    
            if (response.ok) {
                console.log("Post salvo com sucesso!");
                navigate("/");
            } else {
                console.error("Erro ao salvar o post.");
            }
        } catch (error) {
            console.error("Erro de rede:", error);
        }
    };
        
    //Função da precificação
    function optionSelected(preco){
        switch(preco){
            case "precoFixo":
                return (<div id="precoFixoInput" className="pricing-inputs hidden">
                            <span>R$</span>
                            <input type="text" placeholder="00,00"></input>
                        </div>
                        )
            case "minMax":
                return  (<div id="minMaxInputs" className="pricing-inputs hidden">
                            <span>R$</span>
                            <input type="text" placeholder="00,00"></input>
                            <span>-</span>
                            <input type="text" placeholder="00,00"></input>
                        </div>
                        )
            case "orcamento":
                return (<div id="orcamentoInput" className="pricing-inputs hidden">
                            <input type="text" placeholder="OBS:"></input>
                        </div>                     
                        )
            default:
                return null;                        
        }
    }

    return(
        <div className="PagPrincipal">
            <form onSubmit={handleSubmit}>
                    <h1>Crie um novo Post:</h1>
                <div className='gapImgTitle'>
                    <div className='Imgcriar'>    
                        <img src={imagemPreview} alt='ImgCriarPost' className='imgContent'/>
                    </div>

                    <div className='uploadImg'>
                    <input type='file' name='imagem' onChange={handleImagemChange} />
                    </div>
                </div>    
                <div className="AcertarForms">
                    <span className="camposCriarPost">
                        <label for="nome" id="nomeTitulo">Título:</label>
                        <input type="text" name="Titulo" id="Titulo" placeholder="Dê um título para seu serviço" required
                         value={titulo} onChange={(e) => setTitulo(e.target.value)} /> {/*garante que o valor do campo sempre esteja sincronizado com o estado e que o estado seja atualizado quando o usuario digitar*/}
                    </span>

                    <span className="camposCriarPost">
                        <label for="email" id='nomeDescricao'>Descrição:</label>
                        <input type="text" name="Descricao" id="Descricao" placeholder="Crie uma descrição para o seu serviço" required
                         value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                    </span>
                </div>

                <div className='cidadePreco'>       
                        {/*Lista de cidades que vão abranger os serviços*/}
                    <div className="cidadeLista">
                        <h1 className='tituloLista'>Selecione a cidade:</h1>
                        <select className='selectCampo' value={cidadeServico} onChange={handleSelectchange}>
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
                        {cidadeServico && <p className='campoSelected'>Você selecionou: {cidadeServico}</p>}
                    </div>

                    <div className="pricing-section">
                        <label>Precificação: </label>
                        <div className="pricing-options">
                            <label><input type="radio" name="preco" value="precoFixo" checked={preco ==="precoFixo"} onChange={(e)=> setPreco(e.target.value)}></input>Preço fixo</label>
                            <label><input type="radio" name="preco" value="minMax" checked={preco ==="minMax"} onChange={(e)=> setPreco(e.target.value)}></input>Min - Max</label>
                            <label><input type="radio" name="preco" value="orcamento" checked={preco ==="orcamento"} onChange={(e)=> setPreco(e.target.value)}></input>Mediante Orçamento</label>
                        </div>
                            {optionSelected(preco)}

                    </div>
                </div>
                    <div className='divBotao'>
                        <button type='submit' className="botaoPost">Enviar</button>
                    </div>
            </form>
        </div>
    );
}