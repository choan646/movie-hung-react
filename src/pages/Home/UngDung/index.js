import React, { Component } from "react";
import Slider from "react-slick";
import BackNews from "../TopSideThis";

export default function UngDung() {
  const settings = {
    infinite: true,
    speed: 200,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    pauseOnHover: true,
    touchMove: false,
  };
  const listSlides = [
    { src: "/img/slide1.jpg" },
    { src: "/img/slide2.jpg" },
    { src: "/img/slide3.jpg" },
    { src: "/img/slide4.jpg" },
    { src: "/img/slide5.jpg" },
    { src: "/img/slide6.jpg" },
    { src: "/img/slide7.jpg" },
    { src: "/img/slide8.jpg" },
    { src: "/img/slide9.jpg" },
    { src: "/img/slide10.jpg" },
    { src: "/img/slide11.jpg" },
    { src: "/img/slide12.jpg" },
    { src: "/img/slide13.jpg" },
    { src: "/img/slide14.jpg" },
    { src: "/img/slide15.jpg" },
    { src: "/img/slide16.jpg" },
  ];
  return (
    <div style={{marginTop: "70px"}}>
      <BackNews />
      <div id="ungDung" style={{ backgroundImage: `url(/img/backapp.jpg)` }}>
        <div className="row content">
          <div className="col-md-6 content__left">
            <h3>Ứng dụng tiện lợi dành cho người yêu điện ảnh</h3>
            <p className="text__first">
              Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và
              đổi quà hấp dẫn.
            </p>
            <a
              href="https://itunes.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197?mt=8"
              target="_blank"
              className="link__app__button"
            >
              App miễn phí - Tải về ngay!
            </a>
            <p className="text__end">
              TIX có hai phiên bản
              <a
                href="https://apps.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197"
                target="_blank"
              >
                IOS
              </a>
              &
              <a
                href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123"
                target="_blank"
              >
                Android
              </a>
            </p>
          </div>
          <div className="col-md-5 content__right">
            <img
              className="vien__mobile"
              src="/img/mobile.png"
              alt="hinhanhMoBile"
            />
            <div className="screen__mobile">
              <Slider {...settings}>
                {listSlides.map((item, index) => (
                  <div key={index} className="screen__mobile__item">
                    <img src={item.src} alt="slide..." />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
