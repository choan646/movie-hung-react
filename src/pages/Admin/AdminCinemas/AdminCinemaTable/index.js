import React, { useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Table,
} from "reactstrap";
import classnames from "classnames";
import Button from '@material-ui/core/Button';
import Swal from "sweetalert2";


export default function AdminCinemaTable({ data }) {
  const [activeTab, setActiveTab] = useState("BHDStar");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const dataHeThongRapChieu = data?.heThongRapChieu?.map((item) => {
    return item;
  });

  const handleDeleteShowTime =(maLichChieu)=> {
    Swal.fire("Chưa Có API Xóa!");
  }
  return (
    <>
      <Nav tabs style={{marginTop: '-30px', border: "none"}}>
        {dataHeThongRapChieu?.map((item) => (
          <NavItem>
            <NavLink
              className={classnames({
                active: activeTab === item?.maHeThongRap,
              })}
              onClick={() => {
                toggle(item?.maHeThongRap);
              }}
            >
              {item?.maHeThongRap}
            </NavLink>
          </NavItem>
        ))}
      </Nav>
      <TabContent activeTab={activeTab}>
        {dataHeThongRapChieu?.map((item,index) => (
          <TabPane key={index} tabId={item?.maHeThongRap} style={{overflowY:"scroll", height:"450px"}}>
            <Table className="cinemaAdmin__table"  >
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Mã Cụm Rạp</th>
                  <th>Mã Lịch Chiếu</th>
                  <th>Mã Rạp</th>
                  <th>Ngày Khởi Chiếu</th>
                  <th>Giá Vé</th>
                  <th>X</th>
                </tr>
              </thead>
              <tbody >
                {item?.cumRapChieu?.map((itemCumRap, indexCumRap) => (
                  <tr key={indexCumRap}>
                      <td>{indexCumRap+1}</td>
                    <td>{itemCumRap?.tenCumRap}</td>
                    <td>
                      {itemCumRap?.lichChieuPhim?.map(
                        (itemLichChieu, indexLichChieu) => (
                          <tr key={indexLichChieu}>
                            <td>
                            <p>{itemLichChieu.maLichChieu}</p>
                            </td>
                          </tr>
                        )
                      )}
                    </td>
                    <td>
                      {itemCumRap?.lichChieuPhim?.map(
                        (itemLichChieu, indexLichChieu) => (
                          <tr key={indexLichChieu}>
                            <td>
                            <p>{itemLichChieu.maRap}</p>
                            </td>
                          </tr>
                        )
                      )}
                    </td>
                    <td>
                      {itemCumRap?.lichChieuPhim?.map(
                        (itemLichChieu, indexLichChieu) => (
                          <tr key={indexLichChieu}>
                            <td>
                            <p>{itemLichChieu.ngayChieuGioChieu}</p>
                            </td>
                          </tr>
                        )
                      )}
                    </td>
                    <td>
                      {itemCumRap?.lichChieuPhim?.map(
                        (itemLichChieu, indexLichChieu) => (
                          <tr key={indexLichChieu}>
                            <td>
                                <p>{itemLichChieu.giaVe}</p>
                            </td>
                          </tr>
                        )
                      )}
                    </td>
                    <td>
                    {itemCumRap?.lichChieuPhim?.map(
                        (itemLichChieu, indexLichChieu) => (
                          <tr key={indexLichChieu}>
                           <td>
                           <Button variant="outlined" color="secondary" style={{marginBottom:"0.25rem"}} onClick={()=>{handleDeleteShowTime(itemLichChieu.maLichChieu)}}>Xóa</Button>
                           </td>
                          </tr>
                        )
                      )}
                      
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </TabPane>
        ))}
      </TabContent>
    </>
  );
}
