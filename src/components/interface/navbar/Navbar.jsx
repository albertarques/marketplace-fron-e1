import React, { useState } from 'react';
// import { Link } from "react-router-dom";
import Logo from '../../../assets/img/logo.png';
import style from '../navbar/navbar.module.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import Search from '../search/Search';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handlerMenu = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div>
      <div className={style.navbarContainer}>
        <div className={style.navbarLogo}>
          {/* <Link to="/"> */}
          <img className={style.img} src={Logo} alt='Logo' />
          <h1>Visual Side</h1>

          {/* </Link> */}
        </div>

        <nav className={isVisible ? style.visible : style.invisible}>
          <div className={style.navbarLink}>
            <ul className={style.navbarUl}>
              <li>Crear anuncio</li>
              <li>Mis favoritos</li>
              <li>Home</li>
            </ul>
          </div>
        </nav>

        <div className={style.navBbarMenu}>
          <GiHamburgerMenu onClick={handlerMenu} className={style.hamburger} />
        </div>
      </div>
      <Search className={style.inputSearch} />
    </div>
  );
};

export default Navbar;
