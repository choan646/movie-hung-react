import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";
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
} from "reactstrap";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div id="header">
      <Navbar color="light" light expand="md">
        <Row lg={2} className="w-100">
          <Col lg={5}>
            <NavbarBrand>
              <Link to="/"><img className="webLogo" src="../public/img/web-logo.png" alt="logo"/></Link>
            </NavbarBrand>
          </Col>
          <Col lg={7}>
            <Row lg={1}>
              <Collapse isOpen={isOpen} navbar>
                <Nav navbar className="w-100">
                  <Col lg={9} className="d-flex">
                    <NavItem>
                      <NavLink href="#lichChieu">Lịch chiếu</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#cumRap">Cụm rạp</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#tinTuc">Tin tức</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#ungDung">Ứng dụng</NavLink>
                    </NavItem>
                  </Col>
                  <Col lg={3} className="d-flex">
                    <NavItem>
                      <NavLink>
                      <Link to="/login">Đăng nhập</Link>
                      </NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret>
                        Dia Chi
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem>tphcm</DropdownItem>
                        <DropdownItem>hanoi</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>quangtri</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Col>
                </Nav>
              </Collapse>
            </Row>
          </Col>
          <Col lg={12}>
            <NavbarToggler onClick={toggle} />
          </Col>
        </Row>
      </Navbar>
    </div>
  );
}
