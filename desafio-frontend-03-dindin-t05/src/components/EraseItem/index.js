import './style.css';
import Image from '../../assets/image.svg';

function EraseItem({ openEraseItem, handleCloseEraseItem }) {

    return (
        <>
            {openEraseItem &&
                <>
                    <div className='erase-image'>
                        <img src={Image} className='image' alt='image' />
                    </div>
                    <div className='container-erase-item'>
                        <h5>Apagar item?</h5>
                        <div className='container-erase-opitions'>
                            <button
                                className='btn-erase btn-yes'
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