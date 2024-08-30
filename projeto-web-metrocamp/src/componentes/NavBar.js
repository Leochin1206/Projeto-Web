import "./style.css";
import { FaHome } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaClipboardList } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import logo from "./logo.svg"




export function NavBar(){
    return(
        <div className="NavBar">
            <img src={logo} width="120px" alt="" height="100px"/>
            <h5>Precisou de um serviço? <br/>Pede pra mim</h5>
            <div className="search-box">
                <button id="search-button"><span className="button-fix"><IoSearch /></span></button>
                <input type="search" id="search" placeholder="O que você procura?"/>
            </div>
            <div className="home-icon"><FaHome /></div>
            <div className="clipboard-icon"><FaClipboardList /></div>
            <div className="user-icon"><FaUser /></div>
        </div>
    )
}