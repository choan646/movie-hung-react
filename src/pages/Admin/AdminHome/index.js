import React from "react";
import { Link } from "react-router-dom";

export default function AdminHome() {
  return (
    <div className="adminHome">
      <div className="adminHome__linkTo">
        <p>
        <Link to="/admin/home">Home</Link> / Trang Chính
      </p> 
      </div>
     
    </div>
  );
}
