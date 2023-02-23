import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { RiInstagramFill } from 'react-icons/ri';
import { BsGithub } from 'react-icons/bs';
import Logo from '../../../assets/img/logo.png';
import style from '../footer/footer.module.css';


function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.icons}>
      <BsFacebook/>
      <BsLinkedin/>
      <RiInstagramFill/>
      <BsGithub/>
        
      </div>
      <div className={style.footerLogo}>
        <img src={Logo} alt="Logo" style={{ width: "3rem" }} />
        <h3>Visual Side</h3>
      </div>
    </footer>
  );
}

export default Footer;