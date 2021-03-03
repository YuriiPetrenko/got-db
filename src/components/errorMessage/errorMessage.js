import React from 'react';
import img from './err.jpg';
import './errorMessage.css';

const ErrorMessage = () => {
    return (
        <>
            <img src={img}></img>
            <span>Something goes wrong :(</span>
        </>
    )
    
}
export default ErrorMessage;