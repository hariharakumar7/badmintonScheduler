import React from "react";

export default class Schedule extends React.Component {
  // get the number of rows. If possible, get only the next 3 slots always based on the current date.
  // Open slots based on the date.

  render() {
    const availableDatesObject = availableDates();
    const dates = availableDatesObject.printDates;
    const days = availableDatesObject.printDays;
    const arr = [];
    for (let i = 0; i < dates.length; i++) {
      arr.push(i);
    }
    return (
      <div class="cardList">
        {arr.map((pos) => (
          <Card date={dates[pos]} day={days[pos]} />
        ))}
      </div>
    );
  }
}

// card will have date, selection
const Card = (props) => {
  return (
    <div id="card">
      <button>
        <h3>{props.date}</h3>
        <h4>{props.day}</h4>
      </button>
    </div>
  );
};

const dateComponent = (props) => {
  const dates = availableDates();
};

const availableDates = (props) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const badmintonDays = [1, 3];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const printDays = [];
  const printDates = [];
  let currentDay = getCSTDay();
  const currentDate = new Date();
  while (printDays.length < 3) {
    currentDay = currentDay % 7;
    if (badmintonDays.indexOf(currentDay) != -1) {
      printDays.push(days[currentDay]);
      const dateVal = currentDate.getDate().toString();
      const monthVal = months[currentDate.getMonth()];
      printDates.push(dateVal + " " + monthVal);
    }
    currentDay += 1;
    currentDate.setDate(currentDate.getDate() + 1);
  }
  const retVal = {};
  retVal.printDays = printDays;
  retVal.printDates = printDates;
  return retVal;
};

const getCSTDay = (props) => {
  const currentDate = new Date()
    // .toLocaleString("en-US", {
    //   timeZone: "America/Chicago",
    // })
    .getDay();
  return currentDate;
};

// database schema should hold, date, name of the participant, their ID. This allows us to map
// number of games users played.
