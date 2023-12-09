// components/header.js

import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container, Navbar, Nav } from 'react-bootstrap' // ←追記
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = ({ siteTitle }) => (
// ↓ここから
    // <header className="bg-light">
    //     <Container>
    //     <Navbar expand="md" variant="light">
    //         <Navbar.Brand href="/">{siteTitle}</Navbar.Brand>
    //         <Navbar.Toggle aria-controls="navbarResponsive" />
    //         <Navbar.Collapse id="navbarResponsive">
    //         <Nav as="ul" className="ml-auto">
    //             <Nav.Item as="li">
    //             <Link to="/publications" className="nav-link" activeClassName="active">Publications</Link>
    //             </Nav.Item>
    //             <Nav.Item as="li">
    //             <Link to="/page-3" className="nav-link" activeClassName="active">Page3</Link>
    //             </Nav.Item>
    //         </Nav>
    //         </Navbar.Collapse>
    //     </Navbar>
    //     </Container>
    // </header>
    <Navbar bg="light" data-bs-theme="light">
        <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="justify-content-between">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
    // ↑ここまで
    )

    Header.propTypes = {
    siteTitle: PropTypes.string,
    }

    Header.defaultProps = {
    siteTitle: ``,
}

export default Header
