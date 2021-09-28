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
    <div className="products__wrapper">
      {items && items.map((item) => <ProductsCart key={item.id} item={item} />)}
    </div>
  );
}

export default HomeScreen;
