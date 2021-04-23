import {useState } from 'react'
import { Navbar, NavbarBrand, NavItem, NavLink, Nav, NavbarToggler, Collapse } from 'reactstrap'
import {Link} from 'react-router-dom'
const AppBar = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)
  return (
    <Navbar color='light' light expand='md'>
      {/* <img id="logo" src={Logo} alt="King Pepe" /> */}
      <NavbarBrand>Google Books</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
      <Nav navbar>
      <NavItem>
        <Link to='/'>
          <NavLink>Saved Books</NavLink>
        </Link>
      </NavItem>
          <NavItem>
            <Link to='/search'>
              <NavLink>Search</NavLink>
            </Link>
          </NavItem>
    </Nav>
    </Collapse>
    </Navbar>
  )
}
export default AppBar