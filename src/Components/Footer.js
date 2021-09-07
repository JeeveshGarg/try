import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import logoc from "./Instagram.png";
import logo4 from "./4.png";
import logoh from "./round-place-24px.png";
import logoi from "./round-phone-24px.png";
import logoj from "./Vect1or.png";
function Footer() {
  return (
    <div style={{ marginBottom: 0 }}>
      <footer className="py-5 bg-dark">
        <ReactBootStrap.Container>
          <hr className="hrtag"></hr>
          <div className="footer__top">
            <div className="top__left">
              <h1 className="footh"> Candid <br/>Connections </h1>
            </div>
            <div className="top__right">
              <div className="footer__left">
                <div className="add">
                  <img className="footerimg" src={logoh} alt="Logo" /> New
                  Delhi, India
                </div>
                <div className="num">
                  <img className="footerimg" src={logoi} alt="Logo" />
                  (+91)7390071951
                </div>
              </div>
              <div className="footer__right">
                <div className="email">
                  <img className="footerimg" src={logoj} alt="Logo" />
                  <a href="mailto: hi@candidconnect.tech">
                    {" "}
                    hi@candidconnect.tech
                  </a>
                </div>
                <div className="social">
                  <a href="https://www.clubhouse.com/club/candid-connections">
                    {" "}
                    <img style={{height:"19px"}} className="footerimg" src={logo4} alt="Logo" />
                  </a>
                  <a href="https://www.instagram.com/candid.connection/">
                    {" "}
                    <img className="footerimg" src={logoc} alt="Logo" />
                  </a>
                  Follow us
                </div>
              </div>
            </div>
          </div>
          <hr className="hrtag"></hr>
          {/* footer bottom */}
          <div className="footer__bottom">
                <a href="#Home">Home</a>
                <a href="#Contact">Contact Us </a>
                <a href="#card">Features</a>
                <a href="#">Team</a>
          </div>
        </ReactBootStrap.Container>
      </footer>
    </div>
  );
}

export default Footer;
