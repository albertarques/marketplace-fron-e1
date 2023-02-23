import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { RiInstagramFill } from 'react-icons/ri';
import { BsGithub } from 'react-icons/bs';
import LogowithLetters from "../../../assets/img/logoWithLetters";

function Footer() {
  return (
    <footer className="footer">
      <div className="icons">
      <BsFacebook/>
      <BsLinkedin/>
      <RiInstagramFill/>
      <BsGithub/>
        
      </div>
      <div className="logo">
        <img src={LogowithLetters} alt="Logo" />
      </div>
    </footer>
  );
}

export default Footer;