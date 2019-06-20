import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <header>
        Welcome!
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/code"> Code </Link>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
