import './App.css';
import { Card } from './componentes/Card/Card';
import { NavBar } from './componentes/NavBar/NavBar';
import { FaTrowelBricks } from "react-icons/fa6";
import { PiSolarRoofDuotone, PiPipeBold } from "react-icons/pi";
import { GiElectricalResistance, GiVacuumCleaner, GiWateringCan, GiGate } from "react-icons/gi";
import { FaTruck, FaPaintRoller } from "react-icons/fa";
import { MdOutlineCarpenter } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { CardPrancheta } from './componentes/CardPrancheta/CardPrancheta';

function App() {
  return (
    <div className="App">

      <NavBar />

      <div className='button-area'>

        <div className='area-botao-criar'>
          <h1>Quer prestar serviços?</h1>
          <h5>Crie um post já!</h5>

          <div className='botao-criar'>
            <button>Criar</button>
          </div>
        </div>

        <div className='area-botao-criar'>
          <h1>Precisa de uma mão?</h1>
          <h5>Encontre um profissional!</h5>

          <div className='botao-criar'>
            <button>Buscar</button>
          </div>
        </div>
      </div>

      <div className='filtro'>
        <h1>Algum destes pode te ajudar?</h1>

        <div className='botoes'>

          <div className='conjunto'>
            <button><PiSolarRoofDuotone /></button>
            <h6>Calheiro(a)</h6>
          </div>

          <div className='conjunto'>
            <button><GiElectricalResistance /></button>
            <h6>Eletricista</h6>
          </div>

          <div className='conjunto'>
            <button><PiPipeBold /></button>
            <h6>Encanador(a)</h6>
          </div>

          <div className='conjunto'>
            <button><GiVacuumCleaner /></button>
            <h6>Faxineiro(a)</h6>
          </div>

          <div className='conjunto'>
            <button><FaTruck /></button>
            <h6>Fretes</h6>
          </div>

          <div className='conjunto'>
            <button><GiWateringCan /></button>
            <h6>Jardineiro(a)</h6>
          </div>

          <div className='conjunto'>
            <button><MdOutlineCarpenter /></button>
            <h6>Marceneiro(a)</h6>
          </div>

          <div className='conjunto'>
            <button><FaTrowelBricks /></button>
            <h6>Pedreiro(a)</h6>
          </div>

          <div className='conjunto'>
            <button><FaPaintRoller /></button>
            <h6>Pintor(a)</h6>
          </div>

          <div className='conjunto'>
            <button><GiGate /></button>
            <h6>Serralheiro(a)</h6>
          </div>

          <div className='conjunto'>
            <button><BsThreeDots /></button>
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
