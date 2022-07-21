import "./Navbar.scss";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar__logo">
          <img src="./logos/logo.png" />
        </div>
        <div className="navbar__items">
          <div className="navbar__item">
            <a href="#features">Features</a>
          </div>
          <div className="navbar__item">
            <a href="#pricing">Pricing</a>
          </div>
          <div className="navbar__item">
            <a href="#about">About</a>
          </div>
        </div>
      </div>

      <div className="sticky-navbar">
        <div className="sticky-navbar__logo">
          <img
            src="./logos/rapdi.png"
            onClick={
              () => {
                window.open("http://service.searcher.ninja", "_blank");
              }
            }
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
