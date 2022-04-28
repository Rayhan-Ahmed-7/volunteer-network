import React from 'react';

const Register = () => {
    const handleSubmit = (e) =>{
        e.preventDefault();
    }
    return (
        <div className='container mx-auto'>
            <div className='grid place-items-center'>
            <form onSubmit={handleSubmit} className='md:w-4/12 w-10/12 bg-white p-10 rounded-md border-2 border-teal-500 mt-6' action="">
                <h2 className='text-xl font-extrabold text-gray-700 p-2'>Register as a Volunteer</h2>
                <input className='block w-full mt-4 text-lg p-2 outline-none border-b-2' type="text" name="name" required placeholder='Full Name'/>
                <input className='block w-full mt-4 text-lg p-2 outline-none border-b-2' type="email" name="email" required placeholder='User Email'/>
                <input className='block w-full mt-4 text-lg p-2 outline-none border-b-2' type='date' name="date" required/>
                <textarea className='block w-full mt-4 text-lg p-2 outline-none border-b-2' placeholder='write a description' required></textarea>
                <input className='block w-full mt-4 text-lg p-2 outline-none border-b-2' type="text" name="name" required placeholder='Organize books at library'/>
                <input className='block w-full mt-4 bg-teal-500 text-white uppercase px-4 py-2 rounded-sm cursor-pointer' type="submit" value='Registration'/>
            </form>
            </div>
        </div>
    );
};

export default Register;