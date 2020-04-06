import React from "react";

// COmponents
import Home from "./app/home/home";
import AboutMe from "./app/aboutme/aboutme";

// Bootstrap

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

// Assets
import "./assets/css/style.css"; //CSS
import logo from "./assets/images/logo.png"; //Logo

// React Router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app-area">
        <Navbar
          bg="transparent"
          collapseOnSelect
          expand="lg"
          variant="dark"
          className="top-navbar"
          fixed="top">
          <Navbar.Brand>
            <Link to="/">
              <img
                src={logo}
                width="50"
                height="50"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Link to="/about-me" className="nav-link">
                About Me
              </Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#blog">Blog</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route path="/about-me">
            <AboutMe />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
