import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "../../images/logo.png";

export default function Header() {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="Logo combining letter b and k" />
      </Link>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}
