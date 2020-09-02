import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Categories.scss';


const Categories = ({cat1, cat2, cat3, cat4, cat5}) => {
  return (
    <div className="category">
      <Link className="category__item" to="/">
        <p>{cat1}</p>
      </Link>
      <Link className="category__item" to="/">
        <p>{cat2} </p>
      </Link>
      <Link className="category__item" to="/">
        <p>{cat3}</p>
      </Link>
      <Link className="category__item" to="/">
        <p>{cat4}</p>
      </Link>
      <Link className="category__item" to="/">
        <p>{cat5}</p>
      </Link>
    </div>
  );
};

export default Categories;
