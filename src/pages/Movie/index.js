import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getMovie} from "src/actions/movie";
import {BoxLoading } from 'react-loadingg'

export default function Movie() {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(getMovie());
  }, []);
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
  console.log(data)
  return (
    <div>
      <h1>Movie detail...</h1>
    </div>
  );
}
