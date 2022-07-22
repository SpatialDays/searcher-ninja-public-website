import "./Navbar.scss";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar__logo">
          <img
            src="./logos/logo.png"
            className="logo"
            onClick={() => {
              window.location.href = "/";
            }}
            alt="logo"
          />
        </div>
        <div className="navbar__items">
          <div className="navbar__item">
            <a
              onClick={() => {
                window.location.href = "/#features";
              }}
            >
              Features
            </a>
          </div>
          <div className="navbar__item">
            <a
              onClick={() => {
                window.location.href = "/#pricing";
              }}
            >
              Pricing
            </a>
          </div>
          <div className="navbar__item">
            <a
              onClick={() => {
                window.location.href = "/#about";
              }}
            >
              API
            </a>
          </div>
          <div className="navbar__item">
            <a href="/who-we-are">About</a>
          </div>
        </div>
      </div>

      <div className="sticky-navbar">
        <div className="sticky-navbar__logo">
          <img
            alt="rapidapi logo"
            src="./logos/rapdi.png"
            onClick={() => {
              window.open("http://service.searcher.ninja", "_blank");
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
