import logo from '../../assets/images/logo.png';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import "./Header.css";

function Header() {
  return (
    <header className="main-header">
      <div className="header__logo-wrapper">
        <a href="/" className="logo__link">
          <img className="header__logo" src={logo} alt="" />
        </a>
      </div>
      <div className="header__delivery-address">
        <HiOutlineLocationMarker className="address-icon" />
        <div className="delivery__location">
          <p>Delivery to</p>
          <b>Uzbekistan</b>
        </div>
      </div>
      <div className="header__search-wrapper">
        <select className="search__select">
          <option value="all">All</option>
          <option value="laptops">Laptops</option>
        </select>
        <input type="text" className="search__input" />
        <button>
          <FiSearch />
        </button>
      </div>
    </header>
  );
}

export default Header;
