import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Modal, ModalBody, ModalFooter, Button } from "reactstrap";
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
import { logout } from "src/actions/auth";

export default function Header() {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { userInfo, isLoading, error } = useSelector((state) => state.auth);

  const toggleNav = () => setIsOpen(!isOpen);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);

  // const resetLocalStorage = () => {
  //   localStorage.clear();
  //   // window.location.reload(); //Tạm thời để như thế này, sau này k được reload
  // };
  const handleLogout = () => {    
    dispatch(logout());
  };

  const toggleModal = () => setModal(!modal);

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
                            <DropdownItem onClick={toggleModal}>
                              Chỉnh Sửa Thông Tin
                              <Modal
                                id="modalInfo"
                                isOpen={modal}
                                toggle={toggleModal}
                              >
                                <ModalBody>
                                  {/* FORM */}
                                  abc
                                </ModalBody>
                                <ModalFooter>
                                  <Button color="primary" onClick={toggleModal}>
                                    Xác Nhận
                                  </Button>
                                  <Button color="danger" onClick={toggleModal}>
                                    Thoát
                                  </Button>
                                </ModalFooter>
                              </Modal>
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem onClick={() => handleLogout()}>
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
