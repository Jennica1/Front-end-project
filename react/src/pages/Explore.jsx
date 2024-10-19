import React from 'react';
import './styles/Explore.css';
import Card from '../Components/Card/Card';

const Explore = () => {
    return (
        <div className='containerExplore'>
            <h1>Explore</h1>
            <div className='recommended'>
                    <div className='category'>
                    <h3>Discover New Music</h3>
                    </div>
                    <div className='cardContainer'>
                        <Card 
                            title="Card Title" 
                            description="This is a small description for the card." 
                            image="https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png" 
                        />
                        <Card 
                            title="Card Title" 
                            description="This is a small description for the card." 
                            image="https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png" 
                        />
                        <Card 
                            title="Card Title" 
                            description="This is a small description for the card." 
                            image="https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png" 
                        />
                        <Card 
                            title="Card Title" 
                            description="This is a small description for the card." 
                            image="https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png" 
                        />
                        <Card 
                            title="Card Title" 
                            description="This is a small description for the card." 
                            image="https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png" 
                        />
                    </div>
                </div>
                <div className='recommended'>
                    <div className='category'>
                    <h3>Follow New Artists</h3>
                    </div>
                    <div className='cardContainer'>
                        <Card 
                            title="Card Title" 
                            description="This is a small description for the card." 
                            image="https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png" 
                        />
                        <Card 
                            title="Card Title" 
                            description="This is a small description for the card." 
                            image="https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png" 
                        />
                        <Card 
                            title="Card Title" 
                            description="This is a small description for the card." 
                            image="https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png" 
                        />
                        <Card 
                            title="Card Title" 
                            description="This is a small description for the card." 
                            image="https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png" 
                        />
                        <Card 
                            title="Card Title" 
                            description="This is a small description for the card." 
                            image="https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png" 
                        />
                    </div>
                </div>
                <div className='recommended'>
                    <div className='category'>
                    <h3>For You</h3>
                    </div>
                    <div className='cardContainer'>
                        <Card 
                            title="Card Title" 
                            description="This is a small description for the card." 
                            image="https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png" 
                        />
                        <Card 
                            title="Card Title" 
                            description="This is a small description for the card." 
                            image="https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png" 
                        />
                        <Card 
                            title="Card Title" 
                            description="This is a small description for the card." 
                            image="https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png" 
                        />
                        <Card 
                            title="Card Title" 
                            description="This is a small description for the card." 
                            image="https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png" 
                        />
                        <Card 
                            title="Card Title" 
                            description="This is a small description for the card." 
                            image="https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png" 
                        />
                    </div>
                </div>
        </div>
    );
};

export default Explore;
