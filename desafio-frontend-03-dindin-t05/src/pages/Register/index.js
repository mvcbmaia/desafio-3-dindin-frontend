import './style.css';
import logo from '../../assets/logo.svg'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../services/api';

function Register() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!email || !name || !password || !confirmPassword) {
        console.log('Todos os campos são os obrigatórios');
        return;
      }
    } catch (error) {
      console.log(error.message);
    }
    try {
      if (password !== confirmPassword) {
        console.log('Os campos de senha precisam ser iguais.')
        return;
      }
    } catch (error) {

    }
    try {
      const response = await api.post('/usuario', {
        email,
        name,
        password
      })
      navigate('/login');
    } catch (error) {

    }
  }

  return (
        <div className='container'>
      <div className='container-logo'>
        <img src={logo} alt='logo' />
      </div>
      <div className='container-register-center'>
        <div className='container-register'>
          <h1>Cadastre-se</h1>
          <form onSubmit={handleSubmit}>
            <div className='input-name'>
              <label>Nome</label>
              <input
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div className='input-email'>
              <label>E-mail</label>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div className='input-password'>
              <label>Senha</label>
              <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <div className='input-confirm-password'>
              <label>Confirmação de Senha</label>
              <input
                type='password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></input>
            </div>
            <button className='btn-register' type='submit'>Cadastrar</button>
            <Link to='/login' className='link'>Já está cadastrado? Clique aqui.</Link>
          </form>
        </div>
      </div>
     );
}

export default Register;
