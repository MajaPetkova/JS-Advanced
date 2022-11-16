const reviews = [
  {
    id: 1,
    name: "Bob Smith",
    job: "Web Developer",
    img: "https://media.istockphoto.com/id/1344688156/photo/portrait-of-a-man-using-a-computer-in-a-modern-office.jpg?b=1&s=170667a&w=0&k=20&c=AAVVOvN9uY1Rd_0QsWb8WvBN-4VSUdCORiZx51s5OLc=",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo reiciendis omnis, eaque voluptatum laudantium voluptates blanditiis veritatis eum architecto earum;",
  },
  {
    id: 2,
    name: "Maria Jonson",
    job: "Web Designer",
    img: "https://www.iodocs.com/wp-content/uploads/2019/01/female-web-developers.jpg",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo reiciendis omnis, eaque voluptatum laudantium voluptates blanditiis veritatis eum architecto earum;",
  },
  {
    id: 3,
    name: "Maria Jonson",
    job: "Manager",
    img: "https://cdn.utorontobootcamp.com/wp-content/uploads/sites/97/2019/06/BlogImage_WebDeveloper5.jpg",
  },
  {
    id: 4,
    name: "Alex Montoya",
    job: "Sales Manager",
    img: "https://webuniversals.co.in/wp-content/uploads/2016/02/mantrans02c.jpg",
  },
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const randomBtn = document.querySelector("random-btn");

//set starting item
let currentItem = 3;

// load initial item
window.addEventListener("DOMContentLoaded", onLoad);

function onLoad() {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  randomBtn.textContent = item.info;
}
