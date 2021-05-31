import React, { useEffect, useState } from "react";
import BackNews from "../BackNews";
import { BoxLoading } from "react-loadingg";
import { useDispatch, useSelector } from "react-redux";
import { getCinemas,getCumRapByCinemas } from "src/actions/cinemas";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import classnames from "classnames";

export default function CumRap() {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state) => state.cinema);

  const [activeTab, setActiveTab] = useState("bhd-star-cineplex");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  useEffect(() => {
    dispatch(getCinemas());
  }, []);
  

  if (isLoading) {
    return (
      <div>
        <BoxLoading />;
      </div>
    );
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div id="cumRap" className="container">
      <Nav tabs>
        {data.map((item, index) => (
          <NavItem key={index} className="item__rap__phim">
            <NavLink
              className={classnames({ active: activeTab === item.biDanh })}
              onClick={() => toggle(item.biDanh)}
            >
              <img width="100" height="" src={item.logo} alt="logoRap" />
            </NavLink>
          </NavItem>
        ))}
      </Nav>
      <TabContent activeTab={activeTab}>
        {data.map((item, index) => (
          <TabPane tabId={item.biDanh}>
            <p>{item.tenHeThongRap}</p>
          </TabPane>
        ))}
      </TabContent>
      <BackNews></BackNews>
    </div>
  );
}
