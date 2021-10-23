import React, { useState, useEffect } from "react";
import ProductsCart from "../components/products/ProductsCart";

import "./HomeScreen.css";

function HomeScreen() {
  const [items, setItems] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <>
      <div className="search">
        <input
          type="text"
          placeholder="Serach..."
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <div className="products__wrapper">
        {items &&
          items
            .filter((val) => {
              if (search === "") {
                return val;
              } else if (
                val.title.toLowerCase().includes(search.toLowerCase())
              ) {
                return val;
              }
            })
            .map((item) => <ProductsCart key={item.id} item={item} />)}
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
