import './style.css';
import { useEffect, useState } from 'react';
import api from '../../services/api';
import { setItem, getItem } from '../../utils/storage';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.svg';

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      if (!email || !password) {
        console.log('Todos os campos obrigatórios devem ser informados.');

        return;
      }
      const response = await api.post('/login', {
        email,
        senha: password
      });

      const { token } = response.data;
      setItem('token', token);
      navigate('/transacao')

      if (!token) {
        return
      }

      const { id } = response.data.id;
      setItem('token', token);
      navigate('/transacao');

    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    const token = getItem('token');
    if (token) {
      navigate('/transacao');
    }
  }, [])

  return (
    <div className='container'>
      <header>
        <img src={Logo} alt='logo' />
      </header>
      <div className='main-container'>
        <div className='register-container'>
          <h1>Controle suas <span>finanças</span>, sem planilha chata.</h1>
          <h2>Organizar as suas finanças nunca foi tão fácil, com o DINDIN, você tem tudo num único lugar e em um clique de distância.</h2>
          <button className='btn-register'>
            <Link className='link' to='/usuario'>Cadastre-se</Link>
          </button>

        </div>
        <div className='login-container'>
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <div className='container-email'>
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='container-password'>
              <label>Senha</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type='submit'
              className='btn-login'
            >
              Login
            </button>
          </form>

        </div>

      </div>
    </div >
  );
}
