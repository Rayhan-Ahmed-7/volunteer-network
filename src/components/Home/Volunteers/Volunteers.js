import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Volunteer from '../Volunteer/Volunteer';

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
        <div className='w-10/12 mx-auto mt-12'>
            <div className='grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-1 md:grid-cols-2  gap-4'>
            {
                volunteers.map(volunteer=><Volunteer key={volunteer._id} volunteer={volunteer}></Volunteer>)
            }
            </div>
        </div>
    );
};

export default Volunteers;