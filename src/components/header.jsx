import React from "react"
import { Nav, Navbar } from "react-bootstrap";

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                    <Navbar.Brand href="#home">Logo <span className="logo-plus">+</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#" className="active">Home</Nav.Link>
                            <Nav.Link href="#">About</Nav.Link>
                            <Nav.Link href="#">Service</Nav.Link>
                            <Nav.Link href="#">Our Team</Nav.Link>
                            <Nav.Link href="#">Blog</Nav.Link>
                            <Nav.Link className="header-phone-btn" href="#"><i className="fa fa-phone"></i> 123-1565664</Nav.Link>
                        </Nav>
                      
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    )
}
export default Header;