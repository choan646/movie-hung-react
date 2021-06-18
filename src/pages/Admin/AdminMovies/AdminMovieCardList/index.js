import React from "react";
import AdminMovieCardItem from "./AdminMovieCardItem";

export default function AdminMovieCardList({ data }) {

  return (
    <div className="movieAdmin__cardList d-flex row">
      {data.items?.map((item) => (
        <AdminMovieCardItem data={item} />
        ))}
    </div>
  );
}