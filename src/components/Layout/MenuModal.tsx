import { useState } from "react";
import { Link } from "react-router-dom";

interface IMenuModalProps {
  changedRoute(clicked: boolean): void;
}

export const MenuModal = (props: IMenuModalProps) => {
  const changedRoute = false;

  const clickedLinks = () => {
    props.changedRoute(changedRoute);
  };

  return (
    <section className="menuModalContainer">
      <article className="linksWrapper">
        <Link onClick={clickedLinks} className="modalLinks" to="/products">
          Products
        </Link>
        <Link onClick={clickedLinks} className="modalLinks" to="/">
          Home
        </Link>

        <Link onClick={clickedLinks} className="modalLinks" to="/products">
          Cart
        </Link>
      </article>
    </section>
  );
};
