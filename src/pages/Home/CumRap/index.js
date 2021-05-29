import React , {useEffect} from "react";
import BackNews from "../BackNews";
import { BoxLoading } from "react-loadingg";
import { useDispatch, useSelector } from "react-redux";
import {getCinemas} from 'src/actions/cinemas'

export default function CumRap() {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state) => state.cinema);

  useEffect(() => {
    dispatch(getCinemas());
  }, []);

  console.log(data);
  

  if (isLoading) {
    return (
      <div>
        <BoxLoading />;
      </div>
    );
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div id="cumRap">
      {data.map((item,index) => (
        <div key={index} className="item__rap__phim">
          <p>{item.maHeThongRap}</p>
          <p>{item.tenHeThongRap}</p>
          <p>{item.biDanh}</p>
          <img width="100" height=""src={item.logo} alt="logoRap" />
        </div>
      ))}
      <BackNews></BackNews>
    </div>
  );
}
