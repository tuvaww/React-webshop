import { Link } from "react-router-dom";
import { ApiHandler } from "../ApiHandler";
import { Nav } from "./Nav";

export const Header = () => {
  return (
    <section className="header-container">
      <Nav></Nav>
      <div className="logo-name-container">
        <h1 className="logo-name">MILOUNI</h1>
      </div>
    </section>
  );
};
