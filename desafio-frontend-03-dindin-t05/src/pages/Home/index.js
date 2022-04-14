import './style.css';
import Logo from '../../assets/logo.svg';
import ContainerProfile from '../../components/ContainerProfile';
import Filter from '../../assets/filter.svg';
import CategoriesFilter from '../../components/CategoriesFilter';
import Table from '../../components/Table';
import Resume from '../../components/Resume';
import { useState, useEffect } from 'react';
import api from '../../services/api';
import { getItem } from '../../utils/storage'

function Home() {
  const [openFilter, setOpenFilter] = useState(false);
  const [transations, setTransitions] = useState([]);


  async function handleTrasations() {
    const token = getItem('token');

    try {
      const response = await api.get('/transacao', {
        headers: { Authorization: `Bearer ${token}` }
      })

      console.log(response);

    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    handleTrasations();

  }, [])


  const handleOpenFilter = () => {
    setOpenFilter(true);
  }

  const handleCloseFilter = () => {
    setOpenFilter(false);
  }

  return (
    <div className='container-home'>
      <header className='header-home'>
        <img src={Logo} alt="logo" />
        <ContainerProfile />
      </header>
      <div className='container-information'>
        <button
          className='btn-filter'
          onClick={openFilter ? handleCloseFilter : handleOpenFilter}
        >
          <img src={Filter} alt='filter' />
          Filtrar
        </button>
        <CategoriesFilter
          openFilter={openFilter}
          handleCloseFilter={handleCloseFilter}
        />
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
