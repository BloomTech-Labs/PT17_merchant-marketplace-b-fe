import React, { useState, useEffect } from 'react';
import MainNavBar from '../../common/mainNavBar';
import './landing.css';
import BrowserBar from '../../common/browserBar';
// importing products carousel here
import Products from '../../common/products/index';
import axios from 'axios';
import { getExampleData } from '../../../api/index';
import sculptor from './assets/sculptor.jpeg';
import trinkets from './assets/trinkets.jpeg';
import vintage from './assets/vintage-vinyl.jpeg';
import { Carousel } from 'antd';

const Landing = () => {
  // setting product state
  const [products, setProducts] = useState([]);

  // isolating 4 elements for prop array
  // instantiate empty array
  let newProducts = [];
  // loop through response data array to isolate just the images
  for (let i = 0; i < products.length; i++) {
    newProducts.push(products[i].image);
  }
  // create a final array of only 4 images to pass down
  let prodCarousel = newProducts.slice(0, 4);

  return (
    <>
      <div>
        <MainNavBar />
        <section className="browse">
          <h1 className="title-1">Browse your favorite local store here!</h1>
          <h1>Support your community's business!</h1>
          <div className="browse-bar">
            {' '}
            <BrowserBar />
          </div>
        </section>
        {/* drills down 4 isolated names -> */}
        <Products
          image1={prodCarousel[0]}
          image2={prodCarousel[1]}
          image3={prodCarousel[2]}
          image4={prodCarousel[3]}
        />
        {/* uses typical map method to drill down entire array -> */}
        {/* {products.map((product, id) => {
          return (
            <Products key={product.id} id={product.id} name={product.name} />
          );
        })} */}
        {/* render Products carousel here */}
        <h1 className="title-2">Top rated merchants</h1>
        <div className="top-rated">
          <div className="merch-img">
            {' '}
            <img className="top-merchant" src={sculptor} />
            <p className="merch-name">SkulptD</p>
            <p className="merch-city">San Francisco, CA</p>
          </div>
          <div className="merch-img">
            <img className="top-merchant" src={trinkets} />
            <p className="merch-name">TrinketsNMore</p>
            <p className="merch-city">Bennington, VT</p>
          </div>
          <div className="merch-img">
            <img className="top-merchant" src={vintage} />
            <p className="merch-name">Vinatge Vinyl</p>
            <p className="merch-city">Austin, TX</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
