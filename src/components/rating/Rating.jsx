import React from "react";
import { v4 as uuidv4 } from "uuid";

function Rating({ value, text, color }) {
  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((rate) => (
        <span key={uuidv4()}>
          <i
            style={{ color }}
            className={
              value + 1 === rate + 0.5
                ? "fas fa-star-half-alt"
                : value >= rate
                ? "fas fa-star"
                : "far fa-star"
            }
          ></i>
        </span>
      ))}
      <span>{text && text}</span>
    </div>
  );
}
Rating.defaultProps = {
  color: "#d8c3a5",
};

export default Rating;
