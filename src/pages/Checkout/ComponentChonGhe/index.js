import React from "react";

export default function ComponentChonGhe({
  data,
  listGheDangChon,
  styleButton,
  handleDatGhe,
}) {
  return (
    <div className="row checkout__gheThuong">
      {data?.map((item, index) => {
        let styleGheDaDat = styleButton;
        let disabled = false;
        //Trang thai ghe da dat
        if (item.daDat) {
          styleGheDaDat = "styleButtonDaDat";
          disabled = true;
        }
        //trang thai dang chon
        let styleGheDangChon = "";
        let indexGheDangChon = listGheDangChon.findIndex(
          (gheDangChon) => gheDangChon.tenGhe === item.tenGhe
        );
        if (indexGheDangChon !== -1) {
          styleGheDangChon = "styleButtonDangChon";
        }
        
        return (
          <div className="col-1" key={index}>
            <button
              onClick={() => handleDatGhe(item)}
              disabled={disabled}
              className={`btn ${styleGheDaDat} ${styleGheDangChon}`}
            >
              {item.daDat == false ? item.tenGhe : "X"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
