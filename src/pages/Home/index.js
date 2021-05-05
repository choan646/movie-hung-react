import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1 className="pt-5">Home page</h1>
      <div id="slider"></div>
      <div id="lichChieu" style={{height:"300px", backgroundColor:"blue"}}>lichChieu</div>
      <div id="cumRap" style={{height:"300px", backgroundColor:"yellow"}}>cum rap</div>
      <div id="tinTuc" style={{height:"300px", backgroundColor:"green"}}>tintuc</div>
      <div id="ungDung" style={{height:"300px", backgroundColor:"purple"}}>ung dung</div>
      <Link to="/checkout/:movieId">Test Check out</Link>
    </div>
  );
}
