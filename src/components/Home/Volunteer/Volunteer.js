import React from 'react';

const Volunteer = ({volunteer}) => {
    const {img,name} = volunteer;
    const colors = ['#FFBD3E','#FF7044','#3F90FC','#421FCF'];
    const random = colors[Math.floor(Math.random()*colors.length)];
    console.log(random);
    return (
        <div className='relative rounded-lg overflow-hidden'>
            <img className='relative top-0 w-full' src={img} alt="" />
            <div style={{backgroundColor:random}} className={`w-full h-20 absolute bottom-0 left-0 right-0 text-center`}>
                <h2 className='text-white text-xl mt-4 capitalize'>{name}</h2>
            </div>
        </div>
    );
};

export default Volunteer;