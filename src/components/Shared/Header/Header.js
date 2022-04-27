import React from 'react';
import logo from '../../../images/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='px-3'>
            <nav className='container mx-auto'>
            <div className="logo">
                <Link to='/'>
                    <img src={logo} alt="logo"/>
                </Link>
            </div>
            <ul className=''>
                
            </ul>
            </nav>
        </header>
    );
};

export default Header;