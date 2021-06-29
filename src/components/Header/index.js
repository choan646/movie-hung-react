import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
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
  getInfoUser,
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

  //reload header when update info's user
  const [isUpdateUser, setIsUpdateUser] = useState(false);
  const toggleUpdateUser = () => setIsUpdateUser(!isUpdateUser);

  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = () => setIsOpen(!isOpen);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);

  const { userInfo, userInfoHistoryBooking, isLoading, error } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {}, [isUpdateUser]);

  const handleLogout = () => {
    dispatch(logout());
  };
  const handleButtonHistoryBooking = () => {
    dispatch(getUserInfoHistoryBooking({ taiKhoan: userInfo.taiKhoan }));
    toggleModalHistory();
  };
  const handleChangeInfoHome = (values) => {
    toggleModalInfo();
    toggleUpdateUser();
    dispatch(updateAtUser(values));
    dispatch(getInfoUser(userInfo?.taiKhoan));
  };
  //Scroll
  const scrollToLichChieu = () =>
    window.scrollTo({ top: 707, behavior: "smooth" });
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
  // console.log(userInfo)
  return (
    <div id="header">
      <Navbar expand="md">
        <div className="row">
          <div className="col-5">
            <Link to="/">
              <img
                className="webLogo"
                src="/img/logoAdc.png"
                alt="logo"
                style={{ marginTop: "5px", marginBottom: "0px" }}
              />
            </Link>
          </div>
          <div className="col-7" style={{ marginLeft: "-80px" }}>
            <div className="row">
              <NavbarToggler onClick={toggleNav} />
              <Collapse isOpen={isOpen} navbar>
                <Nav navbar>
                  <div className="col-7 d-flex" style={{ marginTop: "5px" }}>
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
                  </div>
                  <div className="col-5" style={{ marginTop: 10 }}>
                    {userInfo ? (
                      <NavItem>
                        <Dropdown
                          className="dropOptions navRight"
                          isOpen={dropdownOpen}
                          toggle={toggleDropdown}
                        >
                          <DropdownToggle caret>
                            {userInfo?.hoTen}
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
                  </div>
                </Nav>
              </Collapse>
            </div>
          </div>
        </div>
      </Navbar>
    </div>
  );
}
