import React from 'react';
import axios from 'axios';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import card from './assets/baseball-card.jpeg';
import camera from './assets/camera.jpeg';
import art from './assets/modern-art.jpeg';
import pottery from './assets/pottery.jpeg';

const contentStyle = {
  height: '500px',
  color: '#f4d160',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#28527a',
};

const Products = props => {
  return (
    <>
      <Carousel autoplay style={contentStyle}>
        <div style={contentStyle}>
          <img
            style={{ marginLeft: '35%', marginTop: '3%', borderRadius: '4px' }}
            src={card}
          />
          <p className="prod-desc">Collectible Cards</p>
        </div>
        <div style={contentStyle}>
          <img
            style={{ marginLeft: '35%', marginTop: '3%', borderRadius: '4px' }}
            src={art}
          />
          <p className="prod-desc">Modern Art</p>
        </div>
        <div style={contentStyle}>
          <img
            style={{ marginLeft: '38%', marginTop: '3%', borderRadius: '4px' }}
            src={pottery}
          />
          <p className="prod-desc">Handcrafted Pottery</p>
        </div>
        <div style={contentStyle}>
          <img
            style={{ marginLeft: '35%', marginTop: '3%', borderRadius: '4px' }}
            src={camera}
          />
          <p className="prod-desc">Vintage Cameras</p>
        </div>
      </Carousel>
    </>
  );
};

export default Products;
