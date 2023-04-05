import React, { useEffect, useState } from "react";
import NewsLetter from "../../components/brands&newsletter/NewsLetter";
import "./proddetails.scss";
import { ImPriceTag } from "react-icons/im";
import { FaCartPlus } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import {
  AddToCart,
  fetchSingleProduct,
} from "../../Redux/reducer/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { AiFillStar } from "react-icons/ai";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [id, dispatch]);

  const { products, loading } = useSelector((state) => state.products);
  const product = products[0];

  const { carts } = useSelector((state) => state.products);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const handleAddToCart = () => {
    dispatch(AddToCart(product.id));
    setIsAddedToCart(true);
    toast.success("Added to cart", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };

  const isItemInCart = carts.some((item) => item.id === product.id);

  const [image, setImage] = useState(null);

  useEffect(() => {
    if (product) {
      setImage(product.image);
    }
  }, [product]);


  return (
    <>
      <div className="prod-details-container">
        {/* {loading && <p style={{ textAlign: "center" }}>loading...</p>} */}
        {products.length > 0 ? (
          <div className="wrapper">
            <div className="details-left">
              <div className="prod-image">
                <img src={!loading && image} alt="loading..." />
              </div>
            </div>


            <div className="details-right">
              <div className="details-info">
                <h3 className="head-category">{product.category}</h3>
                <h2>{product && product.title}</h2>
                <p className="para">{product && product.description}</p>
                <p className="rating">
                  {" "}
                  {product.rating.rate.toFixed(1)}
                  <AiFillStar />
                </p>
                <h3>Price: ₹ {((product && product.price) * 70).toFixed(2)}</h3>

                <h4> Available offers:</h4>

                <p className=" flex gap-1">
                  <span>
                    <ImPriceTag />
                  </span>
                  Bank Offer: 5% Cashback on Flipkart Axis Bank Card T&C
                </p>
                <p className=" flex gap-1">
                  <span>
                    <ImPriceTag />
                  </span>
                  Buy this product and get extra ₹500 off T&C
                </p>

                {!isItemInCart ? (
                  <button onClick={handleAddToCart}>
                    <span>
                      <FaCartPlus />
                    </span>
                    ADD TO CART
                  </button>
                ) : (
                  <button disabled>

                    <Link to="/cart">

                      GO TO CART</Link>
                  </button>
                )}
              </div>
            </div>
          </div>
        ) : <p style={{ textAlign: "center" }} >Sorry! data not found</p>}
      </div>

      <NewsLetter />
    </>
  );
};

export default ProductDetails;
