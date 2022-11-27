const cards = document.querySelectorAll(".memory-card");
let hasFlippedCard = false;
let lockBoard = false;
let firstCard;
let secondCard;

cards.forEach((card) => card.addEventListener("click", flipCard));

function flipCard(e) {
  if (lockBoard) return;
  if(e.currentTarget== firstCard) return;
  e.currentTarget.classList.add("flip");

  if (!hasFlippedCard) {
    //first click
    hasFlippedCard = true;
    firstCard = e.currentTarget;
    // console.log(hasFlippedCard, firstCard);
  } else {
    //second click
    hasFlippedCard = false;
    secondCard = e.currentTarget;
    checkForMatch();
  }
}

function checkForMatch() {
  if (firstCard.dataset.framework === secondCard.dataset.framework) {
    disableCards();
  } else {
    unflipCards();
  }
}
function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
}
function unflipCards() {
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    lockBoard = false;
  }, 1200);
}

(function shuffle(){
  cards.forEach(card =>{
    let randomPos=Math.floor(Math.random() * 12)
    card.style.order = randomPos;
  }) 
}) ()
