import React, { useEffect, useState } from "react";
import "./productlist.scss";
import ProductCard from "../../components/prodCard/ProductCrad";

import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllProducts,
  searchProducts,
  fetchByCategory,
} from "../../Redux/reducer/productSlice";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState("");
  const [query, setQuery] = useSearchParams();

  const searchInput = query.get("q");

  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    const fetchProducts = async () => {
      let products;

      if (searchInput) {
        products = await dispatch(searchProducts(searchInput));
      } else if (category) {
        products = await dispatch(fetchByCategory(category));
      } else {
        products = await dispatch(fetchAllProducts());
      }

      setProduct(products);
    };

    fetchProducts().catch(console.error);
  }, [searchInput, category]);

  const handleOnClick = (value) => {
    setCategory(value);
    setQuery("category", value);
  };

  return (
    <div id="prod-section" className="wrapper-container">
      <h3>
      {category ? `${category.toUpperCase()}` : "All Products"}

</h3>
      <div className="category">
        <button onClick={() => handleOnClick("")} className="category-btn">
          All
        </button>
        <button
          onClick={() => handleOnClick("men's clothing")}
          className="category-btn"
        >
          Mens
        </button>
        <button
          onClick={() => handleOnClick("women's clothing")}
          className="category-btn"
        >
          Womens
        </button>
        <button
          onClick={() => handleOnClick("jewelery")}
          className="category-btn"
        >
          Jewellery
        </button>
        <button
          onClick={() => handleOnClick("electronics")}
          className="category-btn"
        >
          Electronics
        </button>
      </div>
      <section className="prod-section">
        {loading && <p style={{ textAlign: "center" }}>loading...</p>}
        {!loading && (!products || !products.length) ? (
          <>
            <div className="empty">
              <p>No products found</p>
              <Link to="/">
                <BiArrowBack /> Back to home
              </Link>
            </div>
          </>
        ) : (
          <ProductCard products={products} />
        )}
      </section>
    </div>
  );
};

export default ProductList;
