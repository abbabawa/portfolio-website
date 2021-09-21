import { Nav } from "react-bootstrap"

const SideBar = (props)=>{
    let items = props.menuItems
    let menuItems = []
    items.forEach(item=>{
        menuItems.push(<Nav.Link href={item.url}>{item.icon}</Nav.Link>)
    })
    return (
        <Nav defaultActiveKey="/home" className="flex-column">
            {menuItems}
        </Nav>
    )
}

export default SideBar