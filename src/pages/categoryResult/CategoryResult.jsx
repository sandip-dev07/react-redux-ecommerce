
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import ProductCard from "../../components/prodCard/ProductCrad";
import "./categoryResult.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchByCategory,
} from "../../Redux/reducer/productSlice";
import { useParams } from "react-router-dom";



const CategoryResult = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.products);
  const { category } = useParams();

  useEffect(() => {
    dispatch(fetchByCategory(category));
  }, [category, dispatch]);
  
  return (
    <div className="search-container">
      <h3 className="head">{category}
      </h3>
      <section className="search-section">
        {loading && <p style={{ textAlign: "center" }}>loading...</p>}
        {!loading && (!products || !products.length) ? (
          <>
            <div className="empty">
              <p>No products found</p>
              <Link to="/">
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
}

export default CategoryResult