import React, { useState } from "react";
import "./cart.scss";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { RemoveCart } from "../../Redux/reducer/productSlice";
import { toast } from "react-toastify";

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
      {/* <Navbar /> */}
      <div className="card-wrapper">
        <div className="cart-items">
          {carts && Object.keys(carts).length > 0 ? (
            <>
              {carts.map((item) => {
                return (
                  <div key={item.id} className="cart-card">
                    <Link to={`/products/${item.id}`}>
                      <img src={item.image} alt="" />
                    </Link>
                    <div className="details">
                      <div className="details-price">
                        <p> {item.title}</p>
                      </div>

                      <div className="quantity-btn">
                        <h5>₹{(item.price * 70).toFixed(2)}</h5>

                        <button
                          onClick={() =>{
                            dispatch(RemoveCart(item.id))
                            toast.error("Removed from cart", {
                              position: toast.POSITION.BOTTOM_RIGHT,
                            });
                          }}
                          className="btn"
                        >
                          <MdDeleteOutline />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            <div className="empty">
              <p>Your cart is empty</p>
              <Link to="/" className=" flex items-center gap-1">
                <BiArrowBack /> Back to shopping
              </Link>
            </div>
          )}
        </div>
        <div className="cart-total-price">
          <h4>Price Details</h4>
          <div className="price-count">
            <p>
              price({carts.length} items) :{" "}
              <span>₹ {(totalPrice * 70).toFixed(2)}</span>
            </p>
            <p>
              discount : <span> 10%</span>
            </p>

            <h4>
              Final Price : <span>₹ {(finalPrice * 70).toFixed(2)}</span>
            </h4>
            <button className="order-btn">Place order</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
