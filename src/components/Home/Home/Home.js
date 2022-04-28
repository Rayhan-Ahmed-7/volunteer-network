import React from 'react';
import Volunteers from '../Volunteers/Volunteers';
//https://i.ibb.co/4tKj6vf/extra-Volunteer.png
const Home = () => {
    return (
        <div className='container pt-6 pb-64'>
            <h2 className='text-center font-extrabold uppercase text-2xl md:text-3xl mt-6 text-gray-700'>I grow by helping people in need.</h2>
            <form className='bg-white flex rounded-md mt-8 ring-2 ring-teal-500 md:max-w-md max-w-xs mx-auto' action="" onSubmit={(e)=>e.preventDefault()}>
            <input className='p-2 rounded-tl-md rounded-bl-md focus:outline-none w-full' type="text" name="search" required/>
            <input className='p-2 rounded-tr-md rounded-br-md cursor-pointer bg-teal-500 text-white' type="submit" value="Search"/>
            </form>
            <Volunteers></Volunteers>
        </div>
    );
};

export default Home;