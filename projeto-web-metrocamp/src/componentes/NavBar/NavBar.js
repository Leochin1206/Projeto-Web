import "../NavBar/navbar.css";
import { FaHome, FaBars, FaTimes, FaClipboardList, FaUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export function NavBar() {
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
            <img src={logo} alt="" />

            {isLargeScreen ? (
                <>
                    <div className="search-box">
                        <button id="search-button"><span className="button-fix"><IoSearch /></span></button>
                        <input type="search" id="search" placeholder="O que você procura?" />
                    </div>
                    <div className="icons">
                        <Link to="/"><div className="home-icon"><FaHome /></div></Link>
                        <Link to="/Clipboard"><div className="clipboard-icon"><FaClipboardList /></div></Link>
                        <Link to="/Perfil"><div className="user-icon"><FaUser /></div></Link>
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
                        <Link to="/Clipboard"><li><FaClipboardList className="icon" /> Tarefas</li></Link>
                        <Link to="/Perfil"><li><FaUser className="icon" /> Perfil</li></Link>
                    </ul>
                </>
            )
            }
        </div>
    );
}