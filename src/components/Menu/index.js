import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/thibonsanflix_logo.png";
//import ButtonLink from "./components/ButtonLink";
import Button from "../Button";
import "./Menu.css";

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="ThibonsanFlix logo" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo Vídeo
      </Button>
    </nav>   
  );
}

export default Menu;