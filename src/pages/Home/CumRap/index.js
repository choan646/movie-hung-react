import React, { useEffect, useState } from "react";
import { SemipolarLoading } from "react-loadingg";
import { useDispatch, useSelector } from "react-redux";
import {
  getCinemas,
  getCumRapByCinemas,
  getShowTimesByCinemas,
} from "src/actions/cinemas";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import classnames from "classnames";
import ItemColSecond from "./ItemColSecond";
import ItemColThird from "./ItemColThird";

export default function CumRap() {
  const dispatch = useDispatch();
  const {
    dataCinemas,
    dataCumRapByCinemas,
    dataShowTimesByCinemas,
    isLoading,
    error,
  } = useSelector((state) => state.cinema);

  const [activeTab, setActiveTab] = useState("bhd-star-cineplex");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const handleGetTest = (maHeThongRap, biDanh) => {
    dispatch(getCumRapByCinemas(maHeThongRap));
    dispatch(getShowTimesByCinemas(maHeThongRap));
    toggle(biDanh);
  };

  const defaultValue = "BHDStar";
  useEffect(() => {
    dispatch(getCinemas());
    dispatch(getCumRapByCinemas(defaultValue));
    dispatch(getShowTimesByCinemas(defaultValue));
  }, []);

  if (isLoading) {
    return (
      <div>
        <SemipolarLoading color="#6B439B" />;
      </div>
    );
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div id="cumRap" className="container">
      <div className="row">
        <div className="col-2">
          <Nav id="navBig" tabs className="row">
            {dataCinemas.map((item, index) => (
              <NavItem key={index} className="item__rap__phim col-12">
                <NavLink
                  className={classnames({ active: activeTab === item.biDanh })}
                  onClick={() => handleGetTest(item.maHeThongRap, item.biDanh)}
                >
                  <img src={item.logo} alt="logoRap" />
                </NavLink>
              </NavItem>
            ))}
          </Nav>
        </div>
        <div className="col-10">
          <TabContent id="tabBig" activeTab={activeTab}>
            {dataCinemas.map((item) => (
              <TabPane tabId={item.biDanh}>
                <div className="row">
                  <ItemColSecond data={dataCumRapByCinemas} />

                  <ItemColThird data={dataShowTimesByCinemas} />
                </div>
              </TabPane>
            ))}
          </TabContent>
        </div>
      </div>

      
    </div>
  );
}
