import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

function NavbarD() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">AC-3 TRI</Nav.Link>
                    </Nav>
                    <Navbar.Brand className="mx-auto" href="/">
                      <img
                        src="Passo certo1.png"
                        width="90"
                        height="90"
                        className="d-inline-block align-top"
                      />
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Link href="/Entrar">Entrar</Nav.Link>
                        <Nav.Link href="/Cadastro">Cadastro Produto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarD;
