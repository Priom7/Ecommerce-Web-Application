import React from "react";
import amazonLogo from "./images/ecommerce-app_logo.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "./Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
function Header() {
  const [{ basket }] = useStateValue();
  return (
    <nav className='header'>
      <Link to='/'>
        <img
          className='header__logo'
          src={amazonLogo}
          alt=''
        ></img>
      </Link>
      <div className='header__search'>
        <input className='header__searchInput'></input>
        <SearchIcon className='header__searchIcon'></SearchIcon>
      </div>

      <div className='header__nav'>
        <Link to='/' className='header__link'>
          <div className='header__option'>
            <span className='header__optionLineOne'>
              hello
            </span>
            <span className='header__optionLineTwo'>
              Sign In
            </span>
          </div>
        </Link>

        <Link to='/' className='header__link'>
          <div className='header__option'>
            <span className='header__optionLineOne'>
              Returns{" "}
            </span>
            <span className='header__optionLineTwo'>
              & Orders
            </span>
          </div>
        </Link>
        <Link to='/' className='header__link'>
          <div className='header__option'>
            <span className='header__optionLineOne'>
              Your
            </span>
            <span className='header__optionLineTwo'>
              Account
            </span>
          </div>
        </Link>

        <Link to='/checkout' className='header__link'>
          <div className='header__basket'>
            <ShoppingBasketIcon></ShoppingBasketIcon>
            <span className='header__optionLineTwo header__basketCount'>
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
