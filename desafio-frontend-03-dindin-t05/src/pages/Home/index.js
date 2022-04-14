import './style.css';
import Logo from '../../assets/logo.svg';
import ContainerProfile from '../../components/ContainerProfile';
import Filter from '../../assets/filter.svg';
import CategoriesFilter from '../../components/CategoriesFilter';
import Table from '../../components/Table';
import Resume from '../../components/Resume';

function Home() {
  return (
    <div className='container-home'>
      <header className='header-home'>
        <img src={Logo} alt="logo" />
        <ContainerProfile />
      </header>
      <div className='container-information'>
        <button className='btn-filter'>
          <img src={Filter} alt='filter' />
          Filtrar
        </button>
        {/* <CategoriesFilter /> */}
        <div className='container-informations'>
          <Table />
          <div className='resume'>
            <Resume />
          </div>
        </div>
      </div>



    </div >

  );
}

export default Home;
