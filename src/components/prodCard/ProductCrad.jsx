import React from "react";
import "./prodcard.scss";
import { Link } from "react-router-dom";

const ProductCard = ({ products }) => {
  return (
    <>
      {products.map((item) => {
        return (
          <div className="prod-card" key={`${item.id}`}>
            <Link to={`/products/${item.id}`}>
              <div className="img-box">
                <img src={`${item.image}`} alt="product-img" />
              </div>
              <p>{`${item.title}`}</p>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default ProductCard;
