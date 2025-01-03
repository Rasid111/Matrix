import { InputGroup, ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Links from './Links';

function Header({globalState, setGlobalState}) {
  return (
    <>
      <Navbar expand="false" className="m-3">
        <Container>
        <Navbar.Brand href="#">
            <img className='w-50' src={"https://html.vikinglab.agency/ovro/assets/img/logo/" + (globalState.theme === false ? "logo1.png" : "logo2.png")} alt="logo" />
        </Navbar.Brand>
        <Form className='ms-auto'>
            <Form.Check
                type="switch"
                onChange={() => setGlobalState(prevstate => ({...prevstate, theme: !prevstate.theme}))}
            />
        </Form>
            <Button className="btn-warning ms-4 me-4 rounded-5" variant="warning">
            HIRE ME
            </Button>
            <Navbar.Toggle />
            <Navbar.Offcanvas placement="end">
            <Offcanvas.Header closeButton>
            </Offcanvas.Header>
            <Offcanvas.Title className="ms-3">
                <a href="#">
                    <img className='w-50' src={"https://html.vikinglab.agency/ovro/assets/img/logo/" + (globalState.theme === false ? "logo1.png" : "logo2.png")} alt="logo" />
                </a>
            </Offcanvas.Title>
            <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="#action1">HOME</Nav.Link>
                    <Nav.Link href="#action2">ABOUT US</Nav.Link>
                    <Nav.Link href="#action2">SERVICE</Nav.Link>
                    <Nav.Link href="#action2">SKILL</Nav.Link>
                    <Nav.Link href="#action2">PORTFOLIO</Nav.Link>
                    <Nav.Link href="#action2">TESTIMONAL</Nav.Link>
                    <Nav.Link href="#action2">BLOGS</Nav.Link>
                    <Nav.Link href="#action2">CONTACT</Nav.Link>
                </Nav>
                <Button className='w-75 m-1 rounded-5' variant="warning" id="button-addon2">
                    GET IN TOUCH NOW
                </Button>
                <Nav.Item href="#action2">SOCIAL LINKS</Nav.Item>
                <Links></Links>
                <Nav.Item href="#action2">SUBSCRIBE TO NEWSLETTER</Nav.Item>
                <InputGroup className="mb-3 border rounded-5">
                    <Form.Control
                    className='m-1 border-0'
                    type='email'
                    placeholder="Email Adress*"
                    />
                    <Button className='m-1 rounded-5' variant="warning" id="button-addon2">
                        SUBSCRIBE
                    </Button>
                </InputGroup>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
  </>
  )
}

export default Header
