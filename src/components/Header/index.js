import React , {useState} from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
<Navbar color="light" light expand="md">
  <NavbarBrand><Link to="/">Logo</Link></NavbarBrand>
  <NavbarToggler onClick={toggle}/>
  <Collapse isOpen={isOpen} navbar>
    <Nav clasname="mr-auto" navbar>
      <NavItem>
        <NavLink href="#">Lịch chiếu</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Cụm rạp</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Tin tức</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Ứng dụng</NavLink>
      </NavItem>
      <NavItem>
      <Link to="/login">Đăng nhập</Link>
      </NavItem>
      <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>
                Dia Chi
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  tphcm
                </DropdownItem>
                <DropdownItem>
                  hanoi
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  quangtri
                </DropdownItem>
              </DropdownMenu>
      </UncontrolledDropdown>
    </Nav>
  </Collapse>
    </Navbar>
    </div>
      );
}