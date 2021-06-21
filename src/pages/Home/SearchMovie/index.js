/* eslint-disable no-use-before-define */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Redirect } from "react-router-dom";
import { getMovie, getMovieSearch } from "src/redux/actions/movie";
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

export default function SearchMovie() {
  const dispatch = useDispatch();

  const { data, dataSearch, isLoading, error } = useSelector(
    (state) => state.movie
  );

  useEffect(() => {
    dispatch(getMovie());
  }, []);

  const items = data?.map((item) => {
    const firstLetter = item.tenPhim[0].toUpperCase();
    // console.log(item.maPhim);
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
      ...item,
    };
  });

  //Chưa bấm search được, nếu bấm được thì chuyển sang trang movie của bộ phim có tên trên TextField=> maPhim lên url 
  const handleSearch = (tuKhoa) => {
    dispatch(getMovieSearch(tuKhoa));
    // return <Redirect to={`/movie/${Number(maPhimSearch)}`} />;
  };
  const maPhimSearch = dataSearch?.map((itemSearch) => {
    return itemSearch.maPhim;
  });

  return (
    <div className="search__content d-flex">
      <Autocomplete
        id="grouped-demo"
        className="container"
        options={items.sort(
          (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
        )}
        groupBy={(item) => item.firstLetter}
        getOptionLabel={(item) => item.tenPhim}
        value={(item) => item.maPhim}
        style={{ width: 700, marginTop:"70px" }}
        renderInput={(params) => (
          <div className="d-flex">
            {/* {console.log("day",params.inputProps.value)} */}
            <TextField {...params} label="Tìm Kiếm Phim" variant="standard" />

            <Button
            //   onClick={() => handleSearch(params.inputProps.value)}
              variant="contained"
              style={{backgroundColor:"#fa5238", color:"#fff", textTransform:"none",marginLeft:"30px", width:"120px"}}
            >
              <SearchIcon fontSize="small" style={{marginRight:"5px"}}/>
              Search
            </Button>
          </div>
        )}
      />
    </div>
  );
}
