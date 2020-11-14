import React from "react";
import "./Product.css";

function Product({ id, title, price, image, rating }) {
  return (
    <div className="product">
    <img src={image} alt="" />
      <div className="product_info">
        <p>{title} </p>
        <div className="product_rating">
              <button>{rating}</button>
        </div>
      </div>
    </div>
  );
}


export default Product;
