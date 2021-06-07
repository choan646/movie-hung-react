import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovie } from "src/actions/movie";
import { SemipolarLoading } from "react-loadingg";
import { useParams } from "react-router-dom";
import { PlayCircle } from "react-bootstrap-icons";
import { Modal } from "reactstrap";

export default function Movie() {
  const dispatch = useDispatch();
  const { movieId } = useParams();
  const { data, isLoading, error } = useSelector((state) => state.movie);

  const movieSelected = data.filter((item) => {
    return Number(item.maPhim) === Number(movieId);
  });

  const toggleTrailer = () => setModalTrailer(!modalTrailer);
  const [modalTrailer, setModalTrailer] = useState(false);

  useEffect(() => {
    dispatch(getMovie());
  }, []);
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
    <>
      {movieSelected.map((itemTrue) => (
        <div id="detailMovie">
          <div className="container">
            <div className="row detailMovie__content">
              {/* {console.log(itemTrue)} */}
              <div className="col-4 detailMovie__item__left">
                <div className="detailMovie__item__content">
                  <img width="100%" src={itemTrue.hinhAnh} alt="hinhanh" />
                  <div className="detailMovie__icon">
                    <PlayCircle size={70} onClick={toggleTrailer} />
                  </div>
                </div>
              </div>
              <div className="col-8 detailMovie__item__right">
                <h3>{itemTrue.tenPhim}</h3>
                <p>{itemTrue.ngayKhoiChieu.substring(8, 10)+"/"+itemTrue.ngayKhoiChieu.substring(5, 7)+"/"+itemTrue.ngayKhoiChieu.substring(0, 4)}</p>
                {/* <p>Thời Gian Bắt Đầu Khởi Chiếu : {itemTrue.ngayKhoiChieu.substring(11)}</p> */}
              </div>
              <div className=".col-12 detailMovie__info">
                <h3>THÔNG TIN</h3>
                <div className="row">
                  <div className="col-6 pl-5 mt-2">
                    <p>
                      <b>Ngày Công Chiếu : </b>
                      {itemTrue.ngayKhoiChieu.substring(8, 10)+"/"+itemTrue.ngayKhoiChieu.substring(5, 7)+"/"+itemTrue.ngayKhoiChieu.substring(0, 4)}
                    </p>
                    <p>
                      <b>Thời Gian Bắt Đầu Khởi Chiếu : </b> {itemTrue.ngayKhoiChieu.substring(11)}
                    </p>
                    <p>
                      <b>Định Dạng : </b> 2D/Digital
                    </p>
                    <p>
                      <b>Đánh Giá : </b> {itemTrue.danhGia} điểm
                    </p>
                  </div>
                  <div className="col-6">
                    <h4>Nội dung</h4>
                    <p>{itemTrue.moTa}</p>
                  </div>
                </div>
              </div>
              <Modal
                className="modalTrailler"
                isOpen={modalTrailer}
                toggle={toggleTrailer}
              >
                <iframe
                  src={itemTrue.trailer}
                  width="900px"
                  height="468px"
                  frameborder="0"
                />
              </Modal>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
