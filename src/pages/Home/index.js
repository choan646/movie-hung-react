import ListMovies from "src/components/ListMovies";
import React from "react";
import { Link } from "react-router-dom";
import Slider from 'src/components/Slider'
import BackNews from "src/components/BackNews";

export default function Home() {
  return (
    <div>
      <Slider></Slider>
     <ListMovies></ListMovies>
     <BackNews></BackNews>
      <div id="cumRap" style={{height:"300px", backgroundColor:"yellow"}}>cum rap</div>
      <BackNews></BackNews>
      <div id="tinTuc" style={{height:"300px", backgroundColor:"green"}}>tintuc</div>
      <div id="ungDung" style={{height:"300px", backgroundColor:"purple"}}>ung dung</div>
      <Link to="/checkout/:movieId">Test Check out</Link>
    </div>
  );
}
