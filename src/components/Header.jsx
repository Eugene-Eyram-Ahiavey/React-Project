import { useState } from 'react';
import { NavLink, useNavigate} from 'react-router';
import './header.css';
import logoWhite from '../assets/images/logo-white.png';
import mobileLogo from '../assets/images/mobile-logo-white.png';
import searchIcon from '../assets/images/icons/search-icon.png';
import cartIcon from '../assets/images/icons/cart-icon.png';

export function Header({ cart }){
const [searchInput, setSearchInput] = useState('');

const navigate = useNavigate();




  let totalQuantity = 0;

  cart.forEach((cartItem) =>{
    totalQuantity += cartItem.quantity;
    // console.log(totalQuantity);
    // console.log(cart);
  })

  const getSearch = (event) => {
  const newText = event.target.value;
  setSearchInput(newText);

  }
   const enterSearchText = () => {
      navigate(`/?search=${searchInput}`);
      setSearchInput(searchInput);
    }
    

    return (
        <>
     <div className="header">
      <div className="left-section">
        <NavLink to ="/" className="header-link">
          <img className="logo"
            src={logoWhite} />
          <img className="mobile-logo"
            src={mobileLogo} />
        </NavLink>
      </div>

      <div className="middle-section">
        <input className="search-bar" type="text" placeholder="Search" 
         onChange={getSearch} 
         value={searchInput}
          />

        <button className="search-button" onClick={enterSearchText}>
          <img className="search-icon" src={searchIcon} />
        </button>
      </div>

      <div className="right-section">
        <NavLink className="orders-link header-link" to="/orders">

          <span className="orders-text">Orders</span>
        </NavLink>

        <NavLink className="cart-link header-link" to="/checkout">
          <img className="cart-icon" src={cartIcon} />
          <div className="cart-quantity">{totalQuantity}</div>
          <div className="cart-text">Cart</div>
        </NavLink>
      </div>
    </div>
    </>
    )
}