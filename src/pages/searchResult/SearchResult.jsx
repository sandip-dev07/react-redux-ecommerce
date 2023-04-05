import React, { useEffect, useState } from "react";
import "./searchResult.scss";
import ProductCard from "../../components/prodCard/ProductCrad";

import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllProducts,
  searchProducts,
} from "../../Redux/reducer/productSlice";
import { Link, useLocation } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const SearchResult = () => {
  const [product, setProduct] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchInput = searchParams.get("q");

  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.products);

  useEffect(() => {
    const fetchProducts = async () => {
      let fetchAction;
      if (searchInput) {
        fetchAction = searchProducts(searchInput);
      } else {
        fetchAction = fetchAllProducts();
      }
      const response = await dispatch(fetchAction);
      setProduct(response);
    };
    fetchProducts().catch(console.error);
  }, [searchInput]);

  return (
    <div className="search-container">
      <h3 className="head">Results : {searchInput}</h3>
      <section className="search-section">
        {loading && <p style={{ textAlign: "center" }}>loading...</p>}
        {!loading && (!products || !products.length) ? (
          <>
            <div className="empty">
              <p>No products found</p>
              <Link to="/" className=" flex items-center gap-1">
                <BiArrowBack /> Back to home
              </Link>
            </div>{" "}
          </>
        ) : (
          <ProductCard products={products} />
        )}
      </section>
    </div>
  );
};

export default SearchResult;
