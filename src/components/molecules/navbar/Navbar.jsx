import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/img/logo.png";
import style from "./navbar.module.css"


const Navbar = () => (
  <div className={style.navbarContainer}>

      <div className={style.navbarLogo}>
      {/* <Link to="/"> */}
          <img src={Logo} alt="Logo" />
          <p>Hello</p>
        {/* </Link> */}
        </div>
      <div className="navbarItems">
        <div className="navbarItem">
            Hola mundo
        </div>
      </div>
  </div>


);

export default Navbar;
