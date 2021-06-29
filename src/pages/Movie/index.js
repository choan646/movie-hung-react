import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovie } from "src/redux/actions/movie";
import { SemipolarLoading } from "react-loadingg";
import { useParams, Redirect } from "react-router-dom";
import { PlayCircle } from "react-bootstrap-icons";
import { Modal } from "reactstrap";
import DetailMovieInfo from "./DetailMovieInfo";

export default function Movie() {
  const dispatch = useDispatch();
  const { movieId } = useParams();
  const { data, isLoading, error } = useSelector((state) => state.movie);

  const movieSelected = data?.filter((item) => {
    return Number(item.maPhim) === Number(movieId);
  });

  const toggleTrailer = () => setModalTrailer(!modalTrailer);
  const [modalTrailer, setModalTrailer] = useState(false);

  useEffect(() => {
    dispatch(getMovie());
  }, []);
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
  return (
    <>
      {movieSelected.map((itemTrue) => (
        <div id="detailMovie" key={itemTrue.maPhim}>
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
              </div>
              <DetailMovieInfo data={itemTrue} />
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
