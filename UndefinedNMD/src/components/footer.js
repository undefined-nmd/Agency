import React from "react"

const Footer = ({ style }) => (
  <footer className={style}>
    <div className="footer-container-left">
      <h2>Contact</h2>
      <ul>
        <li className="footer-info-general">Hoogpoort 15</li>
        <li className="footer-info-general">9000 Gent</li>
        <li><a className="footer-info-general" href="mailto:info@arteveldehs.be">info@arteveldehs.be</a></li>
        <li><a className="footer-info-general" href="tel:03292348600">09 234 86 00</a></li>
      </ul>
    </div>
    <div className="footer-container-center">
      <h2>Socials</h2>
      <ul>
        <li><a className="footer-info-general" target="blanc" href="https://www.instagram.com/undefinednmd/">Instagram </a></li>
        <li><a className="footer-info-general" target="blanc" href="https://www.facebook.com/undefinednmd/"> Facebook </a></li>
        <li><a className="footer-info-general" target="blanc" href="https://www.linkedin.com/in/undefined-nmd-122144194/"> LinkedIn </a></li>
        <li><a className="footer-info-general" target="blanc" href="https://www.twitter.com/UNDEFIN78240322"> Twitter</a></li>
      </ul>
    </div>
    <div className="blank"></div>
    <a href="/#" className="home-btn">_defined</a>
  </footer>
)

export default Footer
