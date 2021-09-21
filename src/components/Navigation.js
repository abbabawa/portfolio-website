import React from "react"
import { Navbar, Container, Nav } from "react-bootstrap"
const Navigation = (props)=>{
    let items = props.menuItems
    let menuItems = []
    items.forEach(item=>{
        menuItems.push(<Nav.Link href={item.url}>{item.title}</Nav.Link>)
    })
    return (
        <Navbar bg="light" expand="lg" className="">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {menuItems}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation