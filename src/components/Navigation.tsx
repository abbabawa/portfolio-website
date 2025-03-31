import React, { ReactElement } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { INavigation } from "../types/navigation";
import { usePathname } from "next/navigation";
const Navigation: React.FC<INavigation> = ({ menuItems }) => {
  const pathname = usePathname();
  // let items = props.menuItems
  let items: ReactElement[] = [];
  menuItems.forEach((item) => {
    console.log(pathname);
    items.push(
      <Nav.Link
        key={item.id}
        href={item.url}
        className="fw-bold fs-5 mx-4"
        style={
          (pathname.toLowerCase().includes(item.url) && item.url !== "/") ||
          (item.url === "/" && pathname === "/")
            ? { borderBottom: "3px solid #dc3545" }
            : {}
        }
      >
        {item.title}
      </Nav.Link>
    );
  });
  return (
    <div className="row">
      <Navbar bg="white" expand="lg" className="">
        <Container fluid>
          {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">{items}</Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
