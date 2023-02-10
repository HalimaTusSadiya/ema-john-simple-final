import React from "react";
import "./Product.css";

const Product = (props) => {
  const { img, name, price, seller, stock } = props.product;
  return (
    <div className="product">
        <div className="product-image">
            <img src={img} alt="" />
        </div>
        <div className="product-info">
            <h4 className="product-name"><small>{name}</small> </h4>
            <p>by:{seller}</p>
            <br />
            <h3>${price}</h3>
            <p>only {stock} left in stock-order soon</p>
            <button className="add-to-cart"  onClick={()=> props.handleProduct(props.product)}>
              &nbsp;add to cart
            </button>
        </div>
    </div>
  );
};

export default Product;