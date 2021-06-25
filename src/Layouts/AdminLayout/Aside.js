/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  SubMenu,
} from "react-pro-sidebar";
import {
  FaHome,
  FaUserFriends,
  FaGooglePlay,
  FaRegLaughWink,
} from "react-icons/fa";
import { BiCameraMovie } from "react-icons/bi";
import sidebarBg from "./assets/d.jpg";
import { IoMailOutline } from "react-icons/io5";

const Aside = ({ collapsed, email }) => {
  return (
    <ProSidebar   image={sidebarBg}  collapsed={!collapsed} breakPoint="md">
     
      <SidebarHeader>
        <div
          style={{
            paddingLeft: "40px",
            overflow: "hidden",
            backgroundColor: "#594757",
          }}
        >
          <Link to="/admin">
            <img
              src="/img/movie-booking.png"
              width="140px"
              height="60px"
              alt="logo"
            />
          </Link>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <SubMenu icon={<FaHome />} title="Home">
            <MenuItem icon={<FaRegLaughWink />}>
              <Link to="/admin/home">Trang Chính</Link>
            </MenuItem>
            <MenuItem icon={<FaRegLaughWink />}>
              <Link to="/admin/info">Thông Tin Cá Nhân</Link>
            </MenuItem>
          </SubMenu>

          <MenuItem icon={<FaUserFriends />}>
            <Link to="/admin/users/soTrang=1">Quản lý Người Dùng</Link>
          </MenuItem>
          <MenuItem icon={<FaGooglePlay />}>
            <Link to="/admin/movies/soTrang=1">Quản Lý Phim</Link>
          </MenuItem>
          <MenuItem icon={<BiCameraMovie />}>
            <Link to="/admin/cinemas">Quản Lý Lịch Chiếu</Link>
          </MenuItem>
        </Menu>
      </SidebarContent>

      <SidebarFooter iconShape="circle">
        <div className="sidebar-btn-wrapper">
          <a href="#">
            <IoMailOutline />
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Aside;
