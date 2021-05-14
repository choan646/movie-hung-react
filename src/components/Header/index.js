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
      <Navbar expand="md">
        <Row lg={2}>
          <Col lg={5}>
            <NavbarBrand>
              <Link to="/">
                <img
                  className="webLogo"
                  styleLogo
                  src="/img/web-logo.png"
                  alt="logo"
                />
              </Link>
            </NavbarBrand>
          </Col>
          <Col lg={7}>
            <Row lg={1}>
              <Collapse isOpen={isOpen} navbar>
                <Nav navbar>
                  <Col lg={7} className="d-flex">
                    <NavItem>
                      <NavLink href="#lichChieu">Lịch Chiếu</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#cumRap">Cụm Rạp</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#tinTuc">Tin Tức</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#ungDung">Ứng Dụng</NavLink>
                    </NavItem>
                  </Col>
                  <Col lg={5}>
                    <NavItem className="navRight">
                      <NavLink>
                        <Link to="/login" className="btnLogin">
                          <img src="/img/avatar.png" alt="avatar"/>
                          Đăng Nhập
                        </Link>
                      </NavLink>
                    </NavItem>
                    {/* <UncontrolledDropdown nav inNavbar className="navRight">
                      <DropdownToggle nav caret className="btnLocation">
                        <img src="/img/location-header.png" alt="mark"/>
                        Dia Chi
                      </DropdownToggle>
                      <DropdownMenu left>
                        <DropdownItem>tphcm</DropdownItem>
                        <DropdownItem>hanoi</DropdownItem>
                        <DropdownItem>quangtri</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown> */}
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
