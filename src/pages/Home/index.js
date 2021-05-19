import ListMovies from "src/pages/Home/ListMovies";
import React from "react";
import { Link } from "react-router-dom";
import Slider from 'src/pages/Home/Slider'
import BackNews from "src/pages/Home/BackNews";
import BackNewNext from "./BackNewNext";
import UngDung from "./UngDung";

export default function Home() {
  return (
    <div>
      <Slider></Slider>
      <Link to="/checkout/:movieId">Test Check out</Link>
     <ListMovies></ListMovies>
     <BackNews></BackNews>
      <div id="cumRap" style={{height:"300px", backgroundColor:"yellow"}}>cum rap</div>
      <BackNewNext></BackNewNext>
      <div id="tinTuc" style={{height:"300px", backgroundColor:"green"}}>tintuc</div>
      <UngDung></UngDung>
    </div>
  );
}
