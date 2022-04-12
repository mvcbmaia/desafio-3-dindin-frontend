import './style.css';
import Close from '../../assets/close.svg';

function EditingProfile() {

    return (
        <div className='container-editing'>

            <div className='modal-input'>
                <div className='container-close'>
                    <h1>Editar Perfil</h1>
                    <img src={Close} alt='close' />
                </div>
                <div className='container-informations'>
                    <form>
                        <div className='container-name'>
                            <label>Nome</label>
                            <input
                                type='text'
                                value='nome'

                            />
                        </div>
                        <div className='container-email'>
                            <label>E-mail</label>
                            <input
                                type='email'
                                value='email'
                            />
                        </div>
                        <div className='container-password'>
                            <label>Senha</label>
                            <input
                                type='password'
                                value='password'
                            />
                        </div>
                        <div className='container-password-confirmation'>
                            <label>Confirmação de Senha</label>
                            <input
                                type='password'
                                value='password'
                            />
                        </div>
                        <button className='btn-editing-profile' type='submit'>Cadastrar</button>
                    </form>
                </div>

            </div >

        </div >
    )
}

export default EditingProfile;