import React from 'react';
// import { Link } from "react-router-dom";
import Logo from '../../../assets/img/logo.png';
import style from './navbar.module.css';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => (
  <div className={style.navbarContainer}>
    <div className={style.navbarLogo}>
      {/* <Link to="/"> */}
      <img className={style.img} src={Logo} alt='Logo' />
      <h1>Visual Side</h1>

      {/* </Link> */}
    </div>
    <div className={style.navbarText}></div>
    <div className={style.navbarLink}>
      <ul className={style.navbarUl}>
        <li>Crear anuncio</li>
        <li>Mis favoritos</li>
      </ul>
    </div>
    <div>
      <input className={style.navbarInput} type='text' name='search' />
    </div>

    <div className={style.navBbarMenu}>
      {/* <GiHamburgerMenu className={style.hamburger} /> */}
    </div>
  </div>
);

export default Navbar;
