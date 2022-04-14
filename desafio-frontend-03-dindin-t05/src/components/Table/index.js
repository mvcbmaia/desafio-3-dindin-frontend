import './style.css';
import Top from '../../assets/top.svg';
import Pen from '../../assets/pen.svg';
import GarbageCan from '../../assets/garbage-can.svg';
import EraseItem from '../EraseItem';
import RegisterEditing from '../RegisterEditing';
import { useState } from 'react';
import { getDay } from 'date-fns';
import convertDay from '../../utils/convertDay';



function Table({ transations }) {
    const [openRegisterEditing, setOpenRegisterEditing] = useState(false);
    const [openEraseItem, setOpenEraseItem] = useState(false);

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

    console.log(transations)
    return (
        <div>
            <table className='table'>

                <thead className='table-header'>
                    <tr>
                        <th>
                            Data
                            <button className='btn-top'><img src={Top} alt='top' /></button>
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
                            <td>{transation.valor}</td>
                            <td>
                                <button
                                    className='btn btn-pen'
                                    onClick={handleOpenEditing}
                                >
                                    <img src={Pen} alt='pen' />
                                </button>
                                <button
                                    className='btn btn-garbage'
                                    onClick={handleOpenEraseItem}
                                >
                                    <img src={GarbageCan} alt='garbage' />
                                </button>
                            </td>
                        </tr>
                    )}
                </tbody>

                <div className='container-erase'>
                    <EraseItem
                        openEraseItem={openEraseItem}
                        handleCloseEraseItem={handleCloseEraseItem}
                    />
                </div>
            </table>
            <EraseItem
                openEraseItem={openEraseItem}
                handleCloseEraseItem={handleCloseEraseItem}
            />
            <RegisterEditing
                openRegisterEditing={openRegisterEditing}
                handleCloseEditing={handleCloseEditing}
            />
        </div>
    )
}

export default Table;