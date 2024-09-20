import { Link, useLocation } from 'react-router-dom';
import Container from '../../components/common/Container'
import Content from '../../components/common/Content'
import Button from '../../components/common/Button';
import './styles.css'

function Home() {
    return (
        <main className='home'>
            <Container className='home__hero'>
                <Content className='home__hero-content'>
                    <div className='home__hero-content-cta'>
                        <h1 className="home__hero-content-cta-title">Baixe o app StarSoul agora mesmo</h1>
                        <p className="home__hero-content-cta-subtitle">
                        "A StarSoul é mais do que apenas um aplicativo – é a chave para uma nova jornada de autocuidado e bem-estar. Ao baixar nosso app, você terá acesso a um universo completo de conteúdos exclusivos, cuidadosamente selecionados para ajudar a promover equilíbrio emocional e paz interior. Descubra vídeos relaxantes, exercícios guiados de meditação, músicas tranquilizantes e muito mais! Não perca a oportunidade de se conectar consigo mesmo de uma maneira profunda e significativa. Junte-se a nós e inicie sua jornada estelar rumo a uma vida mais saudável e equilibrada, agora mesmo!"
                        </p>
                        <div className="home__hero-content-cta-download">
                            <a href="https://www.apple.com/br/app-store/" className='home__hero-content-cta-download-link'><img src="./src/assets/images/public/download-on-appleStore_versionWhite.svg" className='home__hero-content-cta-download-link--img' alt="Baixar na AppStore" /></a>
                            <a href="https://play.google.com/store/" className='home__hero-content-cta-download-link'><img src="./src/assets/images/public/download-on-googlePlay_versionWhite.svg" className='home__hero-content-cta-download-link--img' alt="Disponível no Google Play" /></a>
                        </div>
                    </div>
                    <div className='home__hero-content-cta-image'>
                        <img src="./src/assets/images/user/images-home/screens-of-application.svg" className='home__hero-content-cta-image--img' alt="Telas do aplicativo" />
                    </div>
                </Content>
            </Container>

            <Container className='home__about-us'>
                <Content className='home__about-us-content'>
                    <div className='home__about-us-content-image'><img src="./src/assets/images/user/images-home/flower.png" className='home__about-us-content-image--img' alt="Imagem de flor" /></div>
                    
                    <div className='home__about-us-content-box'>
                        <h3 className="home__about-us-content-box-intro">Sobre nós</h3>
                        <h1 className='home__about-us-content-box-title'>Quem Somos</h1>
                        <p className='home__about-us-content-box-description'>
                            A StarSoul é um projeto inovador que promove saúde mental e bem-estar. 
                            Nossa missão é fornecer ferramentas para o equilíbrio emocional, ajudando 
                            você a viver uma vida mais saudável e plena. Criado por estudantes apaixonados 
                            por tecnologia e saúde mental, compreendemos os desafios emocionais do dia a dia 
                            e estamos aqui para oferecer suporte contínuo.
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
                            Oferecemos uma variedade de serviços para promover seu bem-estar. Desde meditações 
                            guiadas a exercícios de mindfulness, nossa plataforma está aqui para ajudar você a 
                            encontrar harmonia interior.
                        </p>
                    </div>

                    <div className='home__features-content-box'>
                        <img src="./src/assets/images/user/images-home/Mask Group.png" className='home__features-content-box--image' alt="Meditações Guiadas"/>
                        <h1 className='home__features-content-box--title'>Meditações Guiadas</h1>
                        <p className='home__features-content-box--description'>
                            Alcance tranquilidade e foco com nossas meditações guiadas, projetadas para reduzir 
                            o estresse e melhorar sua concentração.
                        </p>
                    </div>

                    <div className="home__features-content-box">
                        <img src="./src/assets/images/user/images-home/Mask Group-1.png" className='home__features-content-box--image' alt="Exercícios de Mindfulness"/>
                        <h1 className='home__features-content-box--title'>Exercícios de Mindfulness</h1>
                        <p className='home__features-content-box--description'>
                            Pratique mindfulness diariamente com exercícios personalizados, projetados para aumentar 
                            a atenção plena e promover equilíbrio emocional.
                        </p>
                    </div>

                    <div className="home__features-content-box">
                        <img src="./src/assets/images/user/images-home/Mask Group-2.png" className='home__features-content-box--image' alt="Conexão com a Natureza"/>
                        <h1 className='home__features-content-box--title'>Conexão com a Natureza</h1>
                        <p className='home__features-content-box--description'>
                            Descubra como atividades ao ar livre podem restaurar sua saúde mental, fortalecendo sua 
                            conexão com a natureza.
                        </p>
                    </div>

                    <div className="home__features-content-box">
                        <img src="./src/assets/images/user/images-home/Mask Group-3.png" className='home__features-content-box--image' alt="Músicas para Meditação"/>
                        <h1 className='home__features-content-box--title'>Músicas para Meditação</h1>
                        <p className='home__features-content-box--description'>
                            Desfrute de uma seleção especial de músicas relaxantes, feitas para criar um ambiente de 
                            paz e introspecção durante suas meditações.
                        </p>
                    </div>
                </Content>
            </Container>

            <Container className='home__info'>
                <Content className='home__info-content'>
                    <div className="home__info-content-area" id='i-children1'>
                        <img src="./src/assets/images/user/images-home/info--container1.svg" className='home__info-content-area-img' alt="Imagem de telefone"/>
                        <div className='home__info-content-area-box'>
                            <h1 className='home__info-content-area-box-title'>Nossas Ferramentas</h1>
                            <p className='home__info-content-area-box-description'>
                                Na StarSoul, acreditamos que o bem-estar é uma jornada contínua, e por isso oferecemos uma variedade de ferramentas projetadas para apoiar você em cada etapa dessa jornada. Nossos diários de gratidão ajudam a cultivar uma mentalidade positiva, permitindo que você reflita sobre os aspectos positivos do seu dia. Além disso, nossos rastreadores de humor oferecem uma visão clara de como suas emoções evoluem ao longo do tempo, ajudando você a identificar padrões e melhorar seu bem-estar emocional. Cada ferramenta foi criada com o objetivo de ajudá-lo a desenvolver hábitos saudáveis e manter um estilo de vida equilibrado e positivo.
                            </p>
                        </div>
                    </div>
                </Content>
            </Container>
                
            <Container className='home__info'>
                <Content className='home__info-content'>
                    <div className="home__info-content-area" id='i-children2'>
                        <img src="./src/assets/images/user/images-home/info--container2.svg" className='home__info-content-area-img' alt="Imagem de telefone"/>
                        <div className='home__info-content-area-box'>
                            <h1 className='home__info-content-area-box-title'>Nosso Compromisso</h1>
                            <p className='home__info-content-area-box-description'>
                                Estamos profundamente comprometidos em fornecer a você os melhores recursos para sua jornada de autocuidado e bem-estar mental. No StarSoul, nossa equipe trabalha constantemente para garantir que os conteúdos e práticas oferecidos sejam eficazes, atualizados e relevantes. Continuamente aprimoramos nossos serviços e introduzimos novas ferramentas, sempre com o objetivo de proporcionar a você a experiência mais completa e transformadora possível. Nosso compromisso é estar ao seu lado em cada passo, oferecendo o suporte necessário para que você possa viver uma vida mais equilibrada, saudável e plena.
                            </p>
                        </div>
                    </div>
                </Content>
            </Container>
        </main>
    )
}

export default Home
