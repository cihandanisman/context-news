import React from 'react'
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaRegNewspaper } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { Link } from "react-router-dom"

export const MyNavbar = () => {
  return (
    <>
      <Navbar expand="md">
        <Container>
          <Navbar.Brand href="/">
          <FaRegNewspaper color='white' size={40}/>--- <FaPencil color='white' size={30} />


          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/News" className={"navbar-link"}>
                News
              </Nav.Link>
              <Nav.Link as={Link} to="/About" className={" navbar-link"}>
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/MoreInfo" className={" navbar-link"}>
                MoreInfo
              </Nav.Link>
              <Nav.Link as={Link} to="/SportNews" className={"navbar-link"}>
                SportsNews
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="#">
                  <img src={`https://i.imgur.com/s3noPaC.png`} alt="" />
                </a>
                <a href="#">
                  <img src={`https://i.imgur.com/rxgJBL4.png`} alt="" />
                </a>
                <a href="#">
                  <img src={`https://i.imgur.com/cE0RPru.png`} alt="" />
                </a>
              </div>
              <a href="#">
                <button className="vvd">
                  <span>Let’s Connect</span>
                </button>
              </a>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default MyNavbar