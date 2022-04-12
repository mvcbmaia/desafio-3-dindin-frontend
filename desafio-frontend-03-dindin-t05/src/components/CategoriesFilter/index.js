import './style.css';
import Plus from '../../assets/plus.svg';

function CategoriesFilter() {

    return (
        <div className='container-categories-filter'>
            <h2>Categoria</h2>
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
            <div>
                <button>Limpar Filtros</button> <button>Aplicar Filtros</button>
            </div>
        </div>
    )
}

export default CategoriesFilter;