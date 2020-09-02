import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import '../assets/styles/pages/Home.scss';

import Categories from '../components/Categories'
import Card from '../components/Card';
import useInitialState from '../utils/useInitialState';

const API = 'http://localhost:3000/data';
// const API = 'https://api.bestbuy.com/v1/products((categoryPath.id=abcat0502000))?apiKey=1j1YhDjYS09nEL9TBG2ab8OJ&pageSize=24&format=json';


const Home = () => {
  const initialState = useInitialState(API);
  console.log(initialState);
  return initialState.carts === 0 ? (
    <h1> Loading...</h1>) : (

    <section>
      {initialState.categories !== undefined &&
        initialState.categories.length > 0 &&
        initialState.categories.map(item => <Categories {...item} />)}
      <Categories />
      <main className="home">
      {initialState.carts !== undefined &&
        initialState.carts.length > 0 &&
        initialState.carts.map(item => <Card {...item} />)}
      </main>
    </section>
  );
};

export default Home;
