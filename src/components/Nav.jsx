import "./Nav.css";
import { useContext } from "react";
import CartContext from "../Context/Cart/CartContext";

const Nav = () => {
  const { cartItem, showHideCart } = useContext(CartContext);

  return (
    <nav>
      <div className="nav__left">TopShop</div>
      <div className="nav__middle">
        <div className="input__wrapper">
          <input type="text" />
          <i className="fas fa-search" />
        </div>
      </div>
      <div className="nav__right">
        <div className="cart__icon">
          <i
            className="fa fa-shopping-cart"
            aria-hidden="true"
            onClick={showHideCart}
          />
          {cartItem.length > 0 && (
            <div className="item__count">
              <span>{cartItem.length}</span>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
