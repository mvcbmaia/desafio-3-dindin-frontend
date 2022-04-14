import './style.css';
import btnClose from '../../assets/close.svg';
import { useState } from 'react';

function RegisterEditing({ openRegisterEditing, handleCloseEditing }) {
    const [type, setType] = useState('saida');
    const btnIn = document.querySelector('.btn-in');
    const btnOut = document.querySelector('.btn-out');

    const handleTypeIn = (e) => {
        setType('entrada');
        btnIn.style.background = '#3A9FF1';
        btnOut.style.background = '#B9B9B9';
    }

    const handleTypeOut = (e) => {
        setType('saida');
        btnIn.style.background = '#B9B9B9';
        btnOut.style.background = '#FF576B';
    }

    return (
        <>
            {openRegisterEditing &&
                <div>
                    <div className='modal-container'>
                        <div className='modal'>
                            <div className='title'>
                                <h1>Editar registro</h1>
                                <img
                                    src={btnClose}
                                    alt='close-button'
                                    onClick={() => handleCloseEditing()}
                                />
                            </div>

                            <div className='btns'>
                                <button
                                    className='btn-in'
                                    onClick={handleTypeIn}
                                    value={type}
                                >Entrada</button>
                                <button
                                    className='btn-out'
                                    onClick={handleTypeOut}
                                    value={type}
                                >Saída</button>
                            </div>
                            <form>
                                <div className='input-value'>
                                    <label>Valor</label>
                                    <input type='number'></input>
                                </div>
                                <div className='input-category'>
                                    <label>Categoria</label>
                                    <select></select>
                                </div>
                                <div className='input-date'>
                                    <label>Data</label>
                                    <input type='date'></input>
                                </div>
                                <div className='input-description'>
                                    <label>Descrição</label>
                                    <input type='text'></input>
                                </div>
                                <button type='submit'>Confirmar</button>
                            </form>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default RegisterEditing;