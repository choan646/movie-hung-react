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
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { BoxArrowRight } from "react-bootstrap-icons";
import {
  logout,
  getUserInfoHistoryBooking,
  updateAtUser,
} from "src/redux/actions/auth";
import { SemipolarLoading } from "react-loadingg";
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
  const toggleNav = () => setIsOpen(!isOpen);

  const { userInfo, userInfoHistoryBooking, isLoading, error } = useSelector(
    (state) => state.auth
  );

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);

  const handleLogout = () => {
    dispatch(logout());
  };
  const handleButtonHistoryBooking = () => {
    dispatch(getUserInfoHistoryBooking({ taiKhoan: userInfo.taiKhoan }));
    toggleModalHistory();
  };
  const handleChangeInfoHome = (values) => {
    toggleModalInfo();
    dispatch(updateAtUser(values));
  };

  //Scroll
  const scrollToLichChieu = () =>
    window.scrollTo({ top: 707, behavior:"smooth" });
  const scrollToCumRap = () =>
    window.scrollTo({ top: 2323, behavior: "smooth" });
  const scrollToUngDung = () =>
    window.scrollTo({ top: 3838, behavior: "smooth" });
  //Style Link
  const styleLink = {
    paddingTop: "8px",
    marginRight: "30px",
    textAlign: "center",
  };

  if (isLoading) {
    return (
      <div>
        <SemipolarLoading color="#6B439B" />
      </div>
    );
  }
  if (error) {
    return <div>{error}</div>;
  }
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
          <Col lg={7} style={{ marginLeft: "-80px" }}>
            <Row lg={1}>
              <Collapse isOpen={isOpen} navbar>
                <Nav navbar>
                  <Col lg={7} className="d-flex">
                    <NavItem style={styleLink}>
                      <Link to="/" onClick={scrollToLichChieu}>
                        Lịch Chiếu
                      </Link>
                    </NavItem>
                    <NavItem style={styleLink}>
                      <Link to="/" onClick={scrollToCumRap}>
                        Cụm Rạp
                      </Link>
                    </NavItem>
                    <NavItem style={styleLink}>
                      <Link to="/">Tin Tức</Link>
                    </NavItem>
                    <NavItem style={styleLink}>
                      <Link to="/" onClick={scrollToUngDung}>
                        Ứng Dụng
                      </Link>
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
