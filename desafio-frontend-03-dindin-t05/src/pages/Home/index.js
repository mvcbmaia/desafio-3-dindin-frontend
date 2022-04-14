
import './style.css';
import Logo from '../../assets/logo.svg';
import ContainerProfile from '../../components/ContainerProfile';
import Filter from '../../assets/filter.svg';
import CategoriesFilter from '../../components/CategoriesFilter';

import { useState } from 'react';

import Table from '../../components/Table';
import Resume from '../../components/Resume';


function Home() {
  const [open, setOpen] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  }

  const handleCloseFilter = () => {
    setOpenFilter(false);
  }

  const handleOpenModal = () => {
    setOpen(true);
  }

  const handleCloseModal = () => {
    setOpen(false);
  }

  return (
    <div className='container-home'>
      <header className='header-home'>
        <img src={Logo} alt="logo" />
        <ContainerProfile />
      </header>
      <div className='container-information'>
        <button
          onClick={openFilter ? handleCloseFilter : handleOpenFilter}
          className='btn-filter'>
          <img src={Filter} alt='filter' />
          Filtrar
        </button>
        {<CategoriesFilter
          openFilter={openFilter}
          handleCloseFilter={handleCloseFilter}
        />}
        <div className='container-informations'>

          <Table />
          <div className='resume'>
            <Resume />

          </div>

          <button
            className='btn-add'
            onClick={handleOpenModal}
          >Adicionar Registro</button>
        </div>

      </div>




    </div >

  );
}

export default Home;

