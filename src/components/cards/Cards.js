import React from "react";
import CardItem from "../card-item";

import './Cards.css';

const Cards = () => {
  return (
    <div className="cards">
      <h2>Check out this EPIC Destinations!</h2>
      <div className="cards-container">
        <div className="cards-wrapper">
          <ul className="cards-items">
            <CardItem
              src="images/img-9.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
              alt="Travel Image"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Luxury"
              path="/services"
              alt="Travel Image"
            />
          </ul>
          <ul className="cards-items">
            <CardItem
              src="images/img-3.jpg"
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Mystery"
              path="/services"
              alt="Travel Image"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Experience Football on Top of the Himilayan Mountains"
              label="Adventure"
              path="/products"
              alt="Travel Image"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="/sign-up"
              alt="Travel Image"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;