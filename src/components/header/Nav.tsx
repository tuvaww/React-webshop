import { useState } from "react";
import { Link } from "react-router-dom";
import { MenuModal } from "../Layout/MenuModal";

export const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = () => {
    setOpenMenu(!openMenu);
    if (openMenu) {
    }
  };

  const closeModalOnRouteChange = (clicked: boolean) => {
    setOpenMenu(clicked);
  };

  console.log("openmenu", openMenu);
  return (
    <>
      {openMenu ? <MenuModal changedRoute={closeModalOnRouteChange} /> : <></>}
      <div className="linksContainer">
        <div
          onClick={handleMenu}
          className={
            openMenu ? "mobile-links-container fixed" : "mobile-links-container"
          }
        >
          <i className="bi bi-x"></i>
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
