import React, { useState } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";
import DetailLichChieu from "./DetailLichChieu";

export default function DetailCinema({ data }) {
  const [activeTab, setActiveTab] = useState("thongTinAtCinema");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "thongTinAtCinema" })}
            onClick={() => {
              toggle("thongTinAtCinema");
            }}
          >
            Thông Tin
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({
              active: activeTab === "lichChieuAtCinema",
            })}
            onClick={() => {
              toggle("lichChieuAtCinema");
            }}
          >
            Lịch Chiếu
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="thongTinAtCinema">
          <div className="row">
            <div
              className="col-6"
              style={{ marginTop: "20px", paddingLeft: "100px" }}
            >
              <p>
                <b>Địa Điểm : </b>
                {data.diaChi}
              </p>
              <p>
                <b>Điện Thoại : </b>0915280646
              </p>
              <p>
                <b>Email : </b>gogogo0646@gmail.com
              </p>
              <p>
                <b>Giờ Mở Cửa : </b>8:30 - 23:00
              </p>
            </div>
            <div className="col-6">
              <h6>
                <b>Giới Thiệu</b>
              </h6>
              <p style={{ lineHeight: "30px" }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
                blanditiis aspernatur ex cupiditate.Libero veniam vero explicabo
                culpa vitae cumque odit id necessitatibus quisquam ratione dolor
                a? Enim sequi ipsam corrupti aperiam similique!
              </p>
            </div>
          </div>
        </TabPane>
        <TabPane tabId="lichChieuAtCinema">
          <DetailLichChieu data={data} />
        </TabPane>
      </TabContent>
    </>
  );
}
