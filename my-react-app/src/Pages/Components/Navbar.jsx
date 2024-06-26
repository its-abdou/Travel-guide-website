import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavbarBootstrap from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import "./Navbar.css";
import PropTypes from "prop-types";

function Navbar({ isAuthenticated }) {
  return (
    <NavbarBootstrap expand="lg" className="bg-body-tertiary">
      <Container className="cont">
        <NavbarBootstrap.Brand as={Link} to="/">
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
            <Nav.Link as={Link} to="/attractions">
              Attractions
            </Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/Services/Hotels">
                Hotels
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Services/Restaurents">
                Restaurents
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Services/Otherservices">
                Other Services
              </NavDropdown.Item>
            </NavDropdown>
            {isAuthenticated ? (
              <>
                <Nav.Link as={Link} to="/profile">
                  <i className="bi bi-person-fill"></i>
                </Nav.Link>
              </>
            ) : (
              <Nav.Link as={Link} to="/login" className="btn-login">
                Login
              </Nav.Link>
            )}
          </Nav>
        </NavbarBootstrap.Collapse>
      </Container>
    </NavbarBootstrap>
  );
}
Navbar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  setAuth: PropTypes.func.isRequired,
};

export default Navbar;
