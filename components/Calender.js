"use client";

import { baseRating, gradients } from "@/utils";
import React, { useState } from "react";
baseRating;

const months = {
  January: "Jan",
  February: "Feb",
  March: "Mar",
  April: "Apr",
  May: "May",
  June: "Jun",
  July: "Jul",
  August: "Aug",
  September: "Sept",
  October: "Oct",
  November: "Nov",
  December: "Dec",
};

const now = new Date();
const dayList = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// const demoData = {
//   15: 2,
//   16: 4,
//   17: 1,
//   18: 3,
//   19: 5,
//   20: 2,
//   21: 4,
//   22: 1,
//   23: 3,
//   24: 5,
// };

export default function Calender(props) {
  const { demo, completedData, handleSetMood } = props;

  const now = new Date();
  const currentMonth = now.getMonth();
  const [selectedMonth, setSelectedMonth] = useState(
    Object.keys(months)[currentMonth]
  );
  const [selectedYear, setSelectedYear] = useState(now.getFullYear());

  // const numericMonth = Object.keys(month);
  const numericMonth = Object.keys(months).indexOf(selectedMonth);
  const data = completedData?.[selectedYear]?.[selectedMonth] || {};
  function handleIncrementMonth(val) {}

  console.log("SELECTED MONTH IS: ", selectedMonth);

  const monthNow = new Date(
    selectedYear,
    Object.keys(months).indexOf(selectedMonth),
    1
  );
  const firstDayOfMonth = monthNow.getDay();
  const daysInMonth = new Date(
    selectedYear,
    Object.keys(selectedMonth).indexOf(selectedMonth) + 1,
    0
  ).getDate();

  const daysToDisplay = firstDayOfMonth + daysInMonth;
  const numRows = Math.floor(daysToDisplay / 7) + (daysToDisplay % 7 ? 1 : 0);
  return (
    <div className="flex flex-col overflow-hidden gap-1 py-4 sm:py-6 md:py-10">
      {/* {[...Array(numRows).keys()].map((row, rowIndex) => { */}
      {[...Array(numRows).keys()].map((row, rowIndex) => {
        return (
          <div key={rowIndex} className="grid grid-cols-7 gap-1">
            {dayList.map((dayOfWeek, dayOfWeekIndex) => {
              let dayIndex =
                rowIndex * 7 + dayOfWeekIndex - (firstDayOfMonth - 1);

              let dayDisplay =
                dayIndex > daysInMonth
                  ? false
                  : row === 0 && dayOfWeekIndex < firstDayOfMonth
                  ? false
                  : true;

              let isToday = dayIndex === now.getDate();

              if (!dayDisplay) {
                return <div className="bg-white" key={dayOfWeekIndex} />;
              }

              let color = demo
                ? gradients.indigo[baseRating[dayIndex]]
                : dayIndex in data
                ? gradients.indigo[data[dayIndex]]
                : "white";

              return (
                <div
                  style={{ background: color }}
                  className={
                    "text-xs sm:text-sm border border-solid p-2 flex items-center gap-2 justify-between rounded-lg " +
                    (isToday ? " border-indigo-400" : " border-indigo-100") +
                    (color === "white" ? " text-indigo-400" : " text-white")
                  }
                  key={dayOfWeekIndex}
                >
                  <p>{dayIndex}</p>
                </div>
                // <div>{dayIndex}</div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
