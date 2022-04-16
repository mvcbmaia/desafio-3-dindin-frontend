import './style.css';
import Top from '../../assets/top.svg';
import Pen from '../../assets/pen.svg';
import GarbageCan from '../../assets/garbage-can.svg';
import EraseItem from '../EraseItem';
import RegisterEditing from '../RegisterEditing';
import { useState } from 'react';
import { format, getDay } from 'date-fns';
import convertDay from '../../utils/convertDay';



function Table({ transations }) {
    const [openRegisterEditing, setOpenRegisterEditing] = useState(false);
    const [openEraseItem, setOpenEraseItem] = useState(false);
    const [id, setId] = useState('');

    let categoria = '';

    for (let transation of transations) {
        if (transation.categoria_id === 1) {
            categoria = 'Lazer'
        } else if (transation.categoria_id === 2) {
            categoria = 'Salário'
        } else if (transation.categoria_id === 3) {
            categoria = "Transporte"
        } else if (transation.categoria_id === 4) {
            categoria = "Mercado"
        } else if (transation.categoria_id === 5) {
            categoria = "Assinaturas e Serviços"
        }
    }

    function handleOrderData(a, b) {
        return a.data - b.data;
    }

    function handleOpenEditing() {
        setOpenRegisterEditing(true);
    }

    function handleCloseEditing() {
        setOpenRegisterEditing(false);
    }

    function handleOpenEraseItem() {
        setOpenEraseItem(true);
    }

    function handleCloseEraseItem() {
        setOpenEraseItem(false);
    }

    return (
        <div>
            <table className='table'>

                <thead className='table-header'>
                    <tr>
                        <th>
                            Data
                            <button onClick={() => transations.sort(handleOrderData)} className='btn-top'><img src={Top} alt='top' /></button>
                        </th>
                        <th>Dia da Semana</th>
                        <th>Descrição</th>
                        <th>Categoria</th>
                        <th>Valor</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className='table-body'>
                    {transations.map(transation =>
                        <tr>
                            <td>{transation.data.split('T03:00:00.000Z')}</td>
                            <td>{convertDay(getDay(new Date(transation.data.split('T03:00:00.000Z'))))}</td>
                            <td>{transation.descricao}</td>
                            <td>{categoria}</td>
                            <td className={transation.tipo = 'saida' ? 'orange' : 'purple'}>R${((transation.valor) / 100).toFixed(2)}</td>
                            <td>
                                <button
                                    className='btn btn-pen'
                                    onClick={() => { handleOpenEditing(); setId(transation.id) }}
                                >
                                    <img src={Pen} alt='pen' />
                                </button>
                                <button
                                    className='btn btn-garbage'
                                    onClick={() => { handleOpenEraseItem(); setId(transation.id) }}
                                >
                                    <img src={GarbageCan} alt='garbage' />
                                </button>

                            </td>
                        </tr>
                    )}
                    <EraseItem
                        openEraseItem={openEraseItem}
                        handleCloseEraseItem={handleCloseEraseItem}
                        id={id}
                    />
                    <RegisterEditing
                        openRegisterEditing={openRegisterEditing}
                        handleCloseEditing={handleCloseEditing}
                        id={id}
                    />
                </tbody>

                <div className='container-erase'>

                </div>
            </table>
        </div>
    )
}

export default Table;