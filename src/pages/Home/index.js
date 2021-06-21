import ListMovies from "src/pages/Home/ListMovies";
import React from "react";
import Slider from "src/pages/Home/Slider";
import UngDung from "./UngDung";
import CumRap from "./CumRap";
import SearchMovie from "./SearchMovie";

export default function Home() {
  return (
    <div>
      <Slider />
      <div
        className="bottom__carousel"
        style={{
          height: "5px",
          width: "100%",
          background: "linear-gradient(to right, #f27b13, #f2ec94)",
        }}
      ></div>
      <SearchMovie />
      <ListMovies />
      <CumRap />
      <UngDung />
    </div>
  );
}
