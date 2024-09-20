import React, { useState } from 'react';
import Banner from '../../components/common/Banner'
import Container from '../../components/common/Container'
import Content from '../../components/common/Content'
import './styles.css'

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = index => {
        setActiveIndex(index === activeIndex ? null : index);
    };
    return (
        <main>
            <Banner>FAQ - StarSoul</Banner>
            
            <Container className='faq'>
                <Content className='faq__container'>
                    <div className='faq__container-image'> <img src="./src/assets/images/public/image--faq.svg" alt="FAQ" /> </div>
                    <div className='faq__container-box'>
                        <h1 className='faq__container-box-intro'>Perguntas e respostas frequentes</h1>
                        <div className='faq__container-box-content'>
                            <div className='faq-item'>
                                <button className={`faq-item-button ${activeIndex === 0 ? 'active' : ''}`} onClick={() => toggleFAQ(0)}>
                                    O que é a StarSoul?
                                    <span className='arrow'></span>
                                </button>
                                <div className='faq-item-content' style={{ maxHeight: activeIndex === 0 ? '200px' : '0' }}>
                                    <p>A StarSoul é uma plataforma dedicada ao bem-estar mental e emocional, oferecendo meditações guiadas, artigos, exercícios e músicas para ajudar você a encontrar paz e equilíbrio em sua vida diária.</p>
                                </div>
                            </div>

                            <div className='faq-item'>
                                <button className={`faq-item-button ${activeIndex === 1 ? 'active' : ''}`} onClick={() => toggleFAQ(1)}>
                                    Como a StarSoul pode me ajudar?
                                    <span className='arrow'></span>
                                </button>
                                <div className='faq-item-content' style={{ maxHeight: activeIndex === 1 ? '200px' : '0' }}>
                                    <p>A StarSoul fornece ferramentas e recursos para ajudar a reduzir o estresse, melhorar a concentração, promover o relaxamento e apoiar a saúde mental geral. Nossas meditações guiadas e exercícios foram criados por especialistas em bem-estar.</p>
                                </div>
                            </div>

                            <div className='faq-item'>
                                <button className={`faq-item-button ${activeIndex === 2 ? 'active' : ''}`} onClick={() => toggleFAQ(2)}>
                                    Como faço para começar a usar a StarSoul?
                                    <span className='arrow'></span>
                                </button>
                                <div className='faq-item-content' style={{ maxHeight: activeIndex === 2 ? '200px' : '0' }}>
                                    <p>Baixe o aplicativo da StarSoul na App Store ou Google Play, crie uma conta gratuita e comece a explorar nossos recursos. Você pode acessar meditações, ler artigos e participar de exercícios de bem-estar.</p>
                                </div>
                            </div>

                            <div className='faq-item'>
                                <button className={`faq-item-button ${activeIndex === 3 ? 'active' : ''}`} onClick={() => toggleFAQ(3)}>
                                    A StarSoul é gratuito?
                                    <span className='arrow'></span>
                                </button>
                                <div className='faq-item-content' style={{ maxHeight: activeIndex === 3 ? '200px' : '0' }}>
                                    <p>A StarSoul oferece uma versão gratuita com acesso limitado a conteúdos. Para desbloquear todos os recursos, você pode optar por uma assinatura premium.</p>
                                </div>
                            </div>

                            <div className='faq-item'>
                                <button className={`faq-item-button ${activeIndex === 4 ? 'active' : ''}`} onClick={() => toggleFAQ(4)}>
                                    Como faço para acessar as meditações?
                                    <span className='arrow'></span>
                                </button>
                                <div className='faq-item-content' style={{ maxHeight: activeIndex === 4 ? '200px' : '0' }}>
                                    <p>Depois de fazer login no aplicativo, navegue até a seção de meditações no menu principal. Lá, você encontrará uma variedade de meditações guiadas que pode iniciar a qualquer momento.</p>
                                </div>
                            </div>

                            <div className='faq-item'>
                                <button className={`faq-item-button ${activeIndex === 5 ? 'active' : ''}`} onClick={() => toggleFAQ(5)}>
                                    Quais tipos de meditações estão disponíveis na StarSoul?
                                    <span className='arrow'></span>
                                </button>
                                <div className='faq-item-content' style={{ maxHeight: activeIndex === 5 ? '200px' : '0' }}>
                                    <p>Oferecemos uma ampla variedade de meditações, incluindo meditações de atenção plena, relaxamento, foco, sono e muito mais. Cada meditação é projetada para atender diferentes necessidades e preferências.</p>
                                </div>
                            </div>

                            <div className='faq-item'>
                                <button className={`faq-item-button ${activeIndex === 6 ? 'active' : ''}`} onClick={() => toggleFAQ(6)}>
                                    Quanto tempo duram as meditações?
                                    <span className='arrow'></span>
                                </button>
                                <div className='faq-item-content' style={{ maxHeight: activeIndex === 6 ? '200px' : '0' }}>
                                    <p>As meditações nA StarSoul variam de 5 a 30 minutos, permitindo que você escolha uma meditação que se ajuste ao seu tempo disponível e necessidade.</p>
                                </div>
                            </div>

                            <div className='faq-item'>
                                <button className={`faq-item-button ${activeIndex === 7 ? 'active' : ''}`} onClick={() => toggleFAQ(7)}>
                                    Posso ouvir as meditações offline?
                                    <span className='arrow'></span>
                                </button>
                                <div className='faq-item-content' style={{ maxHeight: activeIndex === 7 ? '200px' : '0' }}>
                                    <p>Sim, os assinantes premium podem baixar meditações para ouvir offline. Basta selecionar a meditação desejada e escolher a opção de download.</p>
                                </div>
                            </div>

                            <div className='faq-item'>
                                <button className={`faq-item-button ${activeIndex === 8 ? 'active' : ''}`} onClick={() => toggleFAQ(8)}>
                                    Estou tendo problemas técnicos com o aplicativo. O que devo fazer?
                                    <span className='arrow'></span>
                                </button>
                                <div className='faq-item-content' style={{ maxHeight: activeIndex === 8 ? '200px' : '0' }}>
                                    <p>Primeiro, certifique-se de que você está usando a versão mais recente do aplicativo. Se o problema persistir, entre em contato com nossa equipe de suporte através do email suporte@starsoul.com ou pelo nosso formulário de contato no site.</p>
                                </div>
                            </div>

                            <div className='faq-item'>
                                <button className={`faq-item-button ${activeIndex === 9 ? 'active' : ''}`} onClick={() => toggleFAQ(9)}>
                                    Como faço para cancelar minha assinatura?
                                    <span className='arrow'></span>
                                </button>
                                <div className='faq-item-content' style={{ maxHeight: activeIndex === 9 ? '200px' : '0' }}>
                                    <p>Você pode cancelar sua assinatura a qualquer momento através das configurações de sua conta no aplicativo. Se precisar de assistência, nossa equipe de suporte está disponível para ajudar.</p>
                                </div>
                            </div>

                            <div className='faq-item'>
                                <button className={`faq-item-button ${activeIndex === 10 ? 'active' : ''}`} onClick={() => toggleFAQ(10)}>
                                    Como a StarSoul protege minha privacidade?
                                    <span className='arrow'></span>
                                </button>
                                <div className='faq-item-content' style={{ maxHeight: activeIndex === 10 ? '200px' : '0' }}>
                                    <p>Levamos sua privacidade muito a sério. Todos os dados pessoais são protegidos por criptografia e utilizamos medidas rigorosas para garantir a segurança de suas informações.</p>
                                </div>
                            </div>

                            <div className='faq-item'>
                                <button className={`faq-item-button ${activeIndex === 11 ? 'active' : ''}`} onClick={() => toggleFAQ(11)}>
                                    Minhas informações de meditação são compartilhadas com terceiros?
                                    <span className='arrow'></span>
                                </button>
                                <div className='faq-item-content' style={{ maxHeight: activeIndex === 11 ? '200px' : '0' }}>
                                    <p>Não. Suas informações de meditação e atividades no aplicativo são privadas e não são compartilhadas com terceiros.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Content>
            </Container>
        </main>
    )
}

export default FAQ