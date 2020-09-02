import React from 'react';
import addIcon from '../assets/img/add-icon.svg';
import subIcon from '../assets/img/sub-icon.svg';

const Card = ({ urlImage, salePrice, title, description }) => {


  return (
    <div className="home__card ">
      <div className="home__card--img">
        <img src={urlImage} alt="card-image" />
        <h4 className="home__card--price">
          ${salePrice}
        </h4>
        <div className="home__card--buttons">
          <button><img src={addIcon} alt="addToCart" /></button>
          <button><img src={subIcon} alt="subToCart" /></button>
        </div>
      </div>
      <h3 className="home__card--title">{title}</h3>
      <p className="home__card--description">{description}</p>
    </div>
  );
};

export default Card;
