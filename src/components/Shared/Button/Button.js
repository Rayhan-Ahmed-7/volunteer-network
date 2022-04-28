import React from 'react';

const Button = ({bg,text,hover,children,handleClick}) => {
    return (
        <button onClick={handleClick} className={`${bg} ${hover} transition-colors duration-300 px-4 py-2 rounded-md ${text}`}>
            {children}
        </button>
    );
};

export default Button;