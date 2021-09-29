import React, { useState, useEffect } from "react";
import "./Item.css";
import { useParams } from "react-router-dom";
import Rating from "./Rating";

function Item() {
  const { id } = useParams();
  const [items, setItems] = useState("");
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
                  <p>€{item.price}</p>
                  <Rating className="rate" value={item.rating.rate} />
                  <p>{item.rating.count} pes</p>
                </div>
              </div>
            </div>
          ))}
    </div>
  );
}

export default Item;
