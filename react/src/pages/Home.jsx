import React from 'react';
import './styles/Home.css';
import Button from '../Components/Button';
import Sidebar from '../Components/Sidebar'; 

const Home = () => {
    const handleClick = () => {
        alert('Button clicked!');
    };

    return (
        <div className='container'>
            <h1>Home Page</h1>
            <div className='sidebar'>
                <Sidebar />
            </div>
            <div className='recommended'>
                
            </div>
        </div>
    );
};

export default Home;
