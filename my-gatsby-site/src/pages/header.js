import React from "react"
import { Container, Navbar, Nav } from 'react-bootstrap' // ←追記
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand href="/">Ryutaro Asahara</Navbar.Brand>
                <Nav className="justify-content-between">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/publications">Publications</Nav.Link>
                    <Nav.Link href="/blog">Blog</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header
