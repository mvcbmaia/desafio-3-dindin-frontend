import './style.css';

function EraseItem() {

    return (
        <div className='container-erase-item'>
            <h5>Apagar item?</h5>
            <div className='container-erase-opitions'>
                <button className='btn-erase btn-yes'>Sim</button>
                <button className='btn-erase btn-no'>Não</button>
            </div>
        </div>
    )
}

export default EraseItem;