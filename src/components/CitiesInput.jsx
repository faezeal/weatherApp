import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getWeatherInfoAction } from '../redux/weather/weatherAction';

function CitiesInput() {

    const { data } = useSelector((state) => state);
    const dispatch = useDispatch();
    const [query, setQuery] = useState("");

    const handleGetWeather = (e) => {
        e.preventDefault();
        dispatch(getWeatherInfoAction(query));
        console.log(data);
        setQuery("");
      };


  return (
    <div className=" border-bottom border-dark shadow w-25 rounded">
    <form onSubmit={handleGetWeather}>
      <input
        className="customInput rounded fs-2 shadow-lg "
        placeholder={data.name || "نام شهر یا کشور"}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  </div>
  )
}

export default CitiesInput