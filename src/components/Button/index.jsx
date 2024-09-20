import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Button({ to, type, children }) {
    if (type === 'submit') {
        return (
            <button type="submit" className='button'>
                {children}
            </button>
        );
    }

    return (
        <Link to={to} className='button'>
            {children}
        </Link>
    );
}

export default Button;