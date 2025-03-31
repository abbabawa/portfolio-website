"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import { Col, Container, Row } from "react-bootstrap";
import Navigation from "@/components/Navigation";
import SideBar from "@/components/SideBar";

import {
  FaAddressBook,
  FaBriefcase,
  FaHome,
  FaUserGraduate,
} from "react-icons/fa";
import { IMenuItems } from "@/types/navigation";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let menuItems: IMenuItems[] = [
    {
      id: 1,
      title: "Home",
      icon: <FaHome className="fs-4 mb-3" />,
      url: "/",
    },
    {
      id: 2,
      title: "Education",
      icon: <FaUserGraduate className="fs-4 mb-3" />,
      url: "/education",
    },
    {
      id: 3,
      title: "Portfolio",
      icon: <FaBriefcase className="fs-4 mb-3" />,
      url: "/portfolio",
    },
    {
      id: 4,
      title: "Contact",
      icon: <FaAddressBook className="fs-4 mb-3" />,
      url: "/contact",
    },
  ];
  return (
    <html lang="en">
      <body>
        <Container fluid className="">
          <Navigation menuItems={menuItems} />
          <Row className="">
            <Col xs="1" className="d-none d-md-block ps-0 pe-4">
              <SideBar menuItems={menuItems} />
            </Col>
            <Col className="">{children}</Col>
          </Row>
        </Container>
      </body>
    </html>
  );
}
