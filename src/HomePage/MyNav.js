import React from "react";
import Container from "react-bootstrap/Container";
import logo from "../images/perfected-logo.png";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import cartImg from "../images/buy.svg";
import { Button } from "react-bootstrap";
import man from "../images/man.svg";
import unchecked from "../images/Profile.svg";
import { Link } from "react-router-dom";
import MyButton from "./MyButton";
import uncheckedhover from "../images/unchecked.svg";
import { useSelector } from "react-redux";

const MyNav = ({ setShow, show }) => {
  const item = useSelector((state) => state.cart.cart);

  const toggle = () => {
    setShow(!show);
  };

  return (
    <Navbar collapseOnSelect expand="lg">
      <Container style={{ marginLeft: "2vw" }} fluid>
        <Navbar.Brand className="logo" href="#home">
          <img width="100%" src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          style={{ backgroundColor: "#51be69" }}
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav style={{ marginLeft: "6vw" }}>
            <Link className="nav-links" to="/">
              Home
            </Link>
            <Link className="nav-links" to="/aboutus">
              About us
            </Link>
            <Link className="nav-links" to="/marketplace">
              Marketplace
            </Link>

            <Link className="nav-links" to="/Howtojoin">
              How to join
            </Link>
            <Link className="nav-links" to="/Pricing">
              Pricing
            </Link>
            <Link className="nav-links" to="/Contactus">
              Contact us
            </Link>
          </Nav>

          <Nav style={{ marginLeft: "6vw" }}>
            <a
              onClick={toggle}
              style={{ color: "white", position: "relative" }}
            >
              {" "}
              <span
                style={{ backgroundColor: "#51be69" }}
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill fw-normal"
              >
                {item.length}
              </span>{" "}
              <img src={cartImg} alt="cart" />{" "}
            </a>
          </Nav>
          <Link to="/register" style={{ margin: "0", textDecoration: "none" }}>
            <MyButton padding={"8px 25px"} pic={man} text={"Register"} />{" "}
          </Link>
          <div>
            {" "}
            <Link
              to="/login"
              style={{ textDecoration: "none" }}
              className="btn-2"
            >
              {" "}
              Login{" "}
              <img style={{ color: "white" }} alt="login" src={unchecked} />
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
