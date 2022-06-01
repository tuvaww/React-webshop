import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <>
      <div className="linksContainer">
        <div className="mobile-links-container">
          <div className="hamburger"></div>
          <div className="hamburger"></div>
          <div className="hamburger"></div>
        </div>
        <div className="desktop-links-container">
          <Link className="desktop-links" to="/">
            HOME
          </Link>
          <Link className="desktop-links" to="/products">
            PRODUCTS
          </Link>
          <Link className="desktop-links" to="/">
            HOME
          </Link>
        </div>
      </div>
    </>
  );
};
