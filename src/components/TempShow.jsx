import React from "react";
import { useDispatch, useSelector } from "react-redux";

function TempShow() {
  const { loading, data, error } = useSelector((state) => state);

  return (
    <>
      {loading ? (
        <button
          className="btn btn-outline-dark btn-lg  p-2"
          type="button"
          disabled
        >
          <span
            className="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
          Loading...
        </button>
      ) : data.main ? (
        <>
          <div className="border  rounded textAlign degreeSpan w-25">
            <span className="fontDegree">
              {Math.round(data.main.temp - 273.15)}
            </span>
            °C
          </div>
          <div>
            <h1 className="text-light my-4">{data.weather[0].main}</h1>
          </div>
        </>
      ) : error ? (
        <h3>نام شهر یا کشور را به درستی وارد کنید</h3>
      ) : (
        <h3>نام شهر یا کشور مورد نظر خود را وارد کنید</h3>
      )}
    </>
  );
}

export default TempShow;
