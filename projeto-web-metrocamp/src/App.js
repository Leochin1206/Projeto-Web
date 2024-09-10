import './App.css';
import { Card } from './componentes/Card/Card';
import { FaTrowelBricks } from "react-icons/fa6";
import { PiSolarRoofDuotone, PiPipeBold } from "react-icons/pi";
import { GiElectricalResistance, GiVacuumCleaner, GiWateringCan, GiGate } from "react-icons/gi";
import { FaTruck, FaPaintRoller } from "react-icons/fa";
import { MdOutlineCarpenter } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardPrancheta } from './componentes/CardPrancheta/CardPrancheta';

function App() {

  const [isLogged, setIsLogged] = useState(false)

  const navigate = useNavigate();
  const CheckCadastro = () => {
    if (!isLogged) {
      navigate('/Cadastro');
    } else {
      // Lógica adicional para quando o usuário estiver logado
    }
  };

  return (
    <div className="App">

      <NavBar />
      <div className='button-area'>

        <div className='area-botao-criar'>
          <h1>Quer prestar serviços?</h1>
          <h5>Crie um post já!</h5>

          <div className='botao-criar'>
            <button onClick={isLogged ? "" : CheckCadastro}>Criar</button>
          </div>
        </div>

        <div className='area-botao-criar'>
          <h1>Precisa de uma mão?</h1>
          <h5>Encontre um profissional!</h5>

          <div className='botao-criar'>
            <button onClick={isLogged ? "" : CheckCadastro}>Buscar</button>
          </div>
        </div>
      </div>

      <div className='filtro'>
        <h1>Algum destes pode te ajudar?</h1>

        <div className='botoes'>

          <div className='conjunto'>
            <button onClick={isLogged ? "" : CheckCadastro}><PiSolarRoofDuotone /></button>
            <h6>Calheiro(a)</h6>
          </div>

          <div className='conjunto'>
            <button onClick={isLogged ? "" : CheckCadastro}><GiElectricalResistance /></button>
            <h6>Eletricista</h6>
          </div>

          <div className='conjunto'>
            <button onClick={isLogged ? "" : CheckCadastro}><PiPipeBold /></button>
            <h6>Encanador(a)</h6>
          </div>

          <div className='conjunto'>
            <button onClick={isLogged ? "" : CheckCadastro}><GiVacuumCleaner /></button>
            <h6>Faxineiro(a)</h6>
          </div>

          <div className='conjunto'>
            <button onClick={isLogged ? "" : CheckCadastro}><FaTruck /></button>
            <h6>Fretes</h6>
          </div>

          <div className='conjunto'>
            <button onClick={isLogged ? "" : CheckCadastro}><GiWateringCan /></button>
            <h6>Jardineiro(a)</h6>
          </div>

          <div className='conjunto'>
            <button onClick={isLogged ? "" : CheckCadastro}><MdOutlineCarpenter /></button>
            <h6>Marceneiro(a)</h6>
          </div>

          <div className='conjunto'>
            <button onClick={isLogged ? "" : CheckCadastro}><FaTrowelBricks /></button>
            <h6>Pedreiro(a)</h6>
          </div>

          <div className='conjunto'>
            <button onClick={isLogged ? "" : CheckCadastro}><FaPaintRoller /></button>
            <h6>Pintor(a)</h6>
          </div>

          <div className='conjunto'>
            <button onClick={isLogged ? "" : CheckCadastro}><GiGate /></button>
            <h6>Serralheiro(a)</h6>
          </div>

          <div className='conjunto'>
            <button onClick={isLogged ? "" : CheckCadastro}><BsThreeDots /></button>
            <h6>Outros</h6>
          </div>
        </div>

      </div>

      <div className='Cards'>
        <Card />
        <Card />
        <Card />
      </div>

    </div>
  );
}

export default App;
