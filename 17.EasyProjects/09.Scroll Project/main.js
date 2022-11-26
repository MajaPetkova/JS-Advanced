const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", onToggle);

function onToggle() {
  // linksContainer.classList.toggle('show-links');
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
}


const navbar=document.getElementById('nav');
const topLink=document.querySelector('.top-link');

window.addEventListener("scroll", onScroll);

function onScroll() {
  const scrollHeight= window.pageYOffset;
  const navHeight= navbar.getBoundingClientRect().height;

  if(scrollHeight > navHeight){
    navbar.classList.add('fixed-nav')
  }else{
    navbar.classList.remove('fixed-nav')
  }
}
