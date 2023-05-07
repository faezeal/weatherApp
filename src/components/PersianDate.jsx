import React, { useEffect, useState } from "react";
import moment from "moment-jalaali";

const daysOfWeek = [
  "یکشنبه",
  "دوشنبه",
  " سه شنبه",
  " چهارشنبه",
  " پنج شنبه",
  " جمعه",
];
const monthOFYear = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند",
];
// --------------
function PersianDate() {
  //---------------
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  //---------------
  useEffect(() => {
    const m = moment();
    const dateForm = `${daysOfWeek[m.day()]} ${m.jDate()} ${
      monthOFYear[m.jMonth()]
    } ${m.jYear()}`;
    setDate(dateForm);
    const timeForm = ` ${m.format("HH:mm")} ساعت`;
    setTime(timeForm);
  }, []);
  //---------------

  return (
    <div className="d-flex flex-column text-center text-dark m-4 text-shadow ">
      <h5 className="pb-3">{date}</h5>
      <h5>{time}</h5>
    </div>
  );
}

export default PersianDate;
