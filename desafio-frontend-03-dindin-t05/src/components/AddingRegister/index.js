import './style.css';
import btnClose from '../../assets/close.svg';

function AddingRegister() {

    return (
        <>
            < div className='modal-container'>
                <div className='modal'>
                    <div className='title'>
                        <h1>Adicionar registro</h1>
                        <img src={btnClose} alt='close-button' />
                    </div>

                    <div className='btns'>
                        <button className='btn-in'>Entrada</button>
                        <button className='btn-out'>Saída</button>
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

        </>
    )
}

export default AddingRegister;