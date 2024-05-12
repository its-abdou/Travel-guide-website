import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavbarBootstrap from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <NavbarBootstrap expand="lg" className="bg-body-tertiary">
      <Container className="cont">
        <NavbarBootstrap.Brand to="/">
          <img src={Logo} alt="Logo" width="90" />
        </NavbarBootstrap.Brand>
        <NavbarBootstrap.Toggle aria-controls="basic-navbar-nav" />
        <NavbarBootstrap.Collapse
          id="basic-navbar-nav"
          className="justify-content-end"
        >
          <Nav className="nav">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/explore">
              Explore
            </Nav.Link>
            <Nav.Link as={Link} to="/history">
              History
            </Nav.Link>
            <NavDropdown title="Attraction" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/attraction/monuments">
                Monuments
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/attraction/parks">
                Parks
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/attraction/beaches">
                Beaches
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </NavbarBootstrap.Collapse>
      </Container>
    </NavbarBootstrap>
  );
}

export default Navbar;
