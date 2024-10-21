import "./anuncios.css";
import { Card } from "../../componentes/Card/Card.js"
import Select from 'react-select'
import { useState } from 'react';

export function Anuncios() {

    const [selectedCity, setSelectedCity] = useState(null);
    const [selectedProfessions, setSelectedProfessions] = useState(null);
    const [selectedOrder, setSelectedOrder] = useState(null);

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
        { value: 'Morungaba', label: 'Morungaba' }
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

    const orderOptions = [
        { value: 'Mais relevante', label: 'Mais relevante' },
        { value: 'Menor preço', label: 'Menor preço' },
        { value: 'Maior preço', label: 'Maior preço' },
        { value: 'Oderm alfabética', label: 'Oderm alfabética' },
    ];

    const handleCityChange = (selectedOption) => {
        setSelectedCity(selectedOption);
    };

    const handleProfessionsChange = (selectedOptions) => {
        setSelectedProfessions(selectedOptions);
    };

    const handleOrderChange = (selectedOptions) => {
        setSelectedOrder(selectedOptions);
    };

    return (
        <div className="Anuncios">

            <h1>Anuncios de Pintores:</h1>

            <div className="Container-anuncios">

                <div className="Filtro">
                    <h2>Flitros:</h2>

                    <span className="Selectlist">
                        <label htmlFor="cidade">Cidade:</label>
                        <Select
                            value={selectedCity}
                            onChange={handleCityChange}
                            options={citiesOptions}
                            placeholder="Cidade"
                            isClearable
                        />
                    </span>

                    <span className="Selectlist">
                        <label htmlFor="profissao">Profissão:</label>
                        <Select
                            value={selectedProfessions}
                            onChange={handleProfessionsChange}
                            options={professionsOptions}
                            placeholder="Profissão"
                            maxMenuHeight={150}
                        />
                    </span>

                    <span className="Selectlist">
                        <label htmlFor="profissao">Ordernar por:</label>
                        <Select
                            value={selectedOrder}
                            onChange={handleOrderChange}
                            options={orderOptions}
                            placeholder="Ordernar por"
                            maxMenuHeight={150}
                        />
                    </span>

                </div>

                <div className="Posted-adds">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>

            </div>

        </div>
    );
}