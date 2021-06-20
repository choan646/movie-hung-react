import ListMovies from "src/pages/Home/ListMovies";
import React from "react";
import Slider from "src/pages/Home/Slider";
import UngDung from "./UngDung";
import CumRap from "./CumRap";

export default function Home() {
  return (
    <div>
      <Slider />
      <ListMovies />
      <CumRap />
      <UngDung />
    </div>
  );
}
