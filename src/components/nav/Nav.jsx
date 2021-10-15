import { useContext } from "react";
import { Link } from "react-router-dom";

import CartContext from "../../Context/Cart/CartContext";

import "./Nav.css";

const Nav = () => {
  const { cartItem, showHideCart } = useContext(CartContext);

  return (
    <nav>
      <div className="nav__left">
        <Link to="/">
          <h3>TopShop</h3>
        </Link>
      </div>
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
