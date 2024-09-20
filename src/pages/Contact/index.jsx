import Banner from '../../components/Banner'
import Container from '../../shared/Container'
import Content from '../../shared/Content'
import Button from '../../components/Button';
import './styles.css'


function Contact() {
    return (
        <main className='contact'>
            <Banner>Entre em contato pelos nossos meios de comunicação!</Banner>

            <Container className='contact__section-area'>
                <Content className='contact__section-area-content'>
                    <div className='contact__section-area-content-intro'>
                        <h1 className='contact__section-area-content-intro--title'>Mantenha contato</h1>
                        <h2 className='contact__section-area-content-intro--subtitle'>Estamos aqui para ajudá-lo com qualquer dúvida ou preocupação.</h2>
                        <p className='contact__section-area-content-intro--text'>Nossa equipe se dedica a fornecer o melhor suporte possível. Quer você tenha alguma dúvida sobre nossos serviços, precise de ajuda com um problema ou apenas queira dar feedback, estamos sempre prontos para ouvir e ajudar. Sinta-se à vontade para entrar em contato conosco e responderemos o mais rápido possível.</p>
                    </div>

                    <div className='contact__section-area-content-contactus'>
                        <h1 className='contact__section-area-content-contactus-title'>Entre em contato</h1>
                        <form action="" className='contact__section-area-content-contactus-form'>
                            <input type="text" className='contact__section-area-content-contactus-form--input' placeholder='Nome' />
                            <input type="text" className='contact__section-area-content-contactus-form--input' placeholder='Endereço de Email' />
                            <textarea name="" className='contact__section-area-content-contactus-form--textarea' id="" placeholder='Digite sua mensagem'></textarea>
                            <Button type='submit'>Enviar</Button>
                        </form>
                        <div className='contact__section-area-content-contactus-iconsapp'>
                        <a href="https://www.facebook.com/" className="iconsapp__link"> <img src="../public/images-contact/icon-facebook.svg" className="contact__section-area-content-contactus-icon-img" alt="Facebook" /> </a>
                        <a href="https://www.instagram.com/" className="iconsapp__link"> <img src="../public/images-contact/icon-instagram.svg" className="iconsapp__link-img" alt="Instagram" /> </a>
                        <a href="https://br.linkedin.com/" className="iconsapp__link"> <img src="../public/images-contact/icon-linkedin.svg" className="iconsapp__link-img" alt="LinkedIn" /> </a>
                        <a href="https://twitter.com/" className="iconsapp__link"> <img src="../public/images-contact/icon-x.svg" className="iconsapp__link-img" alt="X" /> </a>
                        </div>
                    </div>
                </Content>
            </Container>

            <Container className='contact__section-location'>
                <Content className='contact__section-location-content'>
                    <h1 className='contact__section-location-h1'>Localização Global</h1>
                    <div className="contact__section-location-area">
                        <div className='contact__section-location-area-box'>
                            <h1 className='contact__section-location-area-box-title'>Brazil, São Paulo</h1>

                            <div className='contact__section-location-area-box-locates'>
                                <img src='../public/images-shared/icon-home.svg' className="contact__section-location-area-box-locates--img" alt="Address" />
                                <p className="contact__section-location-area-box-locates--text">R.Interna Grupo Bandeirante 138 - Jardim Belval | Barueri - São Paulo</p>
                            </div>

                            <div className='contact__section-location-area-box-locates'>
                                <img src='../public/images-shared/icon-telephone-fill.svg' className="contact__section-location-area-box-locates--img" alt="Phone" />
                                <p className="contact__section-location-area-box-locates--text">(11) 4002-8922</p>
                            </div>
                        </div>

                        <div className='contact__section-location-area-box'>
                            <h1 className='contact__section-location-area-box-title'>Brazil, Rio de Janeiro</h1>
                            
                            <div className='contact__section-location-area-box-locates'>
                                <img src='../public/images-shared/icon-home.svg' className="contact__section-location-area-box-locates--img" alt="Address" />
                                <p className="contact__section-location-area-box-locates--text">Av. Atlântica 2000 - Copacabana | Rio de Janeiro - RJ</p>
                            </div>

                            <div className='contact__section-location-area-box-locates'>
                                <img src='../public/images-shared/icon-telephone-fill.svg' className="contact__section-location-area-box-locates--img" alt="Phone" />
                                <p className="contact__section-location-area-box-locates--text">(21) 4002-5678</p>
                            </div>
                        </div>

                        <div className='contact__section-location-area-box'>
                            <h1 className='contact__section-location-area-box-title'>Brazil, Belo Horizonte</h1>
                                
                            <div className='contact__section-location-area-box-locates'>
                                <img src='../public/images-shared/icon-home.svg' className="contact__section-location-area-box-locates--img" alt="Address" />
                                <p className="contact__section-location-area-box-locates--text">Praça Sete de Setembro 100 - Centro | Belo Horizonte - MG</p>
                            </div>

                            <div className='contact__section-location-area-box-locates'>
                                <img src='../public/images-shared/icon-telephone-fill.svg' className="contact__section-location-area-box-locates--img" alt="Phone" />
                                <p className="contact__section-location-area-box-locates--text">(31) 3003-4567</p>
                            </div>
                        </div>
                    </div>
                </Content>
            </Container>

            <Container className='contact__map'>
                <Content className='contact__map-content'>
                    <iframe className='contact__map-content--iframe' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.560411723541!2d-46.89235592571575!3d-23.512337959790994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf03e63bc7a06d%3A0xc14462a7d6d04032!2sITB%20Bras%C3%ADlio%20Flores%20de%20Azevedo%20(FIEB)!5e0!3m2!1spt-BR!2sbr!4v1721347004819!5m2!1spt-BR!2sbr" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </Content>
            </Container>

        </main>
    )
}

export default Contact