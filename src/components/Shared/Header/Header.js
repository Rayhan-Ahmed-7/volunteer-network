import React, { useState } from 'react';
import logo from '../../../images/logo.png';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { RiMenu4Fill, RiCloseFill } from 'react-icons/ri';
import Button from '../Button/Button';

const Header = () => {
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate();
    return (
        <header className='py-4 px-2'>
            <nav className='w-11/12 mx-auto flex justify-between items-center'>
                <div className="logo">
                    <Link to='/'>
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <div className='relative'>
                    <span onClick={()=>setVisible(!visible)} className='md:hidden visible cursor-pointer'>
                        {!visible?
                        <RiMenu4Fill className='text-3xl'></RiMenu4Fill>
                        :
                        <RiCloseFill className='text-3xl'></RiCloseFill>
                        }
                    </span>
                    <ul className={`${visible? 'opacity-100 translate-x-0':'opacity-100 translate-x-44'} flex flex-col md:flex-row md:gap-6 gap-4 md:translate-x-0 text-lg absolute md:static top-10 right-2 md:bg-transparent md:opacity-100 bg-white/80 backdrop-blur-sm rounded-md p-5 md:p-0 transition-all duration-300 z-10 md:items-center `}>
                        <li>
                            <NavLink
                                to='/'
                                className={({ isActive }) => (isActive ? 'text-teal-600' : "hover:text-teal-600 text-gray-900"
                                )}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/donation'
                                className={({ isActive }) => (isActive ? 'text-teal-600' : "hover:text-teal-600 text-gray-900"
                                )}
                            >
                                Donation
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/events'
                                className={({ isActive }) => (isActive ? 'text-teal-600' : "hover:text-teal-600 text-gray-900"
                                )}
                            >
                                Events
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/blogs'
                                className={({ isActive }) => (isActive ? 'text-teal-600' : "hover:text-teal-600 text-gray-900"
                                )}
                            >
                                Blogs
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/login'
                                className={({ isActive }) => (isActive ? 'text-teal-600' : "hover:text-teal-600 text-gray-900"
                                )}
                            >
                                Login
                            </NavLink>
                        </li>
                        <Button bg="bg-teal-500" hover="hover:bg-teal-400" text="text-white" handleClick={()=>navigate("/register")}>Register</Button>
                        <Button bg="bg-gray-800" hover="hover:bg-teal-400" text="text-white" handleClick={()=>navigate("/admin")}>Admin</Button>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;