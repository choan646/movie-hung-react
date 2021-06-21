import React, { useState } from "react";
import Aside from "./Aside";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { logout } from "src/redux/actions/auth";
import { FaUserCircle } from "react-icons/fa";
import { IoNotificationsOutline, IoSettingsOutline } from "react-icons/io5";
import Switch from "react-switch";
import Main from "./Main";
import Badge from "@material-ui/core/Badge";

function Layout({ children }) {
  const dispatch = useDispatch();

  const [collapsed, setCollapsed] = useState(false);
  const { userInfo } = useSelector((state) => state.auth);

  const [dropdownOpen, setOpen] = useState(false);
  const toggleLogout = () => setOpen(!dropdownOpen);

  const handleCollapsedChange = (checked) => {
    setCollapsed(checked);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  if (!userInfo) {
    return <Redirect to="/login" />;
  }
  const nameAdmin = userInfo.hoTen;
  // const emailAdmin = userInfo.email;
  return (
    <div id="admin" className="admin">
      <Aside
        // email={emailAdmin}
        collapsed={collapsed}
        handleCollapsedChange={handleCollapsedChange}
      />
      <div className="admin__content__right">
        <div
          className="d-flex"
          style={{
            height: "60px",
            padding: "0",
            margin: "0",
          }}
        >
          <div className="block button__collapse">
            <Switch
              height={20}
              width={40}
              checkedIcon={false}
              uncheckedIcon={false}
              onChange={handleCollapsedChange}
              checked={collapsed}
              onColor="#00C6DC"
              offColor="#bbbbbb"
              boxShadow="none"
            />
            <p style={{ marginLeft: "10px" }}>Collapsed</p>
          </div>
          <div className="info__admin__detail d-flex">
            <div className="nameAdmin">
              <Link to="/admin/info" className="d-flex">
                <FaUserCircle />
                {nameAdmin}
              </Link>
            </div>
            <div className="notiAmin">
              <Link to="/admin/home" className="d-flex">
                <Badge color="secondary" variant="dot">
                  <IoNotificationsOutline />
                </Badge>
              </Link>
            </div>
            <Dropdown
              className="settingAdmin"
              isOpen={dropdownOpen}
              toggle={toggleLogout}
            >
              <DropdownToggle color="none">
                <IoSettingsOutline />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem onClick={() => handleLogout()}>
                  Đăng Xuất
                </DropdownItem>
                <DropdownItem>Example more...</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
        <Main content={children} />
      </div>
    </div>
  );
}

export default Layout;
