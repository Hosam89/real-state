import { Nav, Navbar, NavDropdown } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="p-2"
    >
      <Navbar.Brand href="#home">It's Free Real Estate</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <NavDropdown title="Buy" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Your Area</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2"></NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            {/* <NavDropdown.Divider /> */}
          </NavDropdown>

          <NavDropdown title="Rent" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Your Area</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2"></NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            {/* <NavDropdown.Divider /> */}
          </NavDropdown>

          <NavDropdown title="Move" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Your Area</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2"></NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            {/* <NavDropdown.Divider /> */}
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">User :</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            History
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
