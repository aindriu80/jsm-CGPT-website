import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";

// BEM -> Block Element Modifier

const Navbar = () => {
  return (
    <div className="gpt__navbar">
      <div className="gpt__navbar-links">
        <div className="gpt__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt__navbar-links_container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#wgpt">What is GPT?</a>
          </p>
          <p>
            <a href="#possibility">Open AI</a>
          </p>
          <p>
            <a href="#features">Case Studies</a>
          </p>
          <p>
            <a href="#blog">Library</a>
          </p>
        </div>
      </div>
      <div className="gpt__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
    </div>
  );
};

export default Navbar;
