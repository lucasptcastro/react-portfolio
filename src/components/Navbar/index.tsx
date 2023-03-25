import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import "./style.css";

const Navbar: React.FC = () => {
  const [hiddenMenu, setHiddenMenu] = React.useState("hidden");

  function clickMenu() {
    if (hiddenMenu == "block") {
      setHiddenMenu("hidden");
    } else {
      setHiddenMenu("block");
    }
  }
  return (
    <div className="header">
      <div className="navbar">
        <p id="logo-title">Lucas Peixoto</p>
        <AiOutlineMenu id="hamburger-menu" onClick={clickMenu} />
      </div>
      <menu
        // className={`block iphone:${hiddenMenu}`}
        id="itens"
        style={{ display: `${hiddenMenu}` }}
      >
        <ul>
          <li>
            <a href="#" id="lnkInicio">
              Início
            </a>
          </li>
          <li>
            <a href="#">xxx</a>
          </li>
          <li>
            <a href="#">xxx</a>
          </li>
          <li>
            <a href="#">xxx</a>
          </li>
          <li>
            <a href="#">xxx</a>
          </li>
        </ul>
      </menu>
    </div>
  );
};

export default Navbar;
