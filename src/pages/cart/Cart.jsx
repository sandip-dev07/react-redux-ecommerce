import React from "react";
import NewsLetter from "../../components/brands&newsletter/NewsLetter";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./cart.scss";
import image1 from "../../assets/product-image1.jpg";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { RemoveCart } from "../../Redux/reducer/productSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const { carts } = useSelector((state) => state.products);
  const totalPrice = carts.reduce((acc, a) => {
    return acc + a.price;
  }, 0);
  const discountAmount = (totalPrice * 0.1).toFixed(2);
  const finalPrice = (totalPrice - discountAmount).toFixed(2);

  return (
    <>
      <Navbar />
      <div className="card-wrapper">
        <div className="cart-items">
          {carts && Object.keys(carts).length > 0 ? (
            <>
              {carts.map((item) => {
                return (
                  <div key={item.id} className="cart-card">
                    <img src={item.image} alt="" />
                    <div className="details">
                      <p> {item.title}</p>
                      <h5> ${item.price}</h5>

                      <button
                        onClick={() => dispatch(RemoveCart(item.id))}
                        className="btn"
                      >
                        <MdDeleteOutline />
                      </button>
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            <div className="empty">
              <p>Your cart is empty</p>
              <Link to="/">
                <BiArrowBack /> Back to shopping
              </Link>
            </div>
          )}
        </div>
        <div className="cart-total-price">
          <h3>Price Details</h3>
          <div className="price-count">
            <p>
              price({carts.length} items) : <span>$ {totalPrice}</span>
            </p>
            <p>
              discount : <span> 10%</span>
            </p>

            <h4>
              Total Price : <span>$ {finalPrice}</span>
            </h4>
            <button>Place order</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
