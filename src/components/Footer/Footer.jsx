import "./Footer.scss";

const Footer = () => {
  // Return current year
  const currentYear = new Date().getFullYear();

  // Cool animation on footer
  const handleMouseEnter = (e) => {
    // TODO: Do something cool!
    
  };

  return (
    <div
      className="footer"
      onMouseEnter={(e) => {
        handleMouseEnter(e);
      }}
    >
      <div className="footer__logo">
        <img src="./logos/logowhite.png" />
      </div>
      <div className="footer__docs clear-font">
        <span className="footer__doc">Terms of Use </span>
        <span className="footer__doc">Who we are</span>
        <span className="footer__doc">Privacy Policy</span>
      </div>
      <div className="footer__creds">
        <a href="https://spatialdays.com/" className="spatial-days">
          © {currentYear} Powered by Spatial Days
        </a>
        <br />
        <a href="mailto:arianne.oates@gmail.com">Artwork by Arianne Oates</a>
      </div>
    </div>
  );
};

export default Footer;
