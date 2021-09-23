import { Nav } from "react-bootstrap"

const SideBar = (props)=>{
    let items = props.menuItems
    let menuItems = []
    items.forEach(item=>{
        menuItems.push(<Nav.Link key={item.id} href={item.url} className="text-dark">{item.icon}</Nav.Link>)
    })
    return (
        <Nav defaultActiveKey="/home" className="flex-column bg-white text-center text-dark vh-100 pt-5">
            {menuItems}
        </Nav>
    )
}

export default SideBar