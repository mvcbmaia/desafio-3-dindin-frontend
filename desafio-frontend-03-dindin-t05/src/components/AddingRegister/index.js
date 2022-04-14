import './style.css';
import btnClose from '../../assets/close.svg';
import { useState } from 'react';
import api from '../../services/api';
import { getItem } from '../../utils/storage'

function AddingRegister({ open, handleCloseModal }) {
    const [value, setValue] = useState();
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('saida')
    const btnIn = document.querySelector('.btn-in');
    const btnOut = document.querySelector('btn-out');

    const handleTypeIn = async (e) => {
        setType('entrada');
        btnIn.style.background = '#3A9FF1';
        btnOut.style.background = '#B9B9B9';
    }

    const handleTypeOut = async (e) => {
        setType('saida')
        btnIn.style.background = '#B9B9B9';
        btnOut.style.background = '#FF576B';
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (!value || !category || !date || !description) {
                console.log('Todos os campos são obrigatórios.')
            }

            const response = await api.post('/transacao', {
                valor: value,
                categoria: category,
                data: date,
                descricao: description,
                tipo: type
            })

            console.log(response)
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <>
            {open &&
                < div className='modal-container'>
                    <div className='modal'>
                        <div className='title'>
                            <h1>Adicionar registro</h1>
                            <img
                                src={btnClose}
                                alt='close-button'
                                onClick={handleCloseModal}
                            />
                        </div>

                        <div className='btns'>
                            <button
                                className='btn-in'
                                onClick={handleTypeIn}
                            >Entrada</button>
                            <button
                                className='btn-out'
                                onClick={handleTypeOut}
                            >Saída</button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className='input-value'>
                                <label>Valor</label>
                                <input
                                    type='number'
                                    value={value}
                                    onChange={(e) => setValue(e.target.value)}
                                ></input>
                            </div>
                            <div className='input-category'>
                                <label>Categoria</label>
                                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                                    <option>Lazer</option>
                                    <option>Transporte</option>
                                </select>
                            </div>
                            <div className='input-date'>
                                <label>Data</label>
                                <input
                                    type='date'
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                ></input>
                            </div>
                            <div className='input-description'>
                                <label>Descrição</label>
                                <input
                                    type='text'
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                ></input>
                            </div>
                            <button type='submit'>Confirmar</button>
                        </form>
                    </div>
                </div>
            }
        </>
    )
}

export default AddingRegister;