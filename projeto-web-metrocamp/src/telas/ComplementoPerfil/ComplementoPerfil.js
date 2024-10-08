import '../ComplementoPerfil/ComplementoPerfil.css';
import { Avaliacao } from '../../componentes/Avaliacao/Avaliacao';
import Select from 'react-select';
import { useState } from 'react';

export function ComplementoPerfil() {
    // Gerenciamento de estado para cidade e profissões
    const [selectedCity, setSelectedCity] = useState(null);
    const [selectedProfessions, setSelectedProfessions] = useState([]);

    const citiesOptions = [
        { value: 'Araras', label: 'Araras' },
        { value: 'Araraquara', label: 'Araraquara' },
        { value: 'Anand', label: 'Anand' },
        { value: 'Araçatuba', label: 'Araçatuba' },
        { value: 'Araguari', label: 'Araguari' },
        // Adicione outras cidades aqui
    ];

    const professionsOptions = [
        { value: 'Pedreiro', label: 'Pedreiro' },
        { value: 'Pintor', label: 'Pintor' },
        { value: 'Calheiro', label: 'Calheiro' },
        { value: 'Encanador', label: 'Encanador' },
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
                {/* Aqui você pode adicionar a lógica para selecionar a foto */}
            </div>

            <div className='CamposPerfil'>
                <form className='formsCP' method="get">
                    <span className="camposPerfilCP">
                        <label htmlFor="nome">*Nome:</label>
                        <input type="text" name="nome" id="nomeCP" placeholder="Digite seu nome" required></input>
                    </span>

                    <span className="camposPerfilCP">
                        <label htmlFor="telefone">*Telefone:</label>
                        <input type="text" name="telefone" id="telefoneCP" placeholder="Ex: (19) 99999-9999" required></input>
                    </span>

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
                </form>
            </div>

            <div className='btnSalvar'>
                <button>Salvar</button>
            </div>
        </div>
    );
}
