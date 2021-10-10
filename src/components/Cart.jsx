import React, { useContext } from "react";
import "./Cart.css";
import CartContext from "../Context/Cart/CartContext";
import CartItem from "./CartItem";

function Cart() {
  const { showCart, cartItem, showHideCart } = useContext(CartContext);
  return (
    <>
      {showCart && (
        <div className="cart__wrapper">
          <div style={{ textAlign: "right" }}>
            <i
              style={{ cursor: "pointer" }}
              className="fa fa-times-circle"
              aria-hidden="true"
              onClick={showHideCart}
            ></i>
          </div>
          <div className="cart__innerWrapper">
            {cartItem.length === 0 ? (
              <h4>Cart is Empty</h4>
            ) : (
              <ul>
                {cartItem.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </ul>
            )}
          </div>
          <div className="Cart__cartTotal">
            <div>Cart Total</div>
            <div></div>
            <div style={{ marginLeft: 5 }}>
              {cartItem.reduce((amount, item) => item.price + amount, 0)}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default Cart;
