import React from "react";

// COmponents
import Home from "./app/home/home";
import AboutMe from "./app/aboutme/aboutme";

// Bootstrap
import "./assets/css/style.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

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
          fixed="top">
          <Navbar.Brand>
            <Link to="/">Chota H Mpuku</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link>
                <Link to="/about-me">About Me</Link>
              </Nav.Link>
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
