import React, { useContext } from "react";
import "./ProductsCart.css";
import Rating from "./Rating";
import CartContext from "../Context/Cart/CartContext";
import { Link } from "react-router-dom";

function ProductsCart({ item }) {
  const { addToCart } = useContext(CartContext);
  return (
    <div className="productCard__wrapper">
      <div>
        <Link to={`/products/${item.id}`}>
          <img className="productCard__img" src={item.image} alt="" />
        </Link>
        <h4>{item.title}</h4>
        <div className="ProductCard__price">
          <h5>€ {item.price}</h5>
        </div>
        <div className="ProductCard__Rateing">
          <Rating value={item.rating.rate} />
        </div>
        <button className="ProductCard__button" onClick={() => addToCart(item)}>
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductsCart;
