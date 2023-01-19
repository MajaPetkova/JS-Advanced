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
  "Saturday"
];
const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");
// const currentDate= new Date();
const futureDate = new Date(2023, 07, 27, 8, 30, 00);
const year= futureDate.getFullYear();
const hours= futureDate.getHours();
const minutes= futureDate.getMinutes();

const day= futureDate.getDate();

let month= futureDate.getMonth();
month= months[month];

let dayOfWeek = futureDate.getDay();
dayOfWeek = weekdays[dayOfWeek];

giveaway.textContent= `Giveaway ends on ${dayOfWeek}, ${day} ${month} ${year}, ${hours}:${minutes}am`

console.log(dayOfWeek)
