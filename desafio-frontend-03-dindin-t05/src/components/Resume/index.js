import './style.css';

function Resume() {

    return (
        <div>
            <div className='container-resume'>
                <div className='container-title'>
                    <h2>Resumo</h2>
                </div>
                <div className='numbers'>
                    <div className='container-enter'>
                        <h3>Entradas</h3> <h3 className='value-enter'>R$ 200,00</h3>
                    </div>
                    <div className='container-exit'>
                        <h3>Saída</h3> <h3 className='value-exit'>R$70,50</h3>
                    </div>
                    <div className='divide'></div>
                    <div className='container-total'>
                        <h3>Saldo</h3> <h3 className='value-total'>R$129,50</h3>
                    </div>
                </div>
            </div>
            <button className='btn-add'>Adicionar Registro</button>
        </div>
    )
}

export default Resume;