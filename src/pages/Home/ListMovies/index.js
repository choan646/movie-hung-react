import React, { useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
} from "reactstrap";
import classnames from "classnames";
import DangChieu from "./DangChieu";
import SapChieu from "./SapChieu";
import BackNews from "src/pages/Home/BackNews";


export default function ListMovies() {
  const [activeTab, setActiveTab] = useState("dangChieu");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  const styleCenter = {
    textAlign: "center",
  };
  return (
    <div id="lichChieu" style={styleCenter}>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "dangChieu" })}
            onClick={() => {
              toggle("dangChieu");
            }}
          >
            Đang Chiếu
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "sapChieu" })}
            onClick={() => {
              toggle("sapChieu");
            }}
          >
            Sắp Chiếu
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="dangChieu">
          <Row>
            <Col sm="12">
              <DangChieu/>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="sapChieu">
          <Row>
            <Col sm="12">
              <SapChieu/>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
     <BackNews></BackNews>
    </div>
  );
}
