import './styles.css'
import Button from '../../components/common/Button'

function Erro() {
    return (
        <main className='error'>
            <div className='error__container'>
                <h1 className='error__container-title'>404</h1>
                <h2 className='error__container-subtitle'>UH OH! Você esta PERDIDO.</h2>
                <p className='error__container-text'>A página que você procura não existe. Como você chegou aqui é um mistério. Mas você pode clicar no botão abaixo para voltar à página inicial.</p>
                <Button to='/'>Voltar para inicial</Button>
            </div>
            
            <div className='error__image'> <img src="../src/assets/images/public/starnata.svg" className='error__image-img' /> </div>
        </main>
    )
}

export default Erro