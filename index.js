const menu = [
    {
      id: 1,
      title: "Buttermilk Pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./images/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "Diner Double",
      category: "lunch",
      price: 13.99,
      img: "./images/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "Godzilla Milkshake",
      category: "shakes",
      price: 6.99,
      img: "./images/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "Country Delight",
      category: "breakfast",
      price: 20.99,
      img: "./images/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "Egg Attack",
      category: "lunch",
      price: 22.99,
      img: "./images/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "Oreo Dream",
      category: "shakes",
      price: 18.99,
      img: "./images/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "Bacon Overflow",
      category: "breakfast",
      price: 8.99,
      img: "./images/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "American Classic",
      category: "lunch",
      price: 12.99,
      img: "./images/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "Quarantine Buddy",
      category: "shakes",
      price: 16.99,
      img: "./images/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: "Steak Dinner",
      category: "dinner",
      price: 39.99,
      img: "./images/item-10.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];
  
  const menuItem = document.querySelector(".menu-item");
  
  // dynamically add menu items
  
  function createMenuItems(menuItems) {
    const items = menuItems.map((item) => {
      return `<article>
        <div class="menu-item-image">
          <img src="${item.img}" alt="menu-item" />
        </div>
        <div class="menu-item-info">
          <header>
            <h3 class="menu-item-title">${item.title}</h3>
            <p class="menu-item-price">$${item.price}</p>
          </header>
          <div class="menu-item-desc">
            <p>
              ${item.desc}
            </p>
          </div>
        </div>
      </article>`;
    });
  
    menuItem.innerHTML = items.join(" ");
  }
  
  window.addEventListener("DOMContentLoaded", () => {
    createMenuItems(menu);
  });
  
  // add filter logic
  
  const filterBtns = document.querySelector(".filter-btns");
  
  const filterValue = function (e) {
    if (e.target.tagName == "BUTTON") {
      const filterValue = e.target.dataset.value;
      filterMenu(filterValue);
    }
  };
  
  const filterMenu = function (filterValue) {
    if (filterValue == "all") {
      createMenuItems(menu);
    } else {
      const filteredItems = createFilterMenu(filterValue);
      createMenuItems(filteredItems);
    }
  };
  
  const createFilterMenu = (filterValue) => {
    const filteredItems = menu.filter((item) => {
      return item.category == filterValue;
    });
  
    return filteredItems;
  };
  
  filterBtns.addEventListener("click", filterValue);