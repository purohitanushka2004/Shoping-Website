import React from "react";
import Logo from "../../Assets/samm.jpg";
import "./Header.css";
import { ImSearch } from "react-icons/im";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import { UseStatevalue } from "../stateProvider";

const header = () => {
  const [{ basket, user }, dispatch] = UseStatevalue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="container header__container">
      <Link to="/">
        <img className="header__logo" src={Logo} />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <ImSearch className="header__searchIcon"></ImSearch>
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign out" : "Sign In"}
            </span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <BsCart4></BsCart4>
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default header;
