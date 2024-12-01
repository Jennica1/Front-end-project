import React from "react";
import "./styles/Home.css";
import { Link } from "react-router-dom";
import Button from "../Components/Button/Button";
import Sidebar from "../Components/Sidebar/Sidebar";
import Card from "../Components/Card/Card";

const Home = () => {
  const handleClick = () => {
    // Optional click handler logic
  };


  return (
    <div>
      <div className="container">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="recommended">
          <div className="category">
            <h3>Recommended</h3>
            <div className="btn-group">
              <Link className="btn" to="/explore">
                <Button  onClick={handleClick} variant="primary">
                  Explore
                </Button>
              </Link>
              <Link to="/feed" className="btn">
                <Button  onClick={handleClick} variant="primary">
                  Your Feed
                </Button>
              </Link>
            </div>
                    </div>
                    <div className='cardContainer'>
                        <Card 
                            title="St. Chroma" 
                            description="Tyler, The Creator (feat. Daniel Caesar)" 
                            image="https://upload.wikimedia.org/wikipedia/en/thumb/5/5b/Chromakopia_CD_cover.jpg/220px-Chromakopia_CD_cover.jpg" 
                        />
                        <Card 
                            title="Club Classics" 
                            description="Charli XCX" 
                            image="https://upload.wikimedia.org/wikipedia/commons/6/60/Charli_XCX_-_Brat_%28album_cover%29.png" 
                        />
                        <Card 
                            title="HOT TO GO!" 
                            description="Chappell Roan" 
                            image="https://upload.wikimedia.org/wikipedia/en/3/34/Chappell_Roan_-_The_Rise_and_Fall_of_a_Midwest_Princess.png" 
                        />
                        <Card 
                            title="Redbone" 
                            description="Childish Gambino" 
                            image="https://upload.wikimedia.org/wikipedia/en/1/10/Childish_Gambino_-_Awaken%2C_My_Love%21.png" 
                        />
                        <Card 
                            title="Dark Red" 
                            description="Steve Lacy" 
                            image="https://cdn-images.dzcdn.net/images/cover/19e761f5efadd86098265258cb4e3615/500x500.jpg" 
                        />
                    </div>
                </div>
      </div>
    </div>
  );
};

export default Home;