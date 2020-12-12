import { Button, Nav, Navbar, NavDropdown, Form, FormControl } from 'react-bootstrap';

function Heder() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light">
             
                <Navbar.Brand href="" className="font-weight-bold">
                 React Bootcamp
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="">Home</Nav.Link>
                    <Nav.Link href="">About</Nav.Link>
                    <Nav.Link href="">Contact</Nav.Link>
                    <Nav.Link href="">Tutorial</Nav.Link>
                  </Nav>
                  <Nav>
                    <Nav.Link href="">Login</Nav.Link>
                  </Nav>
                </Navbar.Collapse>

            </Navbar>
  );
}
export default Heder;
