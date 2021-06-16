import { getChiTietPhongVe } from "src/actions/booking";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, Redirect } from "react-router-dom";
import { SemipolarLoading } from "react-loadingg";

export default function Checkout() {
  const dispatch = useDispatch();
  const { maLichChieu } = useParams();
  const { dataChiTietPhongVe, isLoading, error } = useSelector(
    (state) => state.booking
  );

  const gheVip = dataChiTietPhongVe?.danhSachGhe?.filter(
    (item) => item.loaiGhe == "Vip"
  );
  const gheThuong = dataChiTietPhongVe?.danhSachGhe?.filter(
    (item) => item.loaiGhe == "Thuong"
  );
  // console.log("vip",gheVip )
  // console.log("thuong",gheThuong )


    console.log(dataChiTietPhongVe);


  useEffect(() => {
    dispatch(getChiTietPhongVe(maLichChieu));
  }, [maLichChieu]);

  const userCheck = localStorage.getItem("userInfo");
  if (userCheck == null) {
    return <Redirect to="/login" />;
  }
  if (isLoading) {
    return (
      <div>
        <SemipolarLoading color="#6B439B" />
      </div>
    );
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div id="checkout" style={{background: `linear-gradient(to top, #F27B13,#F2Ec94)`}}>
      <div
      style={{ paddingTop: "70px", width:"80%", margin:"auto"}}
      className="row"
    >
      <div className="col-12">
        <h1 className="text-center">Booking Online</h1>
      </div>
      
      <div className="col-6" style={{backgroundColor: "#FDFCF0"}}>
      <div className="img__manHinh">
        <img width="100%" src="/img/bg-screen.png" alt="manHinh" />
      </div>
        <div className="row">
          {gheThuong?.map((item) => (
            <div className="col-1" style={{ textAlign: "center" }}>
              <button
                className="btn "
                style={{
                  border: "1px solid green",
                  width: "55px",
                  textAlign: "center",
                }}
              >
                {item.tenGhe}
              </button>
            </div>
          ))}
        </div>
        <div className="row">
          {gheVip?.map((item) => (
            <div className="col-1">
              <button
                className="btn "
                style={{
                  border: "1px solid red",
                  width: "55px",
                  textAlign: "center",
                }}
              >
                {item.tenGhe}
              </button>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-4">
            <button
              disabled
              className="btn"
              style={{
                border: "1px solid red",
                backgroundColor: "red",
                width: "55px",
                color: "black",
              }}
            >
              STT
            </button>
            <span>Đã Chọn</span>
          </div>
          <div className="col-4">
            <button
              disabled
              className="btn"
              style={{ backgroundColor: "gray", width: "55px", color: "black" }}
            >
              STT
            </button>
            <span>Đang Chọn</span>
          </div>
          <div className="col-4">
            <button
              disabled
              className="btn"
              style={{
                backgroundColor: "gray",
                border: "1px solid green",
                width: "55px",
                color: "black",
              }}
            >
              X
            </button>
            <span>Đã Đặt</span>
          </div>
          <div className="col-4">
            <button
              disabled
              className="btn"
              style={{ border: "1px solid red", width: "55px", color: "black" }}
            >
              STT
            </button>
            <span>Ghế VIP</span>
          </div>
          
          <div className="col-4">
            <button
              disabled
              className="btn"
              style={{
                border: "1px solid green",
                width: "55px",
                color: "black",
              }}
            >
              STT
            </button>
            <span>Ghế Thường</span>
          </div>
          
        </div>
      </div>
      <div className="col-5" style={{ marginLeft: "30px" }}>
        <h3>Thông Tin Phim</h3>
        <div className="row">
          <div
            className="col-12"
            style={{
              backgroundColor: "#242424",
              color: "white",
              position: "relative",
            }}
          >
            <div
              className="top__design"
              style={{ position: "absolute", top: "-11px", left: "20px" }}
            >
              <img src="/img/bg-top-seatmap.png" alt="hinhTop" />
              <img src="/img/bg-top-seatmap.png" alt="hinhTop" />
              <img src="/img/bg-top-seatmap.png" alt="hinhTop" />
              <img src="/img/bg-top-seatmap.png" alt="hinhTop" />
              <img src="/img/bg-top-seatmap.png" alt="hinhTop" />
              <img src="/img/bg-top-seatmap.png" alt="hinhTop" />
              <img src="/img/bg-top-seatmap.png" alt="hinhTop" />
              <img src="/img/bg-top-seatmap.png" alt="hinhTop" />
              <img src="/img/bg-top-seatmap.png" alt="hinhTop" />
              <img src="/img/bg-top-seatmap.png" alt="hinhTop" />
              <img src="/img/bg-top-seatmap.png" alt="hinhTop" />
            </div>
            
            <div className="row">
              <div className="col-4">
                <img width="100%" height="90%" style={{marginTop:"10px"}} src={dataChiTietPhongVe?.thongTinPhim?.hinhAnh} alt="hinhAnh" />
              </div>
              <div className="col-8">
              <p><b>Tên Phim : </b>{dataChiTietPhongVe?.thongTinPhim?.tenPhim}</p>
            <p><b>Thời Gian Chiếu : </b>{dataChiTietPhongVe?.thongTinPhim?.gioChieu} - {dataChiTietPhongVe?.thongTinPhim?.ngayChieu}</p>
            <p><b>Địa Chỉ : </b>{dataChiTietPhongVe?.thongTinPhim?.diaChi}</p>
            <p><b>Tên Phim : </b>{dataChiTietPhongVe?.thongTinPhim?.tenPhim}</p>
            <p><b>Tên Rạp : </b>{dataChiTietPhongVe?.thongTinPhim?.tenRap}, {dataChiTietPhongVe?.thongTinPhim?.tenCumRap}</p>
              </div>
            </div>
            
            <div
              className="bottom__design"
              style={{ position: "absolute", bottom: "-10px", left: "20px" }}
            >
              <img src="/img/bg-bottom-seatmap.png" alt="hinhBottom" />
              <img src="/img/bg-bottom-seatmap.png" alt="hinhBottom" />
              <img src="/img/bg-bottom-seatmap.png" alt="hinhBottom" />
              <img src="/img/bg-bottom-seatmap.png" alt="hinhBottom" />
              <img src="/img/bg-bottom-seatmap.png" alt="hinhBottom" />
              <img src="/img/bg-bottom-seatmap.png" alt="hinhBottom" />
              <img src="/img/bg-bottom-seatmap.png" alt="hinhBottom" />
              <img src="/img/bg-bottom-seatmap.png" alt="hinhBottom" />
              <img src="/img/bg-bottom-seatmap.png" alt="hinhBottom" />
              <img src="/img/bg-bottom-seatmap.png" alt="hinhBottom" />
              <img src="/img/bg-bottom-seatmap.png" alt="hinhBottom" />
            </div>
          </div>
        </div>
        <div className="col-12" style={{backgroundColor: "green", marginTop:"50px"}}>
              <p>Khi Đặt Vé thì mọi thông tin sẽ được load lại ở đây, vì dụ như là mã ghế đã đặt -- giá tiền, tổng tiền, nút xóa từng chỗ, nút đồng ý đặt sau khi chọn xong hết </p>
            </div>
      </div>
    </div>
    </div>
  );
}
