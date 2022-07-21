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
        <a href="./docs/Terms_of_Use.pdf">
          <span className="footer__doc">Terms of Use </span>
        </a>


        <a href="./docs/Privacy_Policy.pdf">
          <span className="footer__doc">Privacy Policy</span>
        </a>
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
