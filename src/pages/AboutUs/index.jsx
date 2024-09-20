import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Container from '../../components/common/Container'
import Content from '../../components/common/Content'
import Banner from '../../components/common/Banner';
import './styles.css'

function AboutUs() {

    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                const headerOffset = 170; // Altura do cabeçalho fixo
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition - headerOffset;
                window.scrollTo({
                    top: offsetPosition + window.pageYOffset,
                    behavior: 'smooth'
                });
            }
        }
    }, [location]);

    return (
        <main className='about-us'>
            <Banner>Sobre nós</Banner>
            <Container className='about-us__container-whoweare'>
                <Content className='about-us__container-whoweare-content'>
                    <div className='about-us__container-whoweare-content-image'>
                        <img src="./src/assets/images/user/images-aboutus/about--about-us.svg" className='about-us__container-whoweare-content-image--img'/>
                    </div>

                    <div className='about-us__container-whoweare-content-box' id='QuemSomosNos'>
                        <h1 className='about-us__container-whoweare-content-box--title'>Quem Somos Nós?</h1>
                        <p className='about-us__container-whoweare-content-box--text'>
                            StarSoul é um projeto inovador desenvolvido por estudantes dedicados a promover a saúde mental e o bem-estar. Nossa missão é oferecer ferramentas eficazes que auxiliem indivíduos a alcançarem equilíbrio emocional e a desfrutarem de uma vida mais saudável e feliz.
                            <br/><br/>
                            Fundada no contexto acadêmico, nossa equipe é composta por colegas de classe que compartilham a paixão por tecnologia e saúde mental. Desenvolvemos StarSoul com um foco especial nas necessidades psicológicas dos estudantes, reconhecendo os desafios emocionais e mentais que eles enfrentam. 
                            <br/><br/>
                            Entendemos a importância de integrar a natureza no processo de cura e bem-estar. StarSoul oferece recursos que incentivam atividades ao ar livre, ajudando nossos usuários a se conectarem com o ambiente natural, o que contribui para o bem-estar geral. Com práticas de mindfulness, meditação e exercícios de relaxamento, estamos aqui para apoiar você a viver uma vida mais equilibrada e consciente.
                            <br/><br/>
                            Junte-se a nós na StarSoul e inicie sua jornada de autodescoberta e bem-estar. Estamos aqui para apoiar você em cada passo do caminho, oferecendo recursos que transformam sua vida e ajudam a alcançar um estado de equilíbrio e paz interior.
                        </p>
                    </div>
                </Content>
            </Container>

            <Container className='about-us__container-info'>
                <Content className='about-us__container-info-content'>
                    <div className='about-us__container-info-content-box'>
                        <h1 className='about-us__container-info-content-box--title' id='NossaMissaoEVisao'>Nossa Missão e Visão</h1>
                        <p className='about-us__container-info-content-box--description'>A StarSoul é impulsionada pela missão de promover a saúde mental e o bem-estar de indivíduos ao redor do mundo. Nossa visão é criar um espaço onde todos possam encontrar apoio emocional e mental, independentemente de onde estejam. Acreditamos que o bem-estar mental é essencial para uma vida equilibrada e feliz, e nos esforçamos para fornecer as ferramentas necessárias para que cada pessoa possa alcançar esse objetivo.</p>
                        <p className='about-us__container-info-content-box--description'>Nosso compromisso é com a excelência e a inovação, oferecendo práticas baseadas em evidências e tecnologias de ponta. Estamos constantemente aprimorando nossos serviços para garantir que você tenha acesso às melhores técnicas de mindfulness, meditação e gerenciamento de estresse, ajudando-o a viver uma vida mais plena e consciente.</p>
                    </div>

                    <div className='about-us__container-info-content-box'>
                        <h1 className='about-us__container-info-content-box--title' id='CompromissoComAPrivacidade'>Compromisso com a Privacidade</h1>
                        <p className='about-us__container-info-content-box--description'>Na StarSoul, a sua privacidade é uma prioridade absoluta. Entendemos a importância de proteger suas informações pessoais e garantimos que todos os dados fornecidos sejam tratados com o máximo cuidado e segurança. Nossa política de privacidade detalha como coletamos, utilizamos e protegemos suas informações, assegurando transparência e confiança em cada interação. Utilizamos tecnologias avançadas de criptografia para proteger seus dados e seguimos rigorosos protocolos de segurança para prevenir acessos não autorizados. Estamos comprometidos em manter sua privacidade e em usar suas informações apenas para melhorar a sua experiência com nossos serviços, sempre com o seu consentimento explícito.</p>
                    </div>

                    <div className='about-us__container-info-content-box'>
                        <h1 className='about-us__container-info-content-box--title' id='ComunidadeStarSoul'>Comunidade StarSoul</h1>
                        <p className='about-us__container-info-content-box--description'>Junte-se à comunidade StarSoul e conecte-se com outras pessoas que compartilham seus interesses e objetivos de bem-estar. Nosso fórum online e grupos de discussão permitem que você troque experiências, compartilhe dicas e encontre apoio em sua jornada de saúde mental. Acreditamos que juntos somos mais fortes, e nossa comunidade está aqui para apoiar você a cada passo do caminho.</p>
                    </div>
                </Content>
            </Container>
        </main>
    )
}

export default AboutUs