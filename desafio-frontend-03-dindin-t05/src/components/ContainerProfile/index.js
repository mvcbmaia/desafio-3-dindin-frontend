import './style.css';
import Profile from '../../assets/profile.svg';
import ArrowProfile from '../../assets/arrow-profile.svg';
import api from '../../services/api';
import { useEffect, useState } from 'react';
import { getItem } from '../../utils/storage';
import EditingProfile from '../EditingProfile';

function ContainerProfile() {
    const [name, setName] = useState('');
    const [open, setOpen] = useState(false);

    const handleProfileModal = () => {
        setOpen(true)
    }

    const handleCloseProfile = () => {
        setOpen(false)
    }

    const handleUser = async () => {
        const token = getItem('token');

        try {
            const response = await api.get('/usuario', {
                headers: { Authorization: `Bearer ${token}` }
            })

            setName(response.data.nome);

        } catch (error) {
            console.log(error.message);
        }
    }
    useEffect(() => {
        handleUser();

    }, [])
    return (
        <div>
            <div className='container-profile'>
                <img src={Profile} onClick={handleProfileModal} alt='profile' />
                <h3>{name}</h3>
                <img src={ArrowProfile} alt='arrow' />
            </div>
            <EditingProfile
                open={open}
                handleCloseProfile={handleCloseProfile}
            />
        </div>
    )
}

export default ContainerProfile;