import '../ComplementoPerfil/ComplementoPerfil.css';
import { Avaliacao } from '../../componentes/Avaliacao/Avaliacao';
import Select from 'react-select';
import { useState } from 'react';
import ImagemPerfil from '../../images/icone.png';
import {useUserContext} from "../../componentes/Context/UserContext";
import { useNavigate } from 'react-router-dom';

export function ComplementoPerfil() {

    const {userData, saveData }= useUserContext();
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const {login} = useUserContext();

    const handleSubmit = async (event)=>{
    event.preventDefault();
    setIsLoading(true);
    
        const formElement = document.getElementById("formsCP");
        const formData = new FormData(formElement);

        // Cria o objeto de dados combinando os valores do input e selects
        const dados = {
            telefone: formData.get("telefone"),
            cidade: selectedCity?.value || null, 
            profissao: selectedProfessions.map(profissao => profissao.value) 
        };

        
        saveData(dados);

        
        const dadosJson = JSON.stringify(userData);

    try{
        const response = await fetch("http://localhost:8080/users", { 
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: dadosJson});
    
    
        if (response.ok) {
            //const data = await response.json();
            console.log("Usuário criado com sucesso:", userData);
            login();
            navigate("/");
        } else {
            const errorText = await response.text();
            console.error("Erro na resposta", response, errorText);
        }
    } catch (error) {
        console.error("Erro de requisição", error);
       
    } finally{
        setTimeout(() => {
            setIsLoading(false); 
          }, 2000); 
    }  
}

    // Gerenciamento de estado para cidade e profissões
    const [selectedCity, setSelectedCity] = useState(null);
    const [selectedProfessions, setSelectedProfessions] = useState([]);

    const citiesOptions = [
        { value: 'Americana', label: 'Americana' },
        { value: 'Artur Nogueira', label: 'Artur Nogueira' },
        { value: 'Campinas', label: 'Campinas' },
        { value: 'Cosmópolis', label: 'Cosmópolis' },
        { value: 'Engenheiro Coelho', label: 'Engenheiro Coelho' },
        { value: 'Holambra', label: 'Holambra' },
        { value: 'Hortolândia', label: 'Hortolândia' },
        { value: 'Indaiatuba', label: 'Indaiatuba' },
        { value: 'Itatiba', label: 'Itatiba' },
        { value: 'Jaguariúna', label: 'Jaguariúna' },
        { value: 'Monte Mor', label: 'Monte Mor' },
        { value: 'Nova Odessa', label: 'Nova Odessa' },
        { value: 'Paulínia', label: 'Paulínia' },
        { value: 'Pedreira', label: 'Pedreira' },
        { value: 'Santa Bárbara d\'Oeste', label: 'Santa Bárbara d\'Oeste' },
        { value: 'Santo Antônio de Posse', label: 'Santo Antônio de Posse' },
        { value: 'Sumaré', label: 'Sumaré' },
        { value: 'Valinhos', label: 'Valinhos' },
        { value: 'Vinhedo', label: 'Vinhedo' },
        { value: 'Morungaba', label: 'Morungaba' },
        // Adicione outras cidades aqui
    ];

    const professionsOptions = [
        { value: 'Azulejista', label: 'Azulejista' },
        { value: 'Calheiro(a)', label: 'Calheiro(a)' },
        { value: 'Carpinteiro(a)', label: 'Carpinteiro(a)' },
        { value: 'Eletricista(a)', label: 'Eletricista(a)' },
        { value: 'Encanador(a)', label: 'Encanador(a)' },
        { value: 'Faxineiro(a)', label: 'Faxineiro(a)' },
        { value: 'Fretes', label: 'Fretes' },
        { value: 'Funileiro(a)', label: 'Funileiro(a)' },
        { value: 'Gesseiro(a)', label: 'Gesseiro(a)' },
        { value: 'Jardineiro(a)', label: 'Jardineiro(a)' },
        { value: 'Marceneiro(a)', label: 'Marceneiro(a)' },
        { value: 'Mecânico(a)', label: 'Mecânico(a)' },
        { value: 'Montador de Móveis', label: 'Montador de Móveis' },
        { value: 'Pedreiro(a)', label: 'Pedreiro(a)' },
        { value: 'Pintor(a)', label: 'Pintor(a)' },
        { value: 'Serralheiro(a)', label: 'Serralheiro(a)' },
        { value: 'Vidraceiro(a)', label: 'Vidraceiro(a)' },
        { value: 'Outros', label: 'Outros' }
    ];

    const handleCityChange = (selectedOption) => {
        setSelectedCity(selectedOption);
    };

    const handleProfessionsChange = (selectedOptions) => {
        setSelectedProfessions(selectedOptions);
    };

    return (
        <div className='CentralizarCP'>
            <div className='CompletePerfil'>
                <h1>Complete Seu Perfil</h1>
            </div>

            <div className='FotoPerfil'>
                <button>
                    <img src={ImagemPerfil} alt="" className="imagem-perfil" />
                </button>
                <h4>Foto do Perfil</h4>
            </div>

            <div className='CamposPerfil'>
                <form className='formsCP' id="formsCP" onSubmit={handleSubmit} method="get" >

                    <div className='CamposUm'>
                        <span className="camposPerfilCP">
                            <label >*Telefone:</label>
                            <input type="text" name="telefone" id="telefoneCP" placeholder="Ex: (19) 99999-9999" required></input>
                        </span>
                    </div>

                    <div className='CamposDois'>
                        {/* Campo Cidade */}
                        <span className="camposPerfilCP">
                            <label >*Cidade:</label>
                            <Select
                                value={selectedCity}
                                onChange={handleCityChange}
                                options={citiesOptions}
                                placeholder="Selecione sua cidade"
                                isClearable
                            />
                        </span>

                        {/* Campo Profissão */}
                        <span className="camposPerfilCP">
                            <label >*Profissão:</label>
                            <Select
                                value={selectedProfessions}
                                onChange={handleProfessionsChange}
                                options={professionsOptions}
                                isMulti
                                placeholder="Selecione sua(s) profissão(ões)"
                                maxMenuHeight={150}
                            />
                        </span>
                    </div>
                    <div className='btnSalvar'>
                        <button style={{
                                backgroundColor: isLoading ? '#ccc' : '#007BFF', 
                                cursor: isLoading ? 'not-allowed' : 'pointer', }}
                                type='submit'>Salvar</button>
                    </div>
                </form>
            </div>


        </div>
    );
}
