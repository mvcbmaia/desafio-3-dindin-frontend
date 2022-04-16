import './style.css';
import { useEffect, useState, } from 'react';
import AddingRegister from '../AddingRegister';
import api from '../../services/api';
import { getItem } from '../../utils/storage';



function Resume() {
    const [openAddRegister, setOpenAddRegister] = useState(false);
    const [enter, setEnter] = useState('');
    const [exit, setExit] = useState('');

    function handleOpenAddRegister() {
        setOpenAddRegister(true);
    }

    function handleCloseAddRegister() {
        setOpenAddRegister(false);
    }

    const handleResume = async () => {
        const token = getItem('token');

        try {
            const response = await api.get('/transacao/extrato', {
                headers: { Authorization: `Bearer ${token}` }
            })
            setEnter(response.data.entrada)
            setExit(response.data.saida)


        } catch (error) {
            console.log(error.message);
        }

    }

    useEffect(() => {
        handleResume();

    }, [])

    return (
        <div>
            <div className='container-resume'>
                <div className='container-title'>
                    <h2>Resumo</h2>
                </div>
                <div className='numbers'>
                    <div className='container-enter'>
                        <h3>Entradas</h3> <h3 className='value-enter'>R${(enter / 100).toFixed(2)}</h3>
                    </div>
                    <div className='container-exit'>
                        <h3>Saída</h3> <h3 className='value-exit'>R${(exit / 100).toFixed(2)}</h3>
                    </div>
                    <div className='divide'></div>
                    <div className='container-total'>
                        <h3>Saldo</h3> <h3 className='value-total'>R${((enter - exit) / 100).toFixed(2)}</h3>
                    </div>
                </div>
            </div>
            <button className='btn-add'
                onClick={handleOpenAddRegister}
            >
                Adicionar Registro
            </button>
            <AddingRegister
                openAddRegister={openAddRegister}
                handleCloseAddRegister={handleCloseAddRegister}

            />
        </div>
    )
}

export default Resume;