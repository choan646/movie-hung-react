import React, { useState } from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import InfoMovie from "./infoMovie";
import classnames from "classnames";
import ShowTimeMovie from "./showTimeMovie";

export default function DetailMovieInfo({ data }) {
  const [activeTab, setActiveTab] = useState("thongTin");
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <div className=".col-12 detailMovie__info">
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "thongTin" })}
            onClick={() => {
              toggle("thongTin");
            }}
          >
            THÔNG TIN
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "lichChieu" })}
            onClick={() => {
              toggle("lichChieu");
            }}
          >
            LỊCH CHIẾU
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="thongTin">
          <InfoMovie data={data} />
        </TabPane>
        <TabPane tabId="lichChieu">
          <ShowTimeMovie  data={data} />
        </TabPane>
      </TabContent>
    </div>
  );
}
