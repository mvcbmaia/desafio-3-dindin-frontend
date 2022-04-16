import './style.css';
import Close from '../../assets/close.svg';
import { useState, useEffect } from 'react';
import api from '../../services/api';
import { getItem } from '../../utils/storage';

function EditingProfile({ open, handleCloseProfile }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (!email || !name || !password || !confirmPassword) {
                console.log('Todos os campos são os obrigatórios');
                return;
            }

            if (password !== confirmPassword) {
                console.log('Os campos de senha precisam ser iguais.')
                return;
            }

            const token = getItem('token');


            const response = await api.put('/usuario', {
                email,
                nome: name,
                senha: password

            }, { headers: { Authorization: `Bearer ${token}` } })

        } catch (error) {
            return console.log(error.message);
        }
    }

    useEffect(() => {
        setName(getItem('nome'))
        setEmail(getItem('email'))
    }, [])



    return (
        <>
            {open &&
                <div className='container-editing'>

                    <div className='modal-input'>
                        <div className='container-close'>
                            <h1>Editar Perfil</h1>
                            <img src={Close} onClick={handleCloseProfile} alt='close' />
                        </div>
                        <div className='container-informations'>
                            <form onSubmit={handleSubmit}>
                                <div className='container-name'>
                                    <label>Nome</label>
                                    <input
                                        type='text'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}

                                    />
                                </div>
                                <div className='container-email'>
                                    <label>E-mail</label>
                                    <input
                                        type='email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className='container-password'>
                                    <label>Senha</label>
                                    <input
                                        type='password'
                                        onChange={(e) => setPassword(e)}
                                    />
                                </div>
                                <div className='container-password-confirmation'>
                                    <label>Confirmação de Senha</label>
                                    <input
                                        type='password'
                                        onChange={(e) => setConfirmPassword(e)}
                                    />
                                </div>
                                <button className='btn-editing-profile' type='submit'>Cadastrar</button>
                            </form>
                        </div>

                    </div >

                </div >
            }
        </>
    )
}

export default EditingProfile;