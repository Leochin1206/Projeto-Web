import './App.css';
import { Card } from './componentes/Card/Card';
import { FaTrowelBricks } from "react-icons/fa6";
import { PiSolarRoofDuotone, PiPipeBold } from "react-icons/pi";
import { GiElectricalResistance, GiVacuumCleaner, GiWateringCan, GiGate } from "react-icons/gi";
import { FaTruck, FaPaintRoller } from "react-icons/fa";
import { MdOutlineCarpenter } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useUserContext } from './componentes/Context/UserContext';

function App() {

  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const {isLoggedIn} = useUserContext();

  const CheckCadastro = () => {
    if (!isLoggedIn) {
      navigate('/Cadastro');
    } 
  };
  useEffect(() => {
    // Função para buscar os dados dos posts
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:8080/post', {
          method: 'GET', // Define o método HTTP como GET
        });
        
        if (response.ok) {
          const data = await response.json();
          setPosts(data);
        } else {
          console.error("Erro ao buscar os posts.");
        }
      } catch (error) {
        console.error("Erro de rede:", error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="App">

      <div className='button-area'>

        <div className='area-botao-criar'>
          <h1>Quer prestar serviços?</h1>
          <h5>Crie um post já!</h5>

          <div className='botao-criar'>
            <button onClick={()=> isLoggedIn ? navigate("/CriarNovoPost") : CheckCadastro()}>Criar</button>
          </div>
        </div>

        <div className='area-botao-criar'>
          <h1>Precisa de uma mão?</h1>
          <h5>Encontre um profissional!</h5>

          <div className='botao-criar'>
            <button onClick={()=> isLoggedIn ? navigate("/Anuncios") : CheckCadastro()}>Buscar</button>
          </div>
        </div>
      </div>

      <div className='filtro'>
        <h1 id='AlgumDesses'>Algum destes pode te ajudar?</h1>

        <div className='botoes'>

          <div className='conjunto'>
            <button onClick={()=> isLoggedIn ? "" : CheckCadastro()}><PiSolarRoofDuotone /></button>
            <h6>Calheiro(a)</h6>
          </div>

          <div className='conjunto'>
          <button onClick={()=> isLoggedIn ? "" : CheckCadastro()}><GiElectricalResistance /></button>
            <h6>Eletricista</h6>
          </div>

          <div className='conjunto'>
          <button onClick={()=> isLoggedIn ? "" : CheckCadastro()}><PiPipeBold /></button>
            <h6>Encanador(a)</h6>
          </div>

          <div className='conjunto'>
          <button onClick={()=> isLoggedIn ? "" : CheckCadastro()}><GiVacuumCleaner /></button>
            <h6>Faxineiro(a)</h6>
          </div>

          <div className='conjunto'>
          <button onClick={()=> isLoggedIn ? "" : CheckCadastro()}><FaTruck /></button>
            <h6>Fretes</h6>
          </div>

          <div className='conjunto'>
            <button onClick={()=> isLoggedIn ? "" : CheckCadastro()}><GiWateringCan /></button>
            <h6>Jardineiro(a)</h6>
          </div>

          <div className='conjunto'>
            <button onClick={()=> isLoggedIn ? "" : CheckCadastro()}><MdOutlineCarpenter /></button>
            <h6>Marceneiro(a)</h6>
          </div>

          <div className='conjunto'>
            <button onClick={()=> isLoggedIn ? "" : CheckCadastro()}><FaTrowelBricks /></button>
            <h6>Pedreiro(a)</h6>
          </div>

          <div className='conjunto'>
            <button onClick={()=> isLoggedIn ? "" : CheckCadastro()}><FaPaintRoller /></button>
            <h6>Pintor(a)</h6>
          </div>

          <div className='conjunto'>
            <button onClick={()=> isLoggedIn ? "" : CheckCadastro()}><GiGate /></button>
            <h6>Serralheiro(a)</h6>
          </div>

          <div className='conjunto'>
            <button onClick={()=> isLoggedIn ? "" : CheckCadastro()}><BsThreeDots /></button>
            <h6>Outros</h6>
          </div>
        </div>

      </div>

      <div className='Cards-section'>
        <h6>Mais recentes:</h6>
        <div className='Cards'>
        {posts.map(post => (
                        <Card
                            key={post.id}
                            titulo={post.titulo}
                            descricao={post.descricao}
                            preco={post.preco}
                            cidadeServico={post.cidadeServico}
                            imagem={post.imagemUrl}
                        />
          ))}
        </div>
      </div>

    </div>
  );
}

export default App;
