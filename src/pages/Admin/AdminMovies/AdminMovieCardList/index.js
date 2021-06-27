import React from "react";
import AdminMovieCardItem from "./AdminMovieCardItem";

export default function AdminMovieCardList({ data ,handleDeleteMovie,getMovieSelected}) {

  return (
    <div className="movieAdmin__cardList d-flex row">
      {data.items?.map((item, index) => (
        <AdminMovieCardItem key={index} data={item} handleDeleteMovie={handleDeleteMovie} getMovieSelected={getMovieSelected}/>
        ))}
    </div>
  );
}
