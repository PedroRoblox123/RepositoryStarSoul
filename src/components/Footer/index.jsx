import { Link, useLocation } from 'react-router-dom';
import './styles.css'

function Footer () {
    return (
        <footer className="footer">
            <div className="footer__social">
                <div className="footer__social-container">
                    <p className="footer__social-intro">Encontre a StarSoul nas redes sociais!</p>
                    <div className="footer__social-midias">
                        <a href="https://www.facebook.com/" className="footer__social-midia-icon"> <img src="../public/images-shared/icon-facebook.svg" className="footer__social-midia-icon-img--facebook" alt="Facebook" /> </a>
                        <a href="https://www.instagram.com/" className="footer__social-midia-icon"> <img src="../public/images-shared/icon-instagram.svg" className="footer__social-midia-icon-img--instagram" alt="Instagram" /> </a>
                        <a href="https://br.linkedin.com/" className="footer__social-midia-icon"> <img src="../public/images-shared/icon-linkedin.svg" className="footer__social-midia-icon-img--linkedin" alt="LinkedIn" /> </a>
                        <a href="https://twitter.com/" className="footer__social-midia-icon"> <img src="../public/images-shared/icon-x.svg" className="footer__social-midia-icon-img--x" alt="X" /> </a>
                    </div>
                </div>
            </div>

            <div className="footer__box">
                <div className="footer__box-container">
                    <div className="footer__box-content">
                        <img src="../public/starsoul-lettermark-white.svg" className="footer__box-content-img" alt="StarSoul Lettermark" />
                        <a href="https://www.apple.com/br/app-store/" className="footer__box-content-img"><img src="../public/images-shared/download-on-appleStore_versionWhite.svg"  alt="Baixar na AppStore" /></a>
                        <a href="https://play.google.com/store/" className="footer__box-content-img"><img src="../public/images-shared/download-on-googlePlay_versionWhite.svg" alt="Disponível no Google Play" /></a>
                    </div>

                    <div className="footer__box-content">
                        <h1 className="footer__box-content-title">SOBRE NÓS</h1>
                        <div className="footer__box-content-line"></div>
                        <Link className='footer__box-content-link' to="/sobrenos#QuemSomosNos">Quem somos nós?</Link>
                        <Link className='footer__box-content-link' to="/sobrenos#NossaMissaoEVisao">Nossa Missão e Visão</Link>
                        <Link className='footer__box-content-link' to="/faq">FAQ</Link>
                    </div>

                    <div className="footer__box-content">
                        <h1 className="footer__box-content-title">LINKS</h1>
                        <div className="footer__box-content-line"></div>
                        <Link className='footer__box-content-link' to="/">Inicial</Link>
                        <Link className='footer__box-content-link' to="/contato">Contato</Link>
                        <Link className='footer__box-content-link' to="/politicasdeprivacidadeetermosdeuso">Políticas de Privacidade e Termos de Uso</Link>
                        <Link className='footer__box-content-link' to="/loginadmin">Entre como administrador</Link>
                    </div>

                    <div className="footer__box-content">
                        <h1 className="footer__box-content-title">CONTATO</h1>
                        <div className="footer__box-content-line"></div>

                        <div className="footer__box-contact">
                            <img src='../public/images-shared/icon-home.svg' className="footer__box-contact-img" alt="Address" />
                            <p className="footer__box-contact-text">R.Interna Grupo Bandeirante 138 - Jardim Belval | Barueri - São Paulo</p>
                        </div>

                        <div className="footer__box-contact">
                            <img src='../public/images-shared/icon-email.svg' className="footer__box-contact-img" alt="Email" />
                            <p className="footer__box-contact-text">starsoul@empresa.com</p>
                        </div>

                        <div className="footer__box-contact">
                            <img src='../public/images-shared/icon-telephone-fill.svg' className="footer__box-contact-img" alt="Phone" />
                            <p className="footer__box-contact-text">(11) 4002-8922</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer__copyright">
                <div className="footer__copyright-container">  
                    <p className="footer__copyright-container-text">© 2024 StarSoul - Meditações e Guias para conhecimento. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer