import { getChiTietPhongVe } from "src/actions/booking";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, Redirect } from "react-router-dom";
import { SemipolarLoading } from "react-loadingg";
import AllActionDatVe from "./AllActionDatVe";

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
    <div id="checkout">
      <div className="checkout__title">
        <h1>Booking Online</h1>
      </div>
      <div className="checkout__content row">
        <div className="checkout__content__left col-7">
          <div className="img__manHinh">
            <img src="/img/bg-screen.png" alt="manHinh" />
          </div>
          <div className="row checkout__gheThuong">
            {gheThuong?.map((item) => {
              //
              // Về vấn đề đã đặ thì disable,lúc nào hoàn thành xong action đặt vé hãy check lại, bây giờ tạm vậy đã
              //
              let styleGheDaDat = "styleButtonGheThuong";
              let disabled = false;
              if (item.daDat) {
                styleGheDaDat = "styleButtonDaDat";
                disabled = true;
              }
              return (
                <div className="col-1">
                  <button
                    disabled={disabled}
                    className={`btn ${styleGheDaDat}`}
                  >
                    {item.daDat == false ? item.tenGhe : "X"}
                  </button>
                </div>
              );
            })}
          </div>
          <div className="row checkout__gheVip">
            {gheVip?.map((item) => {
              let styleGheDaDat = "styleButtonGheVip";
              let disabled = false;
              if (item.daDat) {
                styleGheDaDat = "styleButtonDaDat";
                disabled = true;
              }
              return (
                <div className="col-1">
                  <button
                    disabled={disabled}
                    className={`btn ${styleGheDaDat}`}
                  >
                    {item.daDat == false ? item.tenGhe : "X"}
                  </button>
                </div>
              );
            })}
          </div>
          <div className="row checkout__comment">
            <div className="col-6 d-flex">
              <button disabled className="btn styleButtonDangChon">
                STT
              </button>
              <p>Đang Chọn</p>
            </div>
            <div className="col-6 d-flex">
              <button disabled className="btn styleButtonDaDat">
                X
              </button>
              <p>Đã Đặt</p>
            </div>

            <div className="col-6 d-flex">
              <button disabled className="btn styleButtonGheVip">
                STT
              </button>
              <p>Ghế VIP</p>
            </div>

            <div className="col-6 d-flex">
              <button disabled className="btn styleButtonGheThuong">
                STT
              </button>
              <p>Ghế Thường</p>
            </div>
          </div>
        </div>
        <div className="col-5 checkout__content__right">
          <h3>
            <i>Thông Tin Phim</i>
          </h3>
          <div className="banner__infoMovie">
            <div
              className="top__design"
              style={{
                position: "absolute",
                top: "0",
                left: "24px",
                width: "93%",
                background: `url("/img/bg-top-seatmap.png") repeat-x transparent`,
                height: "8px",
                overflow: "hidden",
              }}
            ></div>

            <div className="row">
              <div className="col-4 banner__infoMovie__img">
                <img
                  src={dataChiTietPhongVe?.thongTinPhim?.hinhAnh}
                  alt="hinhAnh"
                />
              </div>
              <div className="col-8 banner__infoMovie__detail">
                <p>
                  <b>Tên Phim : </b>
                  {dataChiTietPhongVe?.thongTinPhim?.tenPhim}
                </p>
                <p>
                  <b>Thời Gian Chiếu : </b>
                  {dataChiTietPhongVe?.thongTinPhim?.gioChieu} -
                  {dataChiTietPhongVe?.thongTinPhim?.ngayChieu}
                </p>
                <p>
                  <b>Địa Chỉ : </b>
                  {dataChiTietPhongVe?.thongTinPhim?.diaChi}
                </p>
                <p>
                  <b>Tên Rạp : </b>
                  {dataChiTietPhongVe?.thongTinPhim?.tenRap} ,
                  {dataChiTietPhongVe?.thongTinPhim?.tenCumRap}
                </p>
              </div>
            </div>

            <div
              className="bottom__design"
              style={{
                position: "absolute",
                bottom: "-3px",
                left: "24px",
                width: "93%",
                background: `url("/img/bg-bottom-seatmap.png") repeat-x transparent`,
                height: "8px",
                overflow: "hidden",
              }}
            ></div>
          </div>
          <AllActionDatVe />
        </div>
      </div>
    </div>
  );
}
