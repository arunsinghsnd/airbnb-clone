import React from "react";
import Banner from "./Banner";
import "./Home.css";
import Card from "./Card";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/ae675d9d-a658-4acc-854d-b85bca352175.jpg?im_w=960"
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hots"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/b1bfc8ef-4e21-4938-b364-7a09bb1e5aa3.jpg?im_w=960"
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hots"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/ae675d9d-a658-4acc-854d-b85bca352175.jpg?im_w=960"
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hots"
        />
      </div>
      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/ae675d9d-a658-4acc-854d-b85bca352175.jpg?im_w=960"
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hots"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/b1bfc8ef-4e21-4938-b364-7a09bb1e5aa3.jpg?im_w=960"
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hots"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/ae675d9d-a658-4acc-854d-b85bca352175.jpg?im_w=960"
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hots"
        />
      </div>
    </div>
  );
};

export default Home;
