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
} from "reactstrap";
import { useSelector, useDispatch } from "react-redux";

export default function Header() {
  // const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const { userInfo, isLoading, error } = useSelector((state) => state.auth);
  // console.log(userInfo.hoTen);

  

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
                      <NavLink href="#cumRapBackNews">Cụm Rạp</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#tintucBackNewNext">Tin Tức</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#ungDung">Ứng Dụng</NavLink>
                    </NavItem>
                  </Col>
                  <Col lg={5}>
                    <NavItem className="navRight d-flex">
                      <NavLink>
                      <Link to="/login" className="btnLogin">
                          Đăng Nhập
                        </Link> 
                      </NavLink>
                      <NavLink>
                        <Link to="/register" className="btnRegister">
                          Đăng Ký
                        </Link>
                      </NavLink>
                    </NavItem>
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
