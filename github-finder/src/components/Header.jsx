import { Container, Nav, Navbar } from 'react-bootstrap';


function Header() {

  return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            <Nav className="mx-auto">
                <Navbar.Brand href="#">GitHub Finder</Navbar.Brand>
            </Nav>
        </Container>
    </Navbar>
  )
}

export default Header;

