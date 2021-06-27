import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pagination, PaginationItem } from "reactstrap";
import { getMoviePagination } from "src/redux/actions/movie";
import { SemipolarLoading } from "react-loadingg";
import { MdAddToQueue } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import AdminMovieCardList from "./AdminMovieCardList";
import AdminMovieAdd from "./AdminMovieAdd";
import {
  addMovie,
  deleteMovie,
  setMovieSelected,
  updateMovie
} from "src/redux/actions/movie";
import Swal from "sweetalert2";
import Button from "@material-ui/core/Button";
import AdminMovieUpdate from "./AdminMovieUpdate";

export default function AdminMovies() {
  const dispatch = useDispatch();
  const { currentPage } = useParams();

  //MovieModal setup
  const [modalMovie, setModalMovie] = useState(false);
  const toggleModalMovie = () => setModalMovie(!modalMovie);

  //UpdateModal set up
  const [modalUpdateMovie, setModalUpdateMovie] = useState(false);
  const toggleModalUpdateMovie = () => setModalUpdateMovie(!modalUpdateMovie);

  const { dataPaginate, selectedMovie, isLoading, error } = useSelector(
    (state) => state.movie
  );

  useEffect(() => {
    dispatch(getMoviePagination(currentPage));
  }, [currentPage]);

  const handleAddMovie = (values) => {
    var form_data = new FormData();
    for (var key in values) {
      form_data.append(key, values[key]);
    }
    dispatch(addMovie(form_data, currentPage));
    toggleModalMovie();
  };
  const handleDeleteMovie = (values, tenPhim) => {
    Swal.fire({
      title: `Bạn có muốn xóa ${tenPhim}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Đồng ý",
      cancelButtonColor: "#d33",
      cancelButtonText: "Hủy bỏ",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteMovie(values));
        dispatch(getMoviePagination(currentPage));
        Swal.fire("Xóa Thành Công!", "", "success");
      }
    });
  };

  const getMovieSelected = (values) => {
    dispatch(setMovieSelected(values));
    toggleModalUpdateMovie();
  };

  const handleUpdateMovie = (values) => {
    var form_data_update = new FormData();
    for (var key in values) {
      form_data_update.append(key, values[key]);
    }
    dispatch(updateMovie(form_data_update, currentPage));
    toggleModalUpdateMovie();
  };
  if (isLoading) {
    return (
      <div>
        <SemipolarLoading color="#6B439B" />
      </div>
    );
  }
  return (
    <div className="movieAdmin">
      <div className="movieAdmin__linkTo">
        <p>Quản Lý Phim</p>
      </div>
      <Button
        variant="contained"
        color="primary"
        color="primary"
        className="movieAdmin__buttonAdd"
        style={{
          marginLeft: "80%",
          marginBottom: "30px",
          marginTop: "-55px",
          padding: "8px 20px",
        }}
        onClick={toggleModalMovie}
      >
        Thêm Phim{" "}
        <MdAddToQueue style={{ marginLeft: "15px", marginTop: "-3px" }} />
      </Button>

      <AdminMovieAdd
        toggleModalMovie={toggleModalMovie}
        modalMovie={modalMovie}
        handleAddMovie={handleAddMovie}
      />

      <div className="movieAdmin__content">
        <AdminMovieCardList
          data={dataPaginate}
          handleDeleteMovie={handleDeleteMovie}
          getMovieSelected={getMovieSelected}
        />
        <AdminMovieUpdate
          data={selectedMovie}
          toggleModalUpdateMovie={toggleModalUpdateMovie}
          modalUpdateMovie={modalUpdateMovie}
          handleUpdateMovie={handleUpdateMovie}
        />
        <div className="movieAdmin__pagination">
          <Pagination>
            <PaginationItem>
              <Link to="/admin/movies/soTrang=1">1</Link>
            </PaginationItem>
            <PaginationItem>
              <Link to="/admin/movies/soTrang=2">2</Link>
            </PaginationItem>
            <PaginationItem>
              <Link to="/admin/movies/soTrang=3">3</Link>
            </PaginationItem>
            <PaginationItem>
              <Link to="/admin/movies/soTrang=4">4</Link>
            </PaginationItem>
            <PaginationItem>
              <Link to="/admin/movies/soTrang=5">5</Link>
            </PaginationItem>
            <PaginationItem>
              <Link to="/admin/movies/soTrang=6">6</Link>
            </PaginationItem>
            <PaginationItem>
              <Link to="/admin/movies/soTrang=7">7</Link>
            </PaginationItem>
            <PaginationItem>
              <Link to="/admin/movies/soTrang=8">8</Link>
            </PaginationItem>
          </Pagination>
        </div>
      </div>
    </div>
  );
}
