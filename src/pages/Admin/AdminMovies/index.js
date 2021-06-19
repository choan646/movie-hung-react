import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Pagination, PaginationItem } from "reactstrap";
import { getMoviePagination } from "src/redux/actions/movie";
import { SemipolarLoading } from "react-loadingg";
import { AiFillFolderAdd } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import AdminMovieCardList from "./AdminMovieCardList";


export default function AdminMovies() {
  const dispatch = useDispatch();
  const { currentPage } = useParams();
  const { data, isLoading, error } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(getMoviePagination(currentPage));
  }, [currentPage]);

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
      >
        Thêm Phim <AiFillFolderAdd style={{ marginLeft: "10px" }} />
      </Button>
      <div className="movieAdmin__content">
        <AdminMovieCardList data={data}/>
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
