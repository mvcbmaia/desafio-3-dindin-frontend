import './style.css';
import btnClose from '../../assets/close.svg';
import { useState, useEffect } from 'react';
import api from '../../services/api';
import { getItem } from '../../utils/storage';

function AddingRegister({ openAddRegirter, handleCloseAddRegister, transations }) {
    const [value, setValue] = useState();
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('saida')
    const [firstCategory, setFirstCategory] = useState('');
    const [secondCategory, setSecondCategory] = useState('');
    const [thirdCategory, setThirdCategory] = useState('');
    const [fourthCategory, setFourthCategory] = useState('');
    const [fifthCategory, setFifthCategory] = useState('');
    const btnIn = document.querySelector('.btn-in');
    const btnOut = document.querySelector('.btn-out');
    let category_id = '';

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

    const handleCategories = async () => {
        const token = getItem('token');

        try {
            const response = await api.get('/categoria', {
                headers: { Authorization: `Bearer ${token}` }
            })

            setFirstCategory(response.data[0].descricao);
            setSecondCategory(response.data[1].descricao);
            setThirdCategory(response.data[2].descricao);
            setFourthCategory(response.data[3].descricao);
            setFifthCategory(response.data[4].descricao);
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        handleCategories();
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = getItem('token');

        try {
            if (!value || !category || !date || !description) {
                console.log('Todos os campos s??o obrigat??rios.')
            }


            if (category === 'Lazer') {
                category_id = 1;
            } else if (category === 'Sal??rio') {
                category_id = 2;
            } else if (category === 'Transporte') {
                category_id = 3;
            } else if (category === 'Mercado') {
                category_id = 4;
            } else if (category === 'Assinaturas e Servi??os') {
                category_id = 5;
            }

            const response = await api.post('/transacao', {
                valor: value,
                categoria_id: category_id,
                data: date,
                descricao: description,
                tipo: type
            }, { headers: { Authorization: `Bearer ${token}` } })
            handleCloseAddRegister();
            await window.location.reload(false);
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <>
            {openAddRegirter &&
                < div className='modal-container'>
                    <div className='modal'>
                        <div className='title'>
                            <h1>Adicionar registro</h1>
                            <img
                                src={btnClose}
                                alt='close-button'
                                onClick={handleCloseAddRegister}
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
                            >Sa??da</button>
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
                                <select selected={firstCategory} value={category} onChange={(e) => setCategory(e.target.value)}>
                                    <option>{firstCategory}</option>
                                    <option>{secondCategory}</option>
                                    <option>{thirdCategory}</option>
                                    <option>{fourthCategory}</option>
                                    <option>{fifthCategory}</option>
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
                                <label>Descri????o</label>
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