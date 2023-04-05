import React, { useEffect, useState } from "react";
import { Link, useNavigate, createSearchParams } from "react-router-dom";
import "./navbar.scss";
import logo from "../../assets/logo.png";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { RiMenu3Fill, RiMenu2Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { fetchByCategory, searchProducts } from "../../Redux/reducer/productSlice";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {

  }, []);
  const { carts } = useSelector((state) => state.products);
  const navigate = useNavigate();

  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();

  const handleInput = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchInput.trim().length) {

      navigate(`/search/?${createSearchParams({ q: searchInput })}`);
      dispatch(searchProducts(searchInput));
    }
    setSearchInput("")
  };

  const menuHandleClick = (category) => () => {
    setIsOpen(true);
    navigate(`/category/${category}`);
    dispatch(fetchByCategory(category));
  };

  return (
    <>
      <nav className="nav-container">
        {/* desktop */}
        <div className="wrapper-desk">
          <div className="logo">

            <img className="image" src={logo} alt="" />
            <Link to="/">
              <h3 className="font-bold">REDUX</h3>
            </Link>
          </div>
          <div className="search">
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                placeholder="Search here..."
                value={searchInput}
                onChange={handleInput}
              />
            </form>
          </div>
          <div className="links">
            <div className="user ">
              <Link to="/login">
                <FaUser /> Login
              </Link>
            </div>

            <Link to="/cart">
              <div className="cart">
                <span className="count">{carts.length}</span>
                <FaShoppingCart />
              </div>
            </Link>
          </div>
        </div>
        {/* desktop */}
        {/* mobile */}
        <div className="wrapper-mob">
          <div className="logo">
            <div onClick={() => {
              setIsOpen(false)
            }} className="menu-btn">
              <RiMenu2Fill size={20} />
            </div>
            <img className="mob-img" src={logo} alt="" />
            <Link to="/">
            <h3 className="font-bold">REDUX</h3>
            </Link>
          </div>

          <div className="links">
          <div className="user ">
              <Link to="/login">
                <FaUser /> Login
              </Link>
            </div>

            <Link to="/cart">
              <div className="cart">
                <span className="count">{carts.length}</span>
                <FaShoppingCart />
              </div>
            </Link>
          </div>
        </div>
        <div className="search-mobile">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Search here..."
              value={searchInput}
              onChange={handleInput}
            />
          </form>
        </div>
        {/* mobile */}

      </nav>
      <div className="category">
        <div className={isOpen ? "menu-container" : "menu-container-view"}>
          <ul className="menu-items">
            <div onClick={() => {
              setIsOpen(true)
            }} className="menu-close">
              <RxCross2 size={25} />
            </div>
            <li onClick={menuHandleClick(("men's clothing"))}>
              <Link>Mens</Link>
            </li>
            {/* | */}
            <span className="line">|</span>
            <li onClick={menuHandleClick(("women's clothing"))}>
              <Link>Womens</Link>
            </li>
            {/* | */}
            <span className="line">|</span>
            <li onClick={menuHandleClick(("jewelery"))}>
              <Link>Jewelery</Link>
            </li>
            {/* | */}
            <span className="line">|</span>
            <li onClick={menuHandleClick(("electronics"))}>
              <Link>Electronics</Link>

            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
