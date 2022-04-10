import './style.css';
import Logo from '../../assets/logo.svg';
import Profile from '../../assets/profile.svg';
import ArrowProfile from '../../assets/arrow-profile.svg';
import Filter from '../../assets/filter.svg';
import Pen from '../../assets/pen.svg';
import GarbageCan from '../../assets/garbage-can.svg';

function Home() {
  return (
    <div>
      <header>
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
        <div className='container-informations'>
          <div>
            <table>
              <tr>
                <td>Data</td>
                <td>Dia da semana</td>
                <td>Descrição</td>
                <td>Categoria</td>
                <td>Valor</td>
              </tr>
              <tr>
                <td>01/09/21</td>
                <td>Quarta</td>
                <td>Venda dos brigadeiros</td>
                <td>Pix</td>
                <td>R$ 100,00</td>
                <td>
                  <button>
                    <img src={Pen} alt="pen" />
                  </button>
                  <button>
                    <img src={GarbageCan} alt="pen" />
                  </button>
                </td>
              </tr>
              <tr>
                <td>02/09/21</td>
                <td>Quinta</td>
                <td> - </td>
                <td>Lazer</td>
                <td>R$ 58,50</td>
                <td>
                  <button>
                    <img src={Pen} alt="pen" />
                  </button>
                  <button>
                    <img src={GarbageCan} alt="pen" />
                  </button>
                </td>
              </tr>
              <tr>
                <td>03/09/21</td>
                <td>Sexta</td>
                <td> - </td>
                <td>Alimentação</td>
                <td>R$ 12,00</td>
                <td>
                  <button>
                    <img src={Pen} alt="pen" />
                  </button>
                  <button>
                    <img src={GarbageCan} alt="pen" />
                  </button>
                </td>
              </tr>
              <tr>
                <td>06/09/21</td>
                <td>Segunda</td>
                <td>Venda dos casadinhos</td>
                <td>Pix</td>
                <td>R$ 100,00</td>
                <td>
                  <button>
                    <img src={Pen} alt="pen" />
                  </button>
                  <button>
                    <img src={GarbageCan} alt="pen" />
                  </button>
                </td>
              </tr>


            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
