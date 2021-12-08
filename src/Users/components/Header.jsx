import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import logo from '../../Image/logo.png';
import styles from '../styles/styles.css';
import academia from '../../Image/logo-academia.png';
import fundacion from '../../Image/logo-fundacion.jpeg'

function Header() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img className="fundacion" src={fundacion} alt="Logo fundacion" />
                    </Navbar.Brand>
                    <Navbar.Brand >
                        BECAS PARA CURSOS DE VIGILANCIA <br/>
                        Plan nacional de reactivación económica, ¡Creo en ti!
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="button-what">
                            <Nav.Link href="https://wa.me/573508833740/?text=Hola,%20quiero%20mas%20informacion." target="_blank">
                                <img className="imagen" src={ logo } />
                                <h6>ESCRIBENOS</h6>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;