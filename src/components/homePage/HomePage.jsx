import React from 'react';
import background from '../../assets/img/bg_main.jpg';
import logo from '../../assets/img/logo.svg';
import './HomePage.scss';

export const HomePage = () => {

  return (
    <div className="home" style={{ backgroundImage: `url(${background})` }}>
      <div className="home__header">
        <img src={logo} alt="Gedzio logo" />
      </div>


    </div>
  );
};