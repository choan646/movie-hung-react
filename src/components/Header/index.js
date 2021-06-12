import React, { useState, useEffect } from "react";
import { Link ,Redirect } from "react-router-dom";
import { Row, Col } from "reactstrap";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { BoxArrowRight } from "react-bootstrap-icons";
import { logout, getUserInfoHistoryBooking } from "src/actions/auth";
import { updateAtUser } from "src/actions/users";

import ModalInfoHeader from "./ModalInfoHeader";
import ModalHistoryHeader from "./ModalHistoryHeader";

export default function Header() {
  const dispatch = useDispatch();
  //ModalInfoHeader
  const [modalInfo, setModalInfo] = useState(false);
  const toggleModalInfo = () => setModalInfo(!modalInfo);

  //ModalHistoryHeader
  const [modalHistory, setModalHistory] = useState(false);
  const toggleModalHistory = () => setModalHistory(!modalHistory);

  const [isOpen, setIsOpen] = useState(false);
  const { userInfo, userInfoHistoryBooking, isLoading, error } = useSelector(
    (state) => state.auth
  );

  const toggleNav = () => setIsOpen(!isOpen);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);

  const handleLogout = () => {
    dispatch(logout());
  };
  const handleButtonHistoryBooking = () => {
    dispatch(getUserInfoHistoryBooking({taiKhoan : userInfo.taiKhoan}));
    toggleModalHistory();
  }
  const handleChangeInfoHome = (values) => {
    toggleModalInfo();
    dispatch(updateAtUser(values));
  };
console.log(userInfo)
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
                  src="/img/logoAdc.png"
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
                    {userInfo ? (
                      <NavItem>
                        <Dropdown
                          className="dropOptions navRight"
                          isOpen={dropdownOpen}
                          toggle={toggleDropdown}
                        >
                          <DropdownToggle caret>
                            {userInfo.hoTen}
                          </DropdownToggle>
                          <DropdownMenu>
                            <DropdownItem onClick={toggleModalInfo}>
                              Thông Tin Tài Khoản
                              <ModalInfoHeader
                              data={userInfo}
                              handleChangeInfoHome={handleChangeInfoHome}
                                modalInfo={modalInfo}
                                toggleModalInfo={toggleModalInfo}
                              />
                            </DropdownItem>
                            <DropdownItem onClick={handleButtonHistoryBooking}>
                              Lịch Sử Đặt Vé
                              <ModalHistoryHeader
                              data={userInfoHistoryBooking}
                                modalHistory={modalHistory}
                                toggleModalHistory={toggleModalHistory}
                              />
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem onClick={handleLogout}>
                              Đăng Xuất
                              <BoxArrowRight style={{ marginLeft: "30px" }} />
                            </DropdownItem>
                          </DropdownMenu>
                        </Dropdown>
                      </NavItem>
                    ) : (
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
                    )}
                  </Col>
                </Nav>
              </Collapse>
            </Row>
          </Col>
          <Col lg={12}>
            <NavbarToggler onClick={toggleNav} />
          </Col>
        </Row>
      </Navbar>
    </div>
  );
}
