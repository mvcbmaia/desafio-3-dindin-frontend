
import './style.css';
import Logo from '../../assets/logo.svg';
import Profile from '../../assets/profile.svg';
import ArrowProfile from '../../assets/arrow-profile.svg';
import Filter from '../../assets/filter.svg';
import Pen from '../../assets/pen.svg';
import GarbageCan from '../../assets/garbage-can.svg';
import Top from '../../assets/top.svg';
import EditingProfile from '../../components/EditingProfile';
import EraseItem from '../../components/EraseItem';
import CategoriesFilter from '../../components/CategoriesFilter';
<<<<<<< HEAD
=======
import AddingRegister from '../../components/AddingRegister';
import RegisterEditing from '../../components/RegisterEditing';
>>>>>>> 7fb59ef494b3a5e47e1e5ed9594fd5ac9f4a9a1b

function Home() {
  return (
    <div className='container-home'>
      <header className='header-home'>
        <img src={Logo} alt="logo" />
        <div className='container-profile'>
          <img src={Profile} alt='profile' />
          <h3>Daniel</h3>
          <img src={ArrowProfile} alt='arrow' />
        </div>
      </header>
      <div className='container-information'>
        <button className='btn-filter'>
          <img src={Filter} alt='filter' />
          Filtrar
        </button>
        {/* <CategoriesFilter /> */}
        <div className='container-informations'>
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
                  <button className='btn btn-pen'>
                    <img src={Pen} alt='pen' />
                  </button>
                  <button className='btn btn-garbage'>
                    <img src={GarbageCan} alt='garbage' />
                  </button>
                </td>
              </tr>
            </tbody>
            {/* <EraseItem /> */}
          </table>
          <div className='resume'>
            <div className='container-resume'>
              <div className='container-title'>
                <h2>Resumo</h2>
              </div>
              <div className='numbers'>
                <div className='container-enter'>
                  <h3>Entradas</h3> <h3 className='value-enter'>R$ 200,00</h3>
                </div>
                <div className='container-exit'>
                  <h3>Entradas</h3> <h3 className='value-exit'>R$70,50</h3>
                </div>
                <div className='divide'></div>
                <div className='container-total'>
                  <h3>Saldo</h3> <h3 className='value-total'>R$129,50</h3>
                </div>
              </div>
            </div>

            <button className='btn-add'>Adicionar Registro</button>

          </div>
        </div>
      </div>

<<<<<<< HEAD
      <EditingProfile />
=======
      {/* <EditingProfile /> */}
      {/* <AddingRegister /> */}
      {/* <RegisterEditing /> */}
>>>>>>> 7fb59ef494b3a5e47e1e5ed9594fd5ac9f4a9a1b

    </div >

  );
}

export default Home;

