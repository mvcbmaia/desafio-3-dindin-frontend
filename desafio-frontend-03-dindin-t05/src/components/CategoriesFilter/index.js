import './style.css';
import Plus from '../../assets/plus.svg';

function CategoriesFilter({ openFilter, }) {

    return (
        <>
            {openFilter &&
                <div className='container-categories-filter'>
                    <h2>Categoria</h2>
                    <div className='categories'>
                        <button>
                            Lazer
                            <img src={Plus} alt='plus' />
                        </button>

                        <button>
                            Salário
                            <img src={Plus} alt='plus' />
                        </button>

                        <button>
                            Transporte
                            <img src={Plus} alt='plus' />
                        </button>

                        <button>
                            Mercado
                            <img src={Plus} alt='plus' />
                        </button>
                        <button>
                            Assinaturas e Serviços
                            <img src={Plus} alt='plus' />
                        </button>
                    </div>
                    <div className='btns-filter'>
                        <button className='clean-filter'>Limpar Filtros</button>
                        <button className='app-filter'>Aplicar Filtros</button>
                    </div>
                </div>
            }
        </>
    )
}

export default CategoriesFilter;