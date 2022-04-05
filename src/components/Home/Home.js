import React from "react";
import b_img from '../image/b_img.jpg';
import './Home.css'
const Home = () => {
  return (
    <div>
      <div className="cozy-library-info">
        <div>
          <h1>Cartoon Book's World !!</h1>
          <p>
            “Yesterday is history, tomorrow is a mystery, and today is a gift...
            that's why they call it the present” - Master Oogway, 'Kung Fu
            Panda’.
          </p>
        </div>
        <div>
            <img src={b_img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
