import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Pagination, PaginationItem } from "reactstrap";
import { getMoviePagination } from "src/redux/actions/movie";
import { SemipolarLoading } from "react-loadingg";
import { AiFillFolderAdd } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import AdminMovieCardList from "./AdminMovieCardList";
import AdminMovieAdd from "./AdminMovieAdd";

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
    console.log(values);
  };
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
        Thêm Phim <AiFillFolderAdd style={{ marginLeft: "10px" }} />
      </Button>

      <AdminMovieAdd
        toggleModalMovie={toggleModalMovie}
        modalMovie={modalMovie}
        handleAddMovie={handleAddMovie}
      />

      <div className="movieAdmin__content">
        <AdminMovieCardList data={dataPaginate} />
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
          </Pagination>
        </div>
      </div>
    </div>
  );
}
