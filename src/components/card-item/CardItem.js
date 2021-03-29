import React from "react";
import { Link } from "react-router-dom";

import './CardItem.css';

const CardItem = (props) => {
  const { src, text, label, path, alt } = props;

  return (
    <>
      <li className="cards-item">
        <Link className="cards-item-link" to={ path }>
          <figure className="cards-item-pic-wrap" data-category={ label }>
            <img src={ src } alt={ alt } className="cards-item-img"/>
          </figure>
          <div className="cards-item-info">
            <h3 className="cards-item-text">
              { text }
            </h3>
          </div>
        </Link>
      </li>
    </>
  );
};

export default CardItem;