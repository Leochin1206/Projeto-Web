import '../CriarNovoPost/CriarNovoPost.css';
import InserirImg from '../../images/InserirImg.png';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function CriarNovoPost() {
    const [cidadeServico, setCidadeServico] = useState('');
    const [preco, setPreco] = useState('');
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [imagem, setImagem] = useState(null); // Use a variável correta aqui
    const [imagemPreview, setImagemPreview] = useState(InserirImg);
    const navigate = useNavigate();

    // Função da seleção de cidades
    const handleSelectChange = (event) => {
        setCidadeServico(event.target.value);
    }

    // Função para mexer com a imagem
    const handleImagemChange = (event) => {
        const file = event.target.files[0];
        if (file && file.size > 2 * 1024 * 1024) {
            alert('Tamanho de imagem ultrapassa 2MB');
            setImagem(null);
        } else {
            setImagem(file);
            setImagemPreview(URL.createObjectURL(file));
        }
    }

    // Função do Submit/ Requisição
    const handleSubmit = async (event) => {
        event.preventDefault(); // Impede que a página recarregue

        const data = {
            titulo,
            descricao,
            preco,
            cidadeServico
        };

        const formData = new FormData();
        formData.append("data", new Blob([JSON.stringify(data)], { type: "application/json" }));
        formData.append("imagem", imagem); // Use a imagem correta

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

    // Função da precificação
    function optionSelected(preco) {
        // Lógica para mostrar opções de preços
        switch (preco) {
            case "precoFixo":
                return (
                    <div id="precoFixoInput" className="pricing-inputs hidden">
                        <span>R$</span>
                        <input type="text" placeholder="00,00" />
                    </div>
                );
            case "minMax":
                return (
                    <div id="minMaxInputs" className="pricing-inputs hidden">
                        <span>R$</span>
                        <input type="text" placeholder="00,00" />
                        <span>-</span>
                        <input type="text" placeholder="00,00" />
                    </div>
                );
            case "orcamento":
                return (
                    <div id="orcamentoInput" className="pricing-inputs hidden">
                        <input type="text" placeholder="OBS:" />
                    </div>
                );
            default:
                return null;
        }
    }

    return (
        <div className="PagPrincipal">
            <form id="CadastroForm" onSubmit={handleSubmit}>
                <h1>Crie um novo Post:</h1>
                <div className='gapImgTitle'>
                    <div className='Imgcriar'>    
                        <img src={imagemPreview} alt='ImgCriarPost' className='imgContent' />
                    </div>
                    <div className='uploadImg'>
                        <input type='file' name='imagem' onChange={handleImagemChange} />
                    </div>
                </div>    
                <div className="AcertarForms">
                    <span className="camposCriarPost">
                        <label htmlFor="Titulo">Título:</label>
                        <input type="text" name="Titulo" id="Titulo" placeholder="Dê um título para seu serviço" required
                            value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                    </span>
                    <span className="camposCriarPost">
                        <label htmlFor='Descricao'>Descrição:</label>
                        <input type="text" name="Descricao" id="Descricao" placeholder="Crie uma descrição para o seu serviço" required
                            value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                    </span>
                </div>
                <div className='cidadePreco'>       
                    <div className="cidadeLista">
                        <h1 className='tituloLista'>Selecione a cidade:</h1>
                        <select className='selectCampo' value={cidadeServico} onChange={handleSelectChange}>
                            <option value="">Selecione...</option>
                            <option value="Americana">Americana</option>
                            <option value="Artur Nogueira">Artur Nogueira</option>
                            {/* Adicione mais opções de cidade aqui */}
                        </select>
                        {cidadeServico && <p className='campoSelected'>Você selecionou: {cidadeServico}</p>}
                    </div>
                    <div className="pricing-section">
                        <label>Precificação: </label>
                        <div className="pricing-options">
                            <label><input type="radio" name="preco" value="precoFixo" checked={preco === "precoFixo"} onChange={(e) => setPreco(e.target.value)} />Preço fixo</label>
                            <label><input type="radio" name="preco" value="minMax" checked={preco === "minMax"} onChange={(e) => setPreco(e.target.value)} />Min - Max</label>
                            <label><input type="radio" name="preco" value="orcamento" checked={preco === "orcamento"} onChange={(e) => setPreco(e.target.value)} />Mediante Orçamento</label>
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
