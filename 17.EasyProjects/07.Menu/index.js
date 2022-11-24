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
  {
    id: 5,
    title: "Oreo shake Chocolate-Vanilla",
    price: 6.99,
    category: "shakes",
    img: "https://images.unsplash.com/photo-1638176066666-ffb2f013c7dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2hha2VzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=400&q=60",
    description:
      "Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack.",
  },
];

const sectionCenter = document.querySelector(".section-center");
const filterBtn = document.querySelectorAll(".filter-btn");
const btnContainer= document.querySelector('.btn-container')

window.addEventListener("DOMContentLoaded", onLoad);

// load Items
function onLoad() {
  displayMenuItems(menu);

  const categories = menu.reduce((values, item) => {
    if(!values.includes(item.category)){
        values.push(item.category)
    }
    return values
  }, ["all"]);
  const categoryBtn=categories.map(x =>{
    return `<button class="filter-btn" type="button" data-id="${x}">${x}</button>`
  })
  btnContainer.innerHTML = categoryBtn.join('')
}

function displayMenuItems(menuItems) {
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

// filter Items
filterBtn.forEach((x) => {
  x.addEventListener("click", onFilter);
});

function onFilter(e) {
  const category = e.currentTarget.dataset.id;

  const menuCategory = menu.filter(function (menuItems) {
    if (menuItems.category == category) {
      return menuItems;
    }
  });
  if (category == "all") {
    displayMenuItems(menu);
  } else if (category == "breakfast") {
    displayMenuItems(menuCategory);
  } else if (category == "lunch") {
    displayMenuItems(menuCategory);
  } else if (category == "shakes") {
    displayMenuItems(menuCategory);
  } else if (category == "dinner") {
    displayMenuItems(menuCategory);
  }
}
