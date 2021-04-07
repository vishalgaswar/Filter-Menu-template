const menu = [
  {
    id: 1,
    title: "What is Lorem Ipsum?",
    category: "website",
    price: 15.99,
    img: "../img/item.png",
    desc: `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. `,
  },
  {
    id: 2,
    title: "What is Lorem Ipsum?",
    category: "android",
    price: 13.99,
    img: "../img/item.png",
    desc: `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. `,
  },
  {
    id: 3,
    title: "What is Lorem Ipsum?",
    category: "digital",
    price: 6.99,
    img: "../img/item.png",
    desc: `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.`,
  },
  {
    id: 4,
    title: "What is Lorem Ipsum?",
    category: "website",
    price: 20.99,
    img: "../img/item.png",
    desc: `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. `,
  },
  {
    id: 5,
    title: "What is Lorem Ipsum?",
    category: "android",
    price: 22.99,
    img: "../img/item.png",
    desc: `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. `,
  },
  {
    id: 6,
    title: "What is Lorem Ipsum?",
    category: "digital",
    price: 18.99,
    img: "../img/item.png",
    desc: `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.`,
  },
  {
    id: 7,
    title: "What is Lorem Ipsum?",
    category: "website",
    price: 8.99,
    img: "../img/item.png",
    desc: `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. `,
  },
  {
    id: 8,
    title: "What is Lorem Ipsum?",
    category: "android",
    price: 12.99,
    img: "../img/item.png",
    desc: `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.`,
  },
  {
    id: 9,
    title: "What is Lorem Ipsum?",
    category: "digital",
    price: 16.99,
    img: "../img/item.png",
    desc: `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.`,
  },
  {
    id: 10,
    title: "What is Lorem Ipsum?",
    category: "digital",
    price: 22.99,
    img: "../img/item.png",
    desc: `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.`,
  },
];
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

// diplay all item when page loads
window.addEventListener("DOMContentLoaded",function() {
    displayMenuItem(menu);
    displayMenuButton();
});

function displayMenuItem(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}
function displayMenuButton() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
       console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
         console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        displayMenuItem(menu);
      } else {
        displayMenuItem(menuCategory);
      }
    });
  });
}