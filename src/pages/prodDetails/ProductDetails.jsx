import React, { useEffect, useState } from "react";
import NewsLetter from "../../components/brands&newsletter/NewsLetter";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./proddetails.scss";
import { ImPriceTag } from "react-icons/im";
import { FaCartPlus } from "react-icons/fa";
import { BsFillCartCheckFill } from "react-icons/bs";
import { useParams } from "react-router-dom";
import {
  AddToCart,
  fetchSingleProduct,
} from "../../Redux/reducer/productSlice";
import { useDispatch, useSelector } from "react-redux";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [id]);

  const { products, loading } = useSelector((state) => state.products);
  const product = products[0];

  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const handleAddToCart = () => {
    dispatch(AddToCart(product.id));
    setIsAddedToCart(true);
  };

  return (
    <>
      <Navbar />

      <div className="prod-details-container">
        <div className="wrapper">
          <div className="details-left">
            <img src={product && product.image} alt="" />
          </div>
          <div className="details-right">
            <div className="details-info">
              <h2>{product && product.title}</h2>
              <p>{product && product.description}</p>
              <h3>Price: $ {product && product.price}</h3>

              <h4> Available offers:</h4>

              <p>
                <span>
                  <ImPriceTag />
                </span>
                Bank Offer: 5% Cashback on Flipkart Axis Bank Card T&C
              </p>
              <p>
                <span>
                  <ImPriceTag />
                </span>
                Buy this product and get extra ₹500 off T&C
              </p>

              {!isAddedToCart ? (
                <button onClick={handleAddToCart}>
                  <span>
                    <FaCartPlus />
                  </span>
                  Add to cart
                </button>
              ) : (
                <button disabled>
                  <span>
                    <BsFillCartCheckFill />
                  </span>
                  Added to cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <NewsLetter />
      <Footer />
    </>
  );
};

export default ProductDetails;
