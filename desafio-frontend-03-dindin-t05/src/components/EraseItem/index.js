import './style.css';
import Image from '../../assets/image.svg';
import api from '../../services/api';
import { getItem } from '../../utils/storage';

function EraseItem({ openEraseItem, handleCloseEraseItem, id }) {

    const handleDeleteTransation = async (id) => {

        const token = getItem('token');

        try {
            await api.delete(`/transacao/${id}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            await window.location.reload(false);
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <>
            {openEraseItem &&
                <>
                    <div className='erase-image'>
                        <img src={Image} className='image' alt='lixo' />
                    </div>
                    <div className='container-erase-item'>
                        <h5>Apagar item?</h5>
                        <div className='container-erase-opitions'>
                            <button
                                className='btn-erase btn-yes'
                                onClick={() => handleDeleteTransation(id)}
                            >
                                Sim
                            </button>
                            <button
                                className='btn-erase btn-no'
                                onClick={() => handleCloseEraseItem()}
                            >
                                Não
                            </button>
                        </div>
                    </div>

                </>
            }
        </>
    )
}

export default EraseItem;