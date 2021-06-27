/* eslint-disable no-use-before-define */
import React from "react";
import { useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";

export default function SearchMovie() {
  const history = useHistory();
  const { data, isLoading, error } = useSelector((state) => state.movie);

  const items = data?.map((item) => {
    const firstLetter = item.tenPhim[0].toUpperCase();
    // const idMovie = item.maPhim;
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
      ...item,
    };
  });
  const handleSeach = (values) => {
    const itemSearchAtHome = data?.find((item) => item.tenPhim === values);
    if (itemSearchAtHome != undefined) {
      const returnUrl = `/movie/${itemSearchAtHome?.maPhim}`;
      history.push(returnUrl);
    }
  };
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
        style={{ width: 700, marginTop: "70px" }}
        renderInput={(params) => (
          <div className="d-flex">
            <TextField {...params} label="Tìm Kiếm Phim" variant="standard" />
            <Button
              onClick={() => handleSeach(params.inputProps.value)}
              variant="contained"
              style={{
                backgroundColor: "#fa5238",
                color: "#fff",
                textTransform: "none",
                marginLeft: "30px",
                width: "170px",
                letterSpacing: "2px",
              }}
            >
              <SearchIcon fontSize="small" style={{ marginRight: "5px" }} />
              Detail..
            </Button>
          </div>
        )}
      />
    </div>
  );
}
