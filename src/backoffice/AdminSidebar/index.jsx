import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles.css'; // Importa o CSS para estilização

const AdminSidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(null);
    const [activeItem, setActiveItem] = useState(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleDropdown = (index) => {
        setDropdownOpen(prev => prev === index ? null : index);
    };

    const handleClick = (index) => {
        setActiveItem(index);
    };

    return (
        <section className='adminbar'>
            <header className='adminbar__header'>
                <div className='adminbar__header-content'>
                    <label htmlFor="menu-toggle-adm" className={`menu-label-adm ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>

                    <img src="../src/assets/icons/starsoul-lettermark.svg" className='admin__header-img' alt="" />

                </div>
            </header>

            <nav className={`adminbar__nav ${isOpen ? 'open' : 'closed'}`} id='adminbar-navbar'>
                <div className='adminbar__nav-container'>
                    <img src="../src/assets/icons/starsoul-lettermark.svg" className='adminbar__nav-img' alt="" />
                    <ul className='adminbar__nav-list'>
                    <li className='adminbar__nav-item'> <Link to='/admin/dashboard' className='adminbar__nav-link'> <img src="../src/assets/images/admin/icon-dashboard.svg" alt="Dashboard" /> Dashboard </Link> </li>
                    <li className='adminbar__nav-item'> <Link to='/admin/management' className='adminbar__nav-link'> <img src="../src/assets/images/admin/icon-people.svg" alt="Gerenciamento de Usuários" /> Gerenciamento de Usuários </Link> </li>
                    <li className='adminbar__nav-item'> <Link to='/admin/management/content' className='adminbar__nav-link'> <img src="../src/assets/images/admin/icon-folder-open.svg" alt="Genrenciamento de Conteúdos" /> Gerenciamento de Conteúdos </Link> </li>

                                        
                        <div className="line3"></div>

                        <li className='adminbar__nav-item'><a href="" className='adminbar__nav-link'><img src="../src/assets/images/admin/icon-media-link.svg" alt="dropdown image" />Mídia</a></li>
                        
                        <li className='adminbar__nav-item adminbar__nav-item--has-dropdown'>
                            <a href="#" className='adminbar__nav-link' onClick={() => toggleDropdown(1)}><img src="../src/assets/images/admin/icon-reports.svg" alt="dropdown image" /> Análise e Relatórios <img src="../src/assets/images/public/setadown-black.svg" className={`dropdown-open--img ${dropdownOpen === 1 ? 'open' : ''}`} alt="dropdown image" /></a>
                            <ul className={`adminbar__nav-dropdown ${dropdownOpen === 1 ? 'open' : ''}`}>
                                <li className='adminbar__nav-dropdown-item'><a href="" className='adminbar__nav-dropdown-link'>Relatórios de Visitas</a></li>
                                <li className='adminbar__nav-dropdown-item'><a href="" className='adminbar__nav-dropdown-link'>Relatórios de Conteúdo</a></li>
                                <li className='adminbar__nav-dropdown-item'><a href="" className='adminbar__nav-dropdown-link'>Estatísticas de Usuários</a></li>
                            </ul>
                        </li>

                        <div className="line3"></div>

                        <li className='adminbar__nav-item'><a href="" className='adminbar__nav-link'><img src="../src/assets/images/admin/icon-cloud.svg" alt="dropdown image" />Configurações de Sistema</a></li>

                        <li className='adminbar__nav-item adminbar__nav-item--has-dropdown'>
                            <a href="#" className='adminbar__nav-link' onClick={() => toggleDropdown(2)}><img src="../src/assets/images/admin/icon-tasks.svg" alt="dropdown image" />Gerenciamento de Tarefas e Notificações <img src="../src/assets/images/public/setadown-black.svg" className={`dropdown-open--img ${dropdownOpen === 2 ? 'open' : ''}`} alt="dropdown image" /> </a>
                            <ul className={`adminbar__nav-dropdown ${dropdownOpen === 2 ? 'open' : ''}`}>
                                <li className='adminbar__nav-dropdown-item'><a href="" className='adminbar__nav-dropdown-link'>Tarefas Pendentes</a></li>
                                <li className='adminbar__nav-dropdown-item'><a href="" className='adminbar__nav-dropdown-link'>Notificações Recentes</a></li>
                            </ul>
                        </li>
                        
                        <li className='adminbar__nav-item'><a href="" className='adminbar__nav-link'><img src="../src/assets/images/admin/icon-support.svg" alt="dropdown image" />Suporte e Ajuda</a></li>

                        <div className="line3"></div>

                        <li className='adminbar__nav-item'> <Link to='/' className='adminbar__nav-link'> <img src="../src/assets/images/admin/icon-back.svg" alt="Voltar" /> Voltar para o StarSoul </Link> </li>
                    </ul>
                </div>
            </nav>
        </section>
    );
};

export default AdminSidebar;
