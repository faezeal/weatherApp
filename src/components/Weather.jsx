import React, { useEffect, useState } from "react";
import PersianDate from "./PersianDate";
import { useSelector } from "react-redux";
import TempShow from "./TempShow";
import CitiesInput from "./CitiesInput";

function Weather() {
  const { data } = useSelector((state) => state);
  const [backMode, setBackMode] = useState("usual");

  useEffect(() => {
    if (!data.main) {
      return;
    }

    let temp = data.main.temp;
    if (temp < 15) {
      setBackMode("cold");
    }
    if (temp < 23) {
      setBackMode("usual");
    } else {
      setBackMode("warm");
    }
  }, [data]);

  return (
    <div
      className={`back-${backMode} w-100 vh-100 d-flex flex-column align-items-center justify-content-center`}
    >
      <CitiesInput />
      <PersianDate />
      <TempShow />
    </div>
  );
}

export default Weather;
