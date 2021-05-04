import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getMovieByCategory} from "../../actions/movie";
import {BoxLoading } from 'react-loadingg'

export default function Movie() {
  const dispatch = useDispatch();
  const { category } = useParams();
  const { movie, isLoading, error } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(getMovieByCategory(category));
  }, [category]);
  if(isLoading){
      return <div>
          <BoxLoading />;
      </div>
  }
  if(error){
      return <div>
          {error}
      </div>
  }
  return (
    <div>
      <h1>Movie detail...</h1>
    </div>
  );
}
