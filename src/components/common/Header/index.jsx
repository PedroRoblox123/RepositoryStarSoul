import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles.css';

const Header = () => {
    const [isSearchBoxVisible, setIsSearchBoxVisible] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openSubMenus, setOpenSubMenus] = useState({});
    const navbarRef = useRef(null);
    const menuToggleRef = useRef(null);
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleResearcherClick = () => {
        setIsSearchBoxVisible(true);
    };

    const handleBackClick = () => {
        setIsSearchBoxVisible(false);
    };

    const handleToggleMenu = () => {
        setIsMobileMenuOpen(prev => {
            const isOpen = !prev;
            if (!isOpen) {
                setOpenSubMenus({}); // Fecha todos os submenus quando o menu principal é fechado
            }
            return isOpen;
        });
    };

    const handleDropdownClick = (event) => {
        event.stopPropagation();
        const dropdownId = event.currentTarget.id; // Identifica o dropdown clicado
        setOpenSubMenus(prev => ({
            ...prev,
            [dropdownId]: !prev[dropdownId] // Alterna o estado do submenu clicado
        }));
    };

    const closeDropdowns = () => {
        setOpenSubMenus({}); // Fecha todos os submenus
    };

    const handleClickOutside = (event) => {
        if (
            navbarRef.current &&
            !navbarRef.current.contains(event.target) &&
            !menuToggleRef.current.contains(event.target) &&
            !document.getElementById('menu-toggle').contains(event.target)
        ) {
            setIsMobileMenuOpen(false);
            closeDropdowns(); // Fecha todos os submenus quando clicar fora
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    // Fecha o menu e os submenus quando a rota mudar
    useEffect(() => {
        setIsMobileMenuOpen(false);
        closeDropdowns();
    }, [location]);

    const headerClasses = () => {
        let classes = 'header';
        if (isSearchBoxVisible) classes += ' hidden';
        return classes;
      };

      const headerDivClasses = () => {
        let classes = 'divheader';
        if (scrolled) classes += ' header--scrolled';
        return classes;
      };

    return (
        <>
            <div className={headerDivClasses()}>
                <header className={headerClasses()}>
                    <input
                        type="checkbox"
                        id="menu-toggle"
                        className="menu-toggle-checkbox"
                        checked={isMobileMenuOpen}
                        onChange={handleToggleMenu}
                        style={{ display: 'none' }} // Esconde o checkbox visualmente
                    />
                    <label htmlFor="menu-toggle" className="menu-hamburguer" ref={menuToggleRef}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>

                    <Link to="/" className="image">
                        <img src="./src/assets/icons/starsoul-lettermark-white.svg" alt="StarSoul" />
                    </Link>

                    <nav
                        className={`navbar ${isMobileMenuOpen ? 'open' : ''}`}
                        ref={navbarRef}
                    >
                        <ul>
                            <li>
                                <Link to="/">Inicial</Link>
                            </li>
                            {/* <li
                                id="meditations-dropdown"
                                className={`dropdown ${openSubMenus['meditations-dropdown'] ? 'open' : ''}`}
                                onClick={handleDropdownClick}
                            >
                                Meditações <img src="../public/setadown-white.svg" alt="dropdown image" />
                                <ul className="list">
                                    <li><a href="#">Matinal</a></li>
                                    <li><a href="#">Para dormir</a></li>
                                    <li><a href="#">Formas de relaxar</a></li>
                                    <li><a href="#">Para ansiedade</a></li>
                                    <li><a href="#">Meditações Guiadas</a></li>
                                </ul>
                            </li>
                            <li
                                id="guides-dropdown"
                                className={`dropdown ${openSubMenus['guides-dropdown'] ? 'open' : ''}`}
                                onClick={handleDropdownClick}
                            >
                                Guias <img src="../public/setadown-white.svg" alt="dropdown image" />
                                <ul className="list-guias">
                                    <li
                                        id="introduction-dropdown"
                                        className={`sub-dropdown ${openSubMenus['introduction-dropdown'] ? 'open' : ''}`}
                                        onClick={handleDropdownClick}
                                    >
                                        Introdução à Meditação <img src="../public/setadown-white.svg" />
                                        <ul className="sub-list">
                                            <li><a href="#">O que é Meditação?</a></li>
                                            <li><a href="#">Benefícios da Meditação</a></li>
                                            <li><a href="#">Mitos e Realidades sobre a Meditação</a></li>
                                        </ul>
                                    </li>
                                    <li
                                        id="types-dropdown"
                                        className={`sub-dropdown ${openSubMenus['types-dropdown'] ? 'open' : ''}`}
                                        onClick={handleDropdownClick}
                                    >
                                        Tipos de Meditação <img src="../public/setadown-white.svg" alt="dropdown image" />
                                        <ul className="sub-list">
                                            <li><a href="#">Mindfulness (Atenção Plena)</a></li>
                                            <li><a href="#">Transcendental</a></li>
                                            <li><a href="#">Guiada</a></li>
                                            <li><a href="#">Zen (Zazen)</a></li>
                                            <li><a href="#">Vipassana</a></li>
                                        </ul>
                                    </li>
                                    <li
                                        id="techniques-dropdown"
                                        className={`sub-dropdown ${openSubMenus['techniques-dropdown'] ? 'open' : ''}`}
                                        onClick={handleDropdownClick}
                                    >
                                        Técnicas e Práticas <img src="../public/setadown-white.svg" alt="dropdown image" />
                                        <ul className="sub-list">
                                            <li><a href="#">Técnicas Básicas</a></li>
                                            <li><a href="#">Respiração e Foco</a></li>
                                            <li><a href="#">Meditação com Mantras</a></li>
                                        </ul>
                                    </li>
                                    <li
                                        id="health-dropdown"
                                        className={`sub-dropdown ${openSubMenus['health-dropdown'] ? 'open' : ''}`}
                                        onClick={handleDropdownClick}
                                    >
                                        Meditação e Saúde <img src="../public/setadown-white.svg" alt="dropdown image" />
                                        <ul className="sub-list">
                                            <li><a href="#">Benefícios para a Saúde Mental</a></li>
                                            <li><a href="#">Benefícios para a Saúde Física</a></li>
                                            <li><a href="#">Redução do Estresse</a></li>
                                            <li><a href="#">Ansiedade e Depressão</a></li>
                                        </ul>
                                    </li>
                                    <li
                                        id="daily-dropdown"
                                        className={`sub-dropdown ${openSubMenus['daily-dropdown'] ? 'open' : ''}`}
                                        onClick={handleDropdownClick}
                                    >
                                        Meditação no Cotidiano <img src="../public/setadown-white.svg" alt="dropdown image" />
                                        <ul className="sub-list">
                                            <li><a href="#">Como Integrar a Meditação no Dia a Dia</a></li>
                                            <li><a href="#">Meditação no Trabalho</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li> */}

                            <li><Link to='/sobrenos'>Sobre nós</Link></li>
                            <li><Link to="/contato">Contato</Link></li>

                            <li id="aboutthecompany-dropdown" className={`dropdown ${openSubMenus['aboutthecompany-dropdown'] ? 'open' : ''}`} onClick={handleDropdownClick} >
                                Sobre a Empresa <img src="./src/assets/images/public/setadown-white.svg" alt="dropdown image" />
                                <ul className="list">
                                    {/* <li><Link to='/sobrenos'>Sobre nós</Link></li> */}
                                    <li><Link to='/faq'>FAQ - StarSoul</Link></li>
                                    <li><Link to='/politicasdeprivacidadeetermosdeuso'>Políticas de Privacidade e Termos de Uso</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>

                    {/* <form method="post" action="#" autoComplete="off" className="search-box-pcversion">
                        <input type="text" className="search-box-input-pcversion" name="busca" placeholder="Pesquise" />
                        <button className="search-box-button-pcversion">
                            <img src="./src/assets/images/public/lupa.svg" alt="Lupa" />
                        </button>
                    </form> */}

                    <div className="header__social-midias">
                        <a href="https://www.facebook.com/" className="header__social-midia-icon"> <img src="./src/assets/images/public/icon-facebook.svg" className="header__social-midia-icon-img--facebook" alt="Facebook" /> </a>
                        <a href="https://www.instagram.com/" className="header__social-midia-icon"> <img src="./src/assets/images/public/icon-instagram.svg" className="header__social-midia-icon-img--instagram" alt="Instagram" /> </a>
                        <a href="https://br.linkedin.com/" className="header__social-midia-icon"> <img src="./src/assets/images/public/icon-linkedin.svg" className="header__social-midia-icon-img--linkedin" alt="LinkedIn" /> </a>
                        <a href="https://twitter.com/" className="header__social-midia-icon"> <img src="./src/assets/images/public/icon-x.svg" className="header__social-midia-icon-img--x" alt="X" /> </a>
                    </div>

                    {/* <div className="researcher" onClick={handleResearcherClick}>
                        <img src="./src/assets/images/public/lupa.svg" alt="Lupa" />
                    </div> */}

                    <div className="midialogo">
                        <img src="./src/assets/icons/starsoul-lettermark.svg" alt="StarSoul" />
                    </div>
                </header>

                {/* {isSearchBoxVisible && (
                    <div className="search-box-container">
                        <div className="white-arrow" onClick={handleBackClick}>
                            <img src="./src/assets/images/public/setadown-white.svg" alt="back" />
                        </div>
                        <form method="post" action="#" className="search-box">
                            <input type="text" className="search-box-input" name="busca" placeholder="Pesquise" />
                            <button className="search-box-button">
                                <img src="./src/assets/images/public/lupa.svg" alt="Lupa" />
                            </button>
                        </form>
                    </div>
                )} */}
            </div>
        </>
    );
};

export default Header;
