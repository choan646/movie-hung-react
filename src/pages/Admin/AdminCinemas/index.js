import React, { useEffect, useState } from "react";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { SemipolarLoading } from "react-loadingg";
import { useDispatch, useSelector } from "react-redux";
import { getShowTimesByIdMovie } from "src/redux/actions/cinemas";
import { addNewShowTimes } from "src/redux/actions/booking";

import AdminCinemaAdd from "./AdminCinemaAdd";
import Button from "@material-ui/core/Button";
import AdminCinemaSearch from "./AdminCinemaSearch";
import AdminCinemaTable from "./AdminCinemaTable";

export default function AdminCinemas() {
  const dispatch = useDispatch();
  //CinemaModal setup
  const [modalCinema, setModalCinema] = useState(false);
  const toggleModalCinema = () => setModalCinema(!modalCinema);

  //IsAddDone set up
  const [isDone, setIsDone] = useState(false);
  const toggleAddIsDone = () => setIsDone(!isDone);

  const { dataShowTimesByMovie, isLoading, error } = useSelector(
    (state) => state.cinema
  );

  const handleSearchIdMovie = (values) => {
    dispatch(getShowTimesByIdMovie(values.maPhim));
  };
  const handleAddShowTime = (values) => {
    toggleAddIsDone();
    dispatch(addNewShowTimes(values));
    toggleModalCinema();
    dispatch(getShowTimesByIdMovie(values.maPhim));
  };

  useEffect(() => {
      dispatch(getShowTimesByIdMovie(dataShowTimesByMovie?.maPhim));
  }, [modalCinema]);

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
        variant="contained"
        color="primary"
        className="cinemaAdmin__buttonAdd"
        style={{
          marginLeft: "82%",
          marginBottom: "30px",
          marginTop: "-126px",
          padding: "8px 15px",
        }}
        onClick={toggleModalCinema}
        disabled={disable}
      >
        Tạo Lịch Chiếu{" "}
        <AiOutlineAppstoreAdd
          style={{ marginLeft: "10px", marginTop: "-5px" }}
        />
      </Button>
      <AdminCinemaAdd
        data={dataShowTimesByMovie}
        modalCinema={modalCinema}
        toggleModalCinema={toggleModalCinema}
        handleAddShowTime={handleAddShowTime}
      />

      <div
        className="cinemaAdmin__content"
        style={{ width: "85%", margin: "auto" }}
      >
        <AdminCinemaTable data={dataShowTimesByMovie} />
      </div>
    </div>
  );
}
