import React, { useEffect, useState } from "react";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { SemipolarLoading } from "react-loadingg";
import { useDispatch, useSelector } from "react-redux";
import { getShowTimesByIdMovie } from "src/redux/actions/cinemas";
import AdminCinemaAdd from "./AdminCinemaAdd";
import { Button } from "reactstrap";
import AdminCinemaSearch from "./AdminCinemaSearch";

export default function AdminCinemas() {
  const dispatch = useDispatch();
  //CinemaModal setup
  const [modalCinema, setModalCinema] = useState(false);
  const toggleModalCinema = () => setModalCinema(!modalCinema);

  const { dataShowTimesByMovie, isLoading, error } = useSelector(
    (state) => state.cinema
  );

  const handleSearchIdMovie = (values) => {
    dispatch(getShowTimesByIdMovie(values.maPhim));
  };
  const handleAddShowTime = (values) => {
    console.log(values);
  };
  console.log(dataShowTimesByMovie);
  if (isLoading) {
    return (
      <div>
        <SemipolarLoading color="#6B439B" />
      </div>
    );
  }
  let disable = true;
  if (dataShowTimesByMovie.length != 0) {
    disable = false;
  }
  return (
    <div className="cinemaAdmin">
      <div className="cinemaAdmin__linkTo">
        <p>Quản Lý Lịch Chiếu</p>
      </div>
      <AdminCinemaSearch
        handleSearchIdMovie={handleSearchIdMovie}
        data={dataShowTimesByMovie}
      />
      <Button
        color="primary"
        className="cinemaAdmin__buttonAdd"
        style={{ marginLeft: "82%", marginBottom: "30px", marginTop: "-126px" }}
        onClick={toggleModalCinema}
        disabled={disable}
      >
        Thêm Lịch Chiếu{" "}
        <AiOutlineAppstoreAdd
          style={{ marginLeft: "10px", marginTop: "-5px" }}
        />
      </Button>
      <AdminCinemaAdd
        modalCinema={modalCinema}
        toggleModalCinema={toggleModalCinema}
        handleAddShowTime={handleAddShowTime}
      />

      <div className="cinemaAdmin__content"></div>
    </div>
  );
}
