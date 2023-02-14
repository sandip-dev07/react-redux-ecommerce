import React, { useState } from "react";
import "./prodcard.scss";
import { Link } from "react-router-dom";
import {AiFillStar} from 'react-icons/ai'

const ProductCard = ({ products }) => {
  return (
    <>
      {products.map((item) => {

        return (
          <div className="product-card" key={`${item.id}`}>
            <Link to={`/products/${item.id}`}>
              <div className="prod-img">
                <img src={item.image} alt="" />
              </div>
              <div className="prod-details">
                <h3 className="head-category">{item.category}</h3>
                <p>{item.title}</p>
                <p className="rating">
                  {(item.rating.rate)}<AiFillStar/>
                </p>
                <h4>₹{((item.price)*70).toFixed(2)}</h4>
                
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default ProductCard;
