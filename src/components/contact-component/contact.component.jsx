import React from "react";
import "./contact.styles.scss";
import twitter from "../../assets/asset1.png";
import linke from "../../assets/Asset3.png";
import behance from "../../assets/Asset2.png";
import gitlogo from "../../assets/github-logo.svg";

const Contact = () => (
  <div className="wrapperbox">
    <div className="bigcircle">
      <div>
        <h1>CONTACT ME</h1>
        <p>Hi! if you want us to work toguether contact me!</p>
        <p>I'm available for frelance projects and full-time jobs.</p>
        <p>Kerlis.aguado26@gmail.com</p>
        <div className="icons">
          <div className="box">
            <a href='https://twitter.com/codeloverK' target="_blank"><img src={twitter} alt="twitter icon" /></a>
          </div>
          <div className="box">
            <a href='https://www.linkedin.com/in/kerlis-aguado' target="_blank"> <img src={linke} alt="twitter icon" /></a>
          </div>
          <div className="box">
            <a href='https://www.behance.net/kerlisaguado26' target="_blank"> <img src={behance} alt="twitter icon" /></a>
          </div>
          <div className="box">
            <a href='https://github.com/keralex' target="_blank"><img src={gitlogo} alt="twitter icon" height='62px' width='60px' /></a>         </div>
          </div>
      </div>
    </div>
  </div>
);

export default Contact;
