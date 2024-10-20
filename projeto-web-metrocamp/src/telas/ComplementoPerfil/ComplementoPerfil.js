import '../ComplementoPerfil/ComplementoPerfil.css';
import { Avaliacao } from '../../componentes/Avaliacao/Avaliacao';
import Select from 'react-select';
import { useState } from 'react';
import ImagemPerfil from '../../images/icone.png'


export function ComplementoPerfil() {
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
        { value: 'Pedreiro', label: 'Pedreiro' },
        { value: 'Pintor', label: 'Pintor' },
        { value: 'Calheiro', label: 'Calheiro' },
        { value: 'Encanador', label: 'Encanador' },
        { value: 'Carpinteiro', label: 'Carpinteiro' },
        { value: 'Eletricista', label: 'Eletricista' },
        { value: 'Serralheiro', label: 'Serralheiro' },
        { value: 'Marceneiro', label: 'Marceneiro' },
        { value: 'Mecânico', label: 'Mecânico' },
        { value: 'Bombeiro Hidráulico', label: 'Bombeiro Hidráulico' },
        { value: 'Gesseiro', label: 'Gesseiro' },
        { value: 'Azulejista', label: 'Azulejista' },
        { value: 'Vidraceiro', label: 'Vidraceiro' },
        { value: 'Ferreiro', label: 'Ferreiro' },
        { value: 'Montador de Móveis', label: 'Montador de Móveis' },
        { value: 'Jardineiro', label: 'Jardineiro' },
        { value: 'Reparador de Aparelhos', label: 'Reparador de Aparelhos' },
        { value: 'Pintor Automotivo', label: 'Pintor Automotivo' },
        { value: 'Soldador', label: 'Soldador' },
        { value: 'Operador de Máquinas', label: 'Operador de Máquinas' },
        // Adicione outras profissões aqui
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
                <form className='formsCP' method="get">

                    <div className='CamposUm'>
                        <span className="camposPerfilCP">
                            <label htmlFor="nome">*Nome:</label>
                            <input type="text" name="nome" id="nomeCP" placeholder="Digite seu nome" required></input>
                        </span>

                        <span className="camposPerfilCP">
                            <label htmlFor="telefone">*Telefone:</label>
                            <input type="text" name="telefone" id="telefoneCP" placeholder="Ex: (19) 99999-9999" required></input>
                        </span>
                    </div>

                    <div className='CamposDois'>
                        {/* Campo Cidade */}
                        <span className="camposPerfilCP">
                            <label htmlFor="cidade">*Cidade:</label>
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
                            <label htmlFor="profissao">*Profissão:</label>
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
                </form>
            </div>

            <div className='btnSalvar'>
                <button>Salvar</button>
            </div>
        </div>
    );
}
