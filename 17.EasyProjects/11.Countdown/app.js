const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");
// const currentDate= new Date();
const futureDate = new Date(2023, 07, 27, 8, 30, 00);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

const day = futureDate.getDate();

let month = futureDate.getMonth();
month = months[month];

let dayOfWeek = futureDate.getDay();
dayOfWeek = weekdays[dayOfWeek];

giveaway.textContent = `Giveaway ends on ${dayOfWeek}, ${day} ${month} ${year}, ${hours}:${minutes}am`;

//future time in milliseconds
const futureTime = futureDate.getTime();
// console.log(futureTime)

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureDate - today;
  console.log(t);
  // 1s = 1000ms
  // 1min = 60s
  // 1h = 60min
  // 1day = 24hours

  //values in ms:
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMin = 60 * 1000;
  // const oneSec = 1000;

  let days = Math.floor(t / oneDay);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMin);
  let seconds = Math.floor((t % oneMin) / 1000);
}
getRemainingTime();
