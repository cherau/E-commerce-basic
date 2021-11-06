import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <div
      className="home"
      style={{
        backgroundImage: `url(https://img.freepik.com/free-photo/magnificent-woman-long-bright-skirt-dancing-studio-carefree-inspired-female-model-posing-with-pleasure-yellow_197531-11084.jpg?size=626&ext=jpg)`
      }}
    >
      <div className="headerContainer">
        <h1> ShopCode </h1>
        <p> YOU NAME IT, WE'VE GOT IT</p>
        <Link to="/categories">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
