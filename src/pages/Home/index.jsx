import { Link, useLocation } from 'react-router-dom';
import Container from '../../shared/Container'
import Content from '../../shared/Content'
import Button from '../../components/Button';
import './styles.css'

function Home() {
    return (
        <main className='home'>
            <Container className='home__hero'>
                <Content className='home__hero-content'>
                    <div className='home__hero-content-cta'>
                        <h1 className="home__hero-content-cta-title">Baixe agora o aplicativo StarSoul</h1>
                        <p className="home__hero-content-cta-subtitle">
                            Baixe agora o nosso app e tenha acesso a uma galáxia de conteúdos 
                            exclusivos, vídeos, exercícios, músicas para meditação e muito mais!
                            Não perca tempo, junte-se a nós e comece sua jornada estelar hoje mesmo!
                        </p>
                        <div className="home__hero-content-cta-download">
                            <a href="https://www.apple.com/br/app-store/" className='home__hero-content-cta-download-link'><img src="../public/images-shared/download-on-appleStore_versionWhite.svg" className='home__hero-content-cta-download-link--img' alt="Baixar na AppStore" /></a>
                            <a href="https://play.google.com/store/" className='home__hero-content-cta-download-link'><img src="../public/images-shared/download-on-googlePlay_versionWhite.svg" className='home__hero-content-cta-download-link--img' alt="Disponível no Google Play" /></a>
                        </div>
                    </div>
                    <div className='home__hero-content-cta-image'>
                        <img src="../public/images-home/screens-of-application1.svg" className='home__hero-content-cta-image--img' alt="Telas do aplicativo" />
                    </div>
                </Content>
            </Container>

            <Container className='home__about-us'>
                <Content className='home__about-us-content'>
                    <div className='home__about-us-content-image'><img src="../public/images-shared/flower-image.png" className='home__about-us-content-image--img' alt="Imagem de flor" /></div>
                    
                    <div className='home__about-us-content-box'>
                        <h3 className="home__about-us-content-box-intro">Sobre nós</h3>
                        <h1 className='home__about-us-content-box-title'>Quem Somos Nós</h1>
                        <p className='home__about-us-content-box-description'>
                            StarSoul é um projeto inovador focado em promover a saúde mental e o bem-estar.
                            Nossa missão é oferecer ferramentas que ajudem na busca por equilíbrio emocional,
                            proporcionando uma vida mais saudável e feliz. Desenvolvido por estudantes
                            apaixonados por tecnologia e saúde mental, entendemos os desafios emocionais
                            que os estudantes enfrentam e estamos aqui para oferecer apoio.
                        </p>
                        <Button to='/sobrenos'>Veja mais</Button>
                    </div>
                </Content>
            </Container>

            <Container className='home__features'>
                <Content className='home__features-content'>
                    <div className='home__features-content-title'>
                        <p className='home__features-content-title--intro'>Serviços</p>
                        <h1 className='home__features-content-title--main'>Nossos Serviços Exclusivos</h1>
                        <p className='home__features-content-title--description'>
                            Oferecemos uma ampla gama de serviços para ajudar você a alcançar um estado
                            de bem-estar completo, incluindo meditações guiadas, exercícios de mindfulness,
                            e recursos para conectar-se com a natureza.
                        </p>
                    </div>

                    <div className='home__features-content-box'>
                        <img src="../public/imgs/Mask Group.png" className='home__features-content-box--image' alt="Meditações Guiadas"/>
                        <h1 className='home__features-content-box--title'>Meditações Guiadas</h1>
                        <p className='home__features-content-box--description'>
                            Encontre paz e equilíbrio com nossas meditações guiadas, projetadas para
                            aliviar o estresse e aumentar a concentração.
                        </p>
                    </div>

                    <div className="home__features-content-box">
                        <img src="../public/imgs/Mask Group-1.png" className='home__features-content-box--image' alt="Exercícios de Mindfulness"/>
                        <h1 className='home__features-content-box--title'>Exercícios de Mindfulness</h1>
                        <p className='home__features-content-box--description'>
                            Pratique mindfulness diariamente com nossos exercícios personalizados que
                            ajudam a melhorar a atenção plena e o bem-estar emocional.
                        </p>
                    </div>

                    <div className="home__features-content-box">
                        <img src="../public/imgs/Mask Group-2.png" className='home__features-content-box--image' alt="Conexão com a Natureza"/>
                        <h1 className='home__features-content-box--title'>Conexão com a Natureza</h1>
                        <p className='home__features-content-box--description'>
                            Descubra como atividades ao ar livre podem melhorar sua saúde mental e
                            bem-estar, promovendo uma conexão mais profunda com a natureza.
                        </p>
                    </div>

                    <div className="home__features-content-box">
                        <img src="../public/imgs/Mask Group-3.png" className='home__features-content-box--image' alt="Músicas para Meditação"/>
                        <h1 className='home__features-content-box--title'>Músicas para Meditação</h1>
                        <p className='home__features-content-box--description'>
                            Relaxe e medite com nossa seleção de músicas especialmente criadas para
                            proporcionar um ambiente de tranquilidade e introspecção.
                        </p>
                    </div>
                </Content>
            </Container>

            <Container className='home__info'>
                <Content className='home__info-content'>
                    <div className="home__info-content-area" id='i-children1'>
                        <img src="../public/images-home/info--container1.svg" className='home__info-content-area-img' alt="Imagem de telefone"/>
                        <div className='home__info-content-area-box'>
                            <h1 className='home__info-content-area-box-title'>Nossas Ferramentas</h1>
                            <p className='home__info-content-area-box-description'>
                                Oferecemos uma variedade de ferramentas para apoiar seu bem-estar mental,
                                incluindo diários de gratidão, rastreadores de humor e muito mais. Cada ferramenta
                                é projetada para ajudá-lo a cultivar hábitos saudáveis e um estilo de vida equilibrado.
                            </p>
                        </div>
                    </div>
                </Content>
            </Container>
                
            <Container className='home__info'>
                <Content className='home__info-content'>
                    <div className="home__info-content-area" id='i-children2'>
                        <img src="../public/images-home/info--container2.svg" className='home__info-content-area-img' alt="Imagem de telefone"/>
                        <div className='home__info-content-area-box'>
                            <h1 className='home__info-content-area-box-title'>Nosso Compromisso</h1>
                            <p className='home__info-content-area-box-description'>
                                Estamos comprometidos em fornecer o melhor suporte para sua jornada de bem-estar.
                                Nossos recursos são constantemente atualizados e aprimorados para garantir que você tenha
                                acesso às práticas mais eficazes e atualizadas.
                            </p>
                        </div>
                    </div>
                </Content>
            </Container>
        </main>
    )
}

export default Home
