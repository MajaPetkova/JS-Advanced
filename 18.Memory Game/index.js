const cards = document.querySelectorAll(".memory-card");
let hasFlippedCard = false;
let firstCard;
let secondCard;

cards.forEach((card) => card.addEventListener("click", flipCard));

function flipCard(e) {
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

    if (firstCard.dataset.framework === secondCard.dataset.framework) {
      firstCard.removeEventListener("click", flipCard);
      secondCard.removeEventListener("click", flipCard);
    }else{
        setTimeout(()=>{

            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip')
        }, 1500)
    }
  }
}
