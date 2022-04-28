import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Volunteers = () => {
    const [volunteers,setVolunteers] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:5000/members')
        .then(res=>{
            console.log(res.data);
            setVolunteers(res.data);
        })
    },[])
    return (
        <div className='w-10/12 mx-auto'>
            <div className=''>

            </div>
        </div>
    );
};

export default Volunteers;