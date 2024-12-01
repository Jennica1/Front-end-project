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
                            title="DELUSIONAL" 
                            description="Kesha" 
                            image="https://upload.wikimedia.org/wikipedia/en/1/17/Kesha_-_Delusional_cover.jpeg" 
                        />
                        <Card 
                            title="Noid" 
                            description="Tyler, The Creator" 
                            image="https://upload.wikimedia.org/wikipedia/en/thumb/5/5b/Chromakopia_CD_cover.jpg/220px-Chromakopia_CD_cover.jpg" 
                        />
                        <Card 
                            title="luther (with SZA)" 
                            description="Kendrick Lamar ft. SZA" 
                            image="https://upload.wikimedia.org/wikipedia/en/thumb/9/93/Kendrick_Lamar_-_GNX.png/220px-Kendrick_Lamar_-_GNX.png" 
                        />
                        <Card 
                            title="APT." 
                            description="ROSÉ, Bruno Mars" 
                            image="https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Ros%C3%A9_and_Bruno_Mars_-_Apt..png/220px-Ros%C3%A9_and_Bruno_Mars_-_Apt..png" 
                        />
                        <Card 
                            title="Taste" 
                            description="Sabrina Carpenter" 
                            image="https://upload.wikimedia.org/wikipedia/en/f/fd/Short_n%27_Sweet_-_Sabrina_Carpenter.png" 
                        />
                    </div>
                </div>
                <div className='recommended'>
                    <div className='category'>
                    <h3>Follow New Artists</h3>
                    </div>
                    <div className='cardContainer'>
                        <Card 
                            title="Chappell Roan"  
                            image="https://upload.wikimedia.org/wikipedia/commons/c/c3/Chappell_Roan_%40_Hollywood_Palladium_11_18_2022_%2853886572991%29.jpg" 
                        />
                        <Card 
                            title="Teezo Touchdown" 
                            image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Teezo_Touchdown_For_Vogue_2023.jpg/640px-Teezo_Touchdown_For_Vogue_2023.jpg" 
                        />
                        <Card 
                            title="The Last Dinner Party" 
                            image="https://static1.squarespace.com/static/600f257503ab2e14c15b2d5a/600f7c1fec2f456c26b3dc2a/659f32921352d5642a59e2ba/1704984042089/TheLastDinnerParty.png?format=1500w" 
                        />
                        <Card 
                            title="Flyana Boss"  
                            image="https://res-3.cloudinary.com/synchtank-com/image/upload/s--6DB-aa73--/c_fill,g_auto/q_auto:eco/v1637704779/object-275534068.jpg" 
                        />
                        <Card 
                            title="The Beaches" 
                            image="https://i.scdn.co/image/ab6761610000e5ebc7c0ae97950dc81c8e0c2a3c" 
                        />
                    </div>
                </div>
                <div className='recommended'>
                    <div className='category'>
                    <h3>For You</h3>
                    </div>
                    <div className='cardContainer'>
                        <Card 
                            title="Disease" 
                            description="Lady Gaga" 
                            image="https://upload.wikimedia.org/wikipedia/en/d/de/Lady_Gaga_-_Disease.png" 
                        />
                        <Card 
                            title="BIRDS OF A FEATHER" 
                            description="Billie Eilish" 
                            image="https://upload.wikimedia.org/wikipedia/en/a/aa/Billie_Eilish_-_Hit_Me_Hard_and_Soft.png" 
                        />
                        <Card 
                            title="In My Bag (feat. GloRilla)" 
                            description="FLO, GloRilla" 
                            image="https://i.scdn.co/image/ab67616d0000b273bbd7cdc79869f83f8b6daf49" 
                        />
                        <Card 
                            title="Two Faced" 
                            description="Linkin Park" 
                            image="https://i.scdn.co/image/ab67616d0000b273c1783b85101ebf6d41a2dcbf" 
                        />
                        <Card 
                            title="Girls" 
                            description="The Dare" 
                            image="https://i.scdn.co/image/ab67616d0000b273e9449b09bfc40d74ba9e5065" 
                        />
                    </div>
                </div>
        </div>
    );
};

export default Explore;
