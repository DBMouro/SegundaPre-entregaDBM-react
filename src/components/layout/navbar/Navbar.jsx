import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className={"containerNavbar"}>
        <Link to="/">
          <img
            src="https://res.cloudinary.com/de6vdxrs6/image/upload/v1695675045/Logo_ez7syb.png"
            width={100}
            alt={"Logo"}
          />
        </Link>
        <ul className="categories">
          <Link to="/">
            <li>Todos </li>
          </Link>
          <Link to="/category/perros">
            <li>Perros</li>
          </Link>
          <Link to="/category/gatos">
            <li>Gatos</li>
          </Link>
        </ul>
        <CartWidget />
      </div>
    </>
  );
};
