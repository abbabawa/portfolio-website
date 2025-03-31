import { Nav } from "react-bootstrap";
import { ISideBar } from "../types/sideBar";
import { ReactElement } from "react";
import { usePathname } from "next/navigation";

const SideBar: React.FC<ISideBar> = ({ menuItems }) => {
  const pathname = usePathname();
  let items: ReactElement[] = [];
  menuItems.forEach((item) => {
    items.push(
      <Nav.Link
        key={item.id}
        href={item.url}
        className={`${
          (pathname.toLowerCase().includes(item.url) && item.url !== "/") ||
          (item.url === "/" && pathname === "/")
            ? "text-danger"
            : "text-dark"
        }`}
      >
        {item.icon}
      </Nav.Link>
    );
  });
  return (
    <Nav
      defaultActiveKey="/home"
      className="flex-column bg-white text-center text-dark vh-100 pt-5"
    >
      {items}
    </Nav>
  );
};

export default SideBar;
