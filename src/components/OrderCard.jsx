import React from 'react';
import HeaderImage from '../assets/illustration-hero.svg';
import MusicIcon from '../assets/icon-music.svg';

export default function OrderCard() {
  return (
    <div className="card-container">
      <div className="card-header"><img src={HeaderImage} alt="header image" /></div>
      <div className="card-body">
        <div className="card-body-text-container">
          <h1 className="card-body-title">Order Summary</h1>
          <p className="card-body-paragraph">You can now listen to millions of songs, audiobooks and podcasts on any device anywhere you like!</p>
        </div>
        <div className="plan-selection-container">
          <div className="plan-info">
            <div className="plan-info-img-container">
              <img src={MusicIcon} alt="music icon" />
            </div>
            <div className="plan-info-text-container">
              <h1>Annual Plan</h1>
              <p>$59.99/year</p>
            </div>
          </div>
          <button className='change-btn'>Change</button>
        </div>
        <button className="proceed-btn">Proceed to Payment</button>
        <button className="cancel-btn">Cancel Order</button>
      </div>
    </div>
  )
}
