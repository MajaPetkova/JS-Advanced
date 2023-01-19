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
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");
// const currentDate= new Date();
const futureDate = new Date(2023, 07, 27, 8, 30, 00);
const year= futureDate.getFullYear();
const month= months[7];
const day= futureDate.getDate();
const dayOfWeek=weekdays[6];
const hours= futureDate.getHours();
const minutes= futureDate.getMinutes();
giveaway.textContent= `Giveaway ends on ${dayOfWeek}, ${day} ${month} ${year}, ${hours}:${minutes}am`


