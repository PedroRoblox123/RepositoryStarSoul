import './styles.css';
import Button from '../../components/common/Button';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const admins = [
  {
    codAdmin: '115611',
    email: 'starsoul@gmail.com',
    senha: 'starsoul'
  }
];

function LoginAdmin() {
  const [codAdmin, setCodAdmin] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add('login-page');
    
    return () => {
      document.body.classList.remove('login-page');
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const admin = admins.find(
      (admin) => admin.codAdmin === codAdmin && admin.email === email && admin.senha === senha
    );

    if (admin) {
      navigate('/admin/dashboard');
    } else {
      setError('Código, email ou senha incorretos');
    }
  };

  return (
    <main className='adminlogin'>
      <div className='adminlogin__container'>
        <div className='adminlogin__container-img'>
          <img src="../src/assets/images/admin/image-cloud-superior.svg" alt="Nuvens" />
        </div>

        <div className='adminlogin__container-content'>
          <div className='adminlogin__container-content-box'>
            <div className='adminlogin__container-content-box-images'>
              <img src="../src/assets/icons/starsoul-brandmark.svg" alt="Logo StarSoul" />
              <img src="../src/assets/images/admin/starsoul-lettermark.svg" alt="StarSoul" />
            </div>
            <div className='adminlogin__container-content-box-text'>
              <p>Bem-vindo ao painel de administração. Por favor, insira suas credenciais para acessar as funcionalidades do sistema.</p>
            </div>
          </div>
          <div className='adminlogin__container-content-form'>
            <form onSubmit={handleSubmit} className='adminlogin__container-content-form-box'>
              <label className='adminlogin__container-content-form-box-label'>Código Admin
                <input className='adminlogin__container-content-form-box-label-input' type="number" value={codAdmin} onChange={(e) => setCodAdmin(e.target.value)} required/>
              </label>

              <label className='adminlogin__container-content-form-box-label'>Email 
                <input className='adminlogin__container-content-form-box-label-input' type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
              </label>

              <label className='adminlogin__container-content-form-box-label'>Senha
                <input className='adminlogin__container-content-form-box-label-input' type="password" onChange={(e) => setSenha(e.target.value)} required/>
              </label>

              <Button type="submit">Entrar</Button>

              {error && <p className="adminlogin__container-content-texterror" style={{ color: 'red' }}>{error}</p>}

            </form>
          </div>
          <div className='adminlogin__container-content-copyright'>
            <p>© 2024 StarSoul - Meditações e Guias para conhecimento. Todos os direitos reservados.</p>
          </div>
        </div>

        <div className='adminlogin__container-img'>
          <img src="../src/assets/images/admin/image-cloud-inferior.svg" alt="Nuvens" />
          
        </div>
      </div>
    </main>
  );
}

export default LoginAdmin;
