import '../PerfilScreen/PerfilScreen.css'
import { CardPerfil } from "../../componentes/CardPerfil/CardPerfil";
import { FaUserCircle, FaStar } from "react-icons/fa";
import ImagemPerfil from '../../images/icone.png'

export function PerfilScreen() {
    return (
        <div className="divPrincipal">
            <div className="CentralizarCards">
                <div className="perfilDetalhadoDontainer">
                    <div className="perfilDados">
                        <img src={ImagemPerfil} alt='' className='imagem-perfil' />
                        <h2>Renato Willian</h2>
                        <h4>Calheiro | Pedreiro | Encanador</h4>
                    </div>

                    <div className="servicos">
                        <div className="servicosPrestados">
                            <h5>Serviços Prestados</h5>
                            <p className="servicosNum">12</p>
                        </div>
                        <div className="servicosAprestar">
                            <h5>Serviços à Prestar</h5>
                            <p className="servicosNum">4</p>
                        </div>
                    </div>

                    <div className="avaliacoes">
                        <h5>Avaliações <span>(25)</span></h5>
                        <div className="estrelas">
                            <FaStar className="estrela" />
                            <FaStar className="estrela" />
                            <FaStar className="estrela" />
                            <FaStar className="estrela" />
                            <FaStar className="estrela vazia" />
                        </div>
                        <h2 id='centralizarNota'>4</h2>
                        <h5>Últimas avaliações</h5>
                        <div className="ultimaAvaliacao">
                            <FaUserCircle className="iconeAvaliacao" />
                            <div>
                                <p className="nomeAvaliacao">Rafael Feltrim</p>
                                <p>O serviço ficou mais ou menos, porém o seu Renato é uma excelente pessoa.</p>
                            </div>
                        </div>
                        <div className="ultimaAvaliacao">
                            <FaUserCircle className="iconeAvaliacao" />
                            <div>
                                <p className="nomeAvaliacao">Rafael Feltrim</p>
                                <p>O serviço ficou mais ou menos, porém o seu Renato é uma excelente pessoa.</p>
                            </div>
                        </div>
                        <div className="ultimaAvaliacao">
                            <FaUserCircle className="iconeAvaliacao" />
                            <div>
                                <p className="nomeAvaliacao">Rafael Feltrim</p>
                                <p>O serviço ficou mais ou menos, porém o seu Renato é uma excelente pessoa.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="CentralizarServico">
                <div className="CentraliarCoisas">
                    <div className="Servico">
                        <h1>Serviços</h1>
                    </div>
                    <button className="CriarPostPerfil">
                        Criar Novo Post
                    </button>
                </div>

                <div className="CentralizarCardPerfil">
                    <CardPerfil />
                    <CardPerfil />
                    <CardPerfil />
                    <CardPerfil />
                </div>
            </div>
        </div>
    );
}