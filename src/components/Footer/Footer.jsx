import React from "react";

import "./footer.css";
function Footer() {
  return (
    <>
    <div className="footer-image">
      <img src="https://skylandrealty.com/wp-content/themes/skyland/assets/images/footer-bg.png" alt="" />
    </div>
    <div className="gpt3__footer section__padding">
  
      <div className="gpt3__footer__button">
        <button type="button">Request for early access</button>
      </div>

      <div className="gpt3__footer__nav">
        <div className="gpt3__footer__nav__column">
          <div className="gpt3__footer__nav__column__logo">
            <h3>Sky Liner</h3>
          </div>
          <p>All Rights Reserved added by <b>Mk Niazi</b>.</p>
        </div>

        <div className="gpt3__footer__nav__column">
          <b>Links</b>
          <a href="#footer">Overons</a>
          <a href="#footer">Sccial media</a>
          <a href="#footer">Counters</a>
          <a href="#footer">Contacts</a>
        </div>

        <div className="gpt3__footer__nav__column">
          <b>Company</b>
          <a href="#footer">Term & conditions</a>
          <a href="#footer">Privacy Policy</a>
          <a href="#footer">Contacts</a>
        </div>
        <div className="gpt3__footer__nav__column">
          <b>Get in touch</b>
          <a href="#footer">Advance</a>
          <a href="#footer">Email Address</a>
        </div>
      </div>
    </div>
    </>
  );
}

export default Footer;