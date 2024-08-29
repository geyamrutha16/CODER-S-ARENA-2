import React from 'react';
import './Loaderlogo.css';
import image from '../../assets/logo.gif';

const Loaderlogo = () => {
    return (
        <div style={loaderStyle}>
            <img src={image} alt='Coders Club 2024' />
        </div>
    );
};

const loaderStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: 'white',
};

export default Loaderlogo;
