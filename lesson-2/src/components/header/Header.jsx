import logo from '../../assets/images/logo.png';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import "./Header.css";
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function Header({setIsNavbarSearchActive}) {
  const { t } = useTranslation();
  const [selectedOption, setSelectedOption] = useState("all");
  const { i18n } = useTranslation();
  
  const changeWebsiteLang = (e) => {
    i18n.changeLanguage(e.target.value || "uz");
  }

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
          <p>{t("delivery_label")}</p>
          <b>{t("country")}</b>
        </div>
      </div>
      <div className="header__search-wrapper">
        <select className="search__select" style={selectedOption.length <= 7 ? {width:`${selectedOption.length * 14}px`} : {width:`${selectedOption.length * 10}px`}} onChange={(e) => {setSelectedOption(e.target.value)}}>
          <option value="all">All</option>
          <option value="laptops">Laptops</option>
          <option value="personal care">Personal Care</option>
          <option value="toys & babies">Toys and Babies</option>
        </select>
        <input type="text" className="search__input" onBlur={() => {setIsNavbarSearchActive(false)}} onFocus={() => {setIsNavbarSearchActive(true)}}/>
        <button>
          <FiSearch />
        </button>
      </div>
      <select onChange={changeWebsiteLang}>
        <option value="uz">UZ</option>
        <option value="en">EN</option>
        <option value="ru">RU</option>
      </select>
    </header>
  );
}

export default Header;
