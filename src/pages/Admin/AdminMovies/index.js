import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Pagination, PaginationItem } from "reactstrap";
import { getMoviePagination } from "src/redux/actions/movie";
import { SemipolarLoading } from "react-loadingg";
import { MdAddToQueue } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import AdminMovieCardList from "./AdminMovieCardList";
import AdminMovieAdd from "./AdminMovieAdd";
import { addMovie, deleteMovie } from "src/redux/actions/movie";
import Swal from "sweetalert2";

export default function AdminMovies() {
  const dispatch = useDispatch();
  const { currentPage } = useParams();

  //MovieModal setup
  const [modalMovie, setModalMovie] = useState(false);
  const toggleModalMovie = () => setModalMovie(!modalMovie);

  const { dataPaginate, isLoading, error } = useSelector(
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
        color="primary"
        className="movieAdmin__buttonAdd"
        style={{ marginLeft: "83%", marginBottom: "30px", marginTop: "-55px" }}
        onClick={toggleModalMovie}
      >
        Thêm Phim <MdAddToQueue style={{ marginLeft: "10px", marginTop:"-5px"  }} />
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
