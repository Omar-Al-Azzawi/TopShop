import React, { useState, useEffect } from "react";
import "./HomeScreen.css";
import ProductsCart from "../components/ProductsCart";

function HomeScreen() {
  const [items, setItems] = useState("");
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <>
      <div className="products__wrapper">
        {items &&
          items.map((item) => <ProductsCart key={item.id} item={item} />)}
      </div>
      <button
        className="ProductCard__button"
        onClick={() => {
          window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
        }}
      >
        Go up <i className="fas fa-chevron-up"></i>
      </button>
    </>
  );
}

export default HomeScreen;
