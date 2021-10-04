import React from "react"
import { Navbar, Container, Nav } from "react-bootstrap"
const Navigation = (props)=>{
    let items = props.menuItems
    let menuItems = []
    items.forEach(item=>{
        menuItems.push(<Nav.Link key={item.id} href={item.url} className="fw-bold fs-5">{item.title}</Nav.Link>)
    })
    return (
        <Navbar bg="white" expand="lg" className="bg-danger">
            <Container fluid>
                {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        {menuItems}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation