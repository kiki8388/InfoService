import React from 'react'
import { useNavigate } from 'react-router-dom';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
import "./Start.css";

const Start = () => {

    const navigate = useNavigate();

    const path = window.location.pathname.split('/');

    return (
        <>
            <div className='ServiceChoose'>
                <div className='Header'>
                    <h3>Choose service</h3>
                </div>
                <Fab variant="extended" style={{ width: "30%", backgroundColor: "#E63946", color: "#F1FAEE" }} onClick={() => navigate('homeone')}>
                    <NavigationIcon sx={{ mr: 1 }} />
                    Info Service One
                </Fab>
                <Fab variant="extended" style={{ width: "30%", backgroundColor: "#E63946", color: "#F1FAEE", marginTop: "1%" }} onClick={() => navigate('hometwo')}>
                    <NavigationIcon sx={{ mr: 1 }} />
                    Info Service Two
                </Fab>
                <Fab variant="extended" style={{ width: "30%", backgroundColor: "#E63946", color: "#F1FAEE", marginTop: "1%" }} onClick={() => navigate('homethree')}>
                    <NavigationIcon sx={{ mr: 1 }} />
                    Info Service Three
                </Fab>
                <Fab variant="extended" style={{ width: "30%", backgroundColor: "#E63946", color: "#F1FAEE", marginTop: "1%" }} onClick={() => navigate('homefour')}>
                    <NavigationIcon sx={{ mr: 1 }} />
                    Info Service Four
                </Fab>
            </div>
        </>
    )
}

export default Start;