import React from "react";
import background from "../assets/images/background1.jpg"
import { Link } from 'react-router-dom';

const Home = () => {

  const backgroundStyle = {
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundStyle: 'cover',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '100vw',
    height: '100vh'
  }

  return (
    <div className="container" style={ backgroundStyle }>

      <div className="home__card">
      <div className="card-body">
        <h2 className="card-title home__card__title fw-bold">ISM Ryde Brings Music to the Life of your <span className="fw-bold">Child</span></h2>
        <h5 className="card-text">We aim to explore your child's musical creativity through diverse age appropriate programs</h5>
        <button className="card-text home__card__button"><Link to="/Calendar">Check out our classes</Link></button>
      </div>
      </div>
    </div>
  );
};

export default Home;
