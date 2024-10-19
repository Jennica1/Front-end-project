import React from 'react';
import './Button.css';

const Button = ({ onClick, children, type = 'button', variant = 'primary', className = '' }) => {
    return (
        <button className={`custom-button ${variant} ${className}`} type={type} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;

/* <Button onClick={handleClick} variant="">Click Me</Button> */