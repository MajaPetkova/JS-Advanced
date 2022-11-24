// items

const menu = [
  {
    id: 1,
    title: "Buttermilk pancakes",
    price: 14.99,
    category: "breakfast",
    img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=780&q=80",
    description:
      "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs.",
  },
  {
    id: 2,
    title: "Mediterranean Salad",
    price: 12.99,
    category: "lunch",
    img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    description:
      "Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack.",
  },
  {
    id: 3,
    title: "Hawaiian Chicken PizzaSmoked",
    price: 10.19,
    category: "lunch",
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=781&q=80",
    description:
      "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs.",
  },
  {
    id: 4,
    title: "Seafood pasta with shrimps and tomatoes in a pan",
    price: 20.69,
    category: "dinner",
    img: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description:
      " Flummoxed by job, kvetching W. zaps Iraq. Cozy sphinx waves quart jug of bad milk. A very bad quack might jinx zippy fowls. Few quips galvanized the mock jury box.",
  },
];

const sectionCenter = document.querySelector(".section-center");

window.addEventListener("DOMContentLoaded", onLoad);

function onLoad() {
 displayMenuItems(menu)
}

function displayMenuItems(menuItems){
    let displayMenu = menuItems.map((x) => {
        return `<article class="menu-item">
        <img src="${x.img}">
        <div class="item-info">
            <header>
                <h4 >${x.title}</h4>
                <h4 class="price">$${x.price}</h4>
            </header>
            <p class="item-text">${x.description}</p>
        </div>
    </article>`;
      });
      displayMenu = displayMenu.join("");
      sectionCenter.innerHTML = displayMenu;
}