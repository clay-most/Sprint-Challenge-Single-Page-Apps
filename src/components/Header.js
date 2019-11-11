import React from "react";
import { Link } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <Nav>
        <NavItem>
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link to="/characters">Characters</Link>
        </NavItem>
        <NavItem>
          <Link to="/search">Search</Link>
        </NavItem>
      </Nav>
    </header>
  );
}
