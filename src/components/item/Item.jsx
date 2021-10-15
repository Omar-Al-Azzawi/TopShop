import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import Rating from "../rating/Rating";
import CartContext from "../../Context/Cart/CartContext";

import "./Item.css";

function Item() {
  const { id } = useParams();
  const [items, setItems] = useState("");
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div>
      {items &&
        items
          // eslint-disable-next-line eqeqeq
          .filter((item) => item.id == id)
          .map((item, idx) => (
            <div className="item_container" key={idx}>
              <div className="img_container">
                <img src={item.image} alt="" />
              </div>
              <div className="item_content">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <div className="rating_container">
                  <p className="rate">€{item.price}</p>
                  <Rating value={item.rating.rate} />
                  <p>{item.rating.count} pes</p>
                  <button
                    className="ProductCard__button"
                    onClick={() => addToCart(item)}
                  >
                    Add to cart <i className="fa fa-shopping-cart"></i>
                  </button>
                  <button
                    className="ProductCard__button"
                    onClick={() => {
                      window.history.back();
                    }}
                  >
                    Go back <i className="fas fa-chevron-left"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
    </div>
  );
}

export default Item;
