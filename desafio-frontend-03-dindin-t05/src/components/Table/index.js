import './style.css';
import Top from '../../assets/top.svg';
import Pen from '../../assets/pen.svg';
import GarbageCan from '../../assets/garbage-can.svg';
import EraseItem from '../EraseItem';
import RegisterEditing from '../RegisterEditing';
import { useState } from 'react';



function Table() {
    const [openRegisterEditing, setOpenRegisterEditing] = useState(false);
    const [openEraseItem, setOpenEraseItem] = useState(false);

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
                    <tr>
                        <td>01/09/21</td>
                        <td>Quarta</td>
                        <td>Venda dos brigadeiros</td>
                        <td>Pix</td>
                        <td>R$ 100,00</td>
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