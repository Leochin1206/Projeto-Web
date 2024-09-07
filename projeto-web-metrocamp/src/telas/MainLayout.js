import { NavBar } from "../componentes/NavBar/NavBar"
import { Outlet } from "react-router-dom"


/*
Define o comportamento dos componentes renderizados pelas rotas.
Neste caso todo componente vai vir com a NavBar antecedendo.
*/
const MainLayout = () => 
    <div className="RotaDef">
        <NavBar/>
        <Outlet/>
    </div>
export default MainLayout;