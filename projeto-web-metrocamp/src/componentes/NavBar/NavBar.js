import "../NavBar/navbar.css";
import { FaHome, FaBars, FaTimes, FaClipboardList, FaUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../Context/UserContext";

export function NavBar() {

    const navigate = useNavigate();
    const {isLoggedIn} = useUserContext();

    const [menuOpen, setMenuOpen] = useState(false);
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 820);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 820);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="NavBar">
            <Link to="/"><img src={logo} alt="" /></Link>

            {isLargeScreen ? (
                <>
                    <div className="search-box">
                        <button id="search-button"><span className="button-fix"><IoSearch /></span></button>
                        <input type="search" id="search" placeholder="O que você procura?" />
                    </div>
                    <div className="icons">
                        <Link to="/"><div className="home-icon"><FaHome /></div></Link>
                        <Link to={isLoggedIn ? "/ClipBoardRequisitado" : "/Cadastro"}>
                            <div className="clipboard-icon"><FaClipboardList /></div>
                        </Link>
                        <Link to={isLoggedIn ? "/Perfil" : "/Cadastro"}>
                            <div className="user-icon"><FaUser /></div>
                        </Link>
                    </div>
                </>

            ) : (
                <>
                    <div className="search-box">
                        <button id="search-button"><span className="button-fix"><IoSearch /></span></button>
                        <input type="search" id="search" placeholder="O que você procura?" />
                    </div>

                    <div className="menu-btn" onClick={toggleMenu}>
                        {menuOpen ? <FaTimes size={20} color="white" /> : <FaBars size={20} color="white" />}
                    </div>

                    <ul className={`menu ${menuOpen ? 'open' : ''}`}>
                        <h5 className="menu-title">Precisou de um serviço? <br />Pede pra mim</h5>
                        <Link to="/"><li><FaHome className="icon" /> Início</li></Link>                       
                        <Link to={isLoggedIn ? "/ClipBoardRequisitado" : "/Cadastro"}>
                            <li><FaClipboardList className="icon" /> Tarefas</li>
                        </Link>
                        <Link to={isLoggedIn ? "/Perfil" : "/Cadastro"}>
                            <li><FaUser className="icon" /> Perfil</li>
                        </Link>
                    </ul>
                </>
            )
            }
        </div>
    );
}