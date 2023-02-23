import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { RiInstagramFill } from 'react-icons/ri';
import { BsGithub } from 'react-icons/bs';

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
        <img src="" alt="" />
      </div>
    </footer>
  );
}

export default Footer;