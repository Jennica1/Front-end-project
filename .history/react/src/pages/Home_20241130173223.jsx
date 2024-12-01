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
              <Link to="/explore">
                <Button onClick={handleClick} variant="primary">
                  Explore
                </Button>
              </Link>
              <Link to="/feed">
                <Button onClick={handleClick} variant="primary">
                  Your Feed
                </Button>
              </Link>
            </div>
          </div>
          <div className="cardContainer">
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
    </div>
  );
};

export default Home;
