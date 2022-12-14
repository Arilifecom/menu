//items
const menu = [{
  id: 1,
  title: "DRINKSET 1",
  category: "drinkset",
  price: 12,
  img: "./img/drinkset1.PNG",
  desc: `Muffins - drink set. All meals are our homemade.
  Even the cream is made with our own fruits. We use only ingredients from our own garden.`
}, {
  id: 2,
  title: "DRINKSET 2",
  category: "drinkset",
  price: 12,
  img: "./img/drinkset2.PNG",
  desc: `Muffins - drink set. All meals are our homemade.
  Even the cream is made with our own fruits. We use only ingredients from our own garden.`
}, {
  id: 3,
  title: "DRINKSET 3",
  category: "drinkset",
  price: 12,
  img: "./img/drinkset3.PNG",
  desc: `Muffins - drink set. All meals are our homemade.
  Even the cream is made with our own fruits. We use only ingredients from our own garden.`
}, {
  id: 4,
  title: "DRINK 1",
  category: "drink",
  price: 7,
  img: "./img/drink1.PNG",
  desc: `Muffins - drink set. All meals are our homemade.
  Even the cream is made with our own fruits. We use only ingredients from our own garden.`
}, {
  id: 5,
  title: "DRINK 2",
  category: "drink",
  price: 7,
  img: "./img/drink2.PNG",
  desc: `Muffins - drink set. All meals are our homemade.
  Even the cream is made with our own fruits. We use only ingredients from our own garden.`
}, {
  id: 6,
  title: "DRINK 3",
  category: "drink",
  price: 7,
  img: "./img/drink3.PNG",
  desc: `Muffins - drink set. All meals are our homemade.
  Even the cream is made with our own fruits. We use only ingredients from our own garden.`
}, {
  id: 7,
  title: "ICECREAM 1",
  category: "icecream",
  price: 7,
  img: "./img/icecream1.PNG",
  desc: `Muffins - drink set. All meals are our homemade.
  Even the cream is made with our own fruits. We use only ingredients from our own garden.`
}, {
  id: 8,
  title: "ICECREAM 2",
  category: "icecream",
  price: 7,
  img: "./img/icecream2.PNG",
  desc: `Muffins - drink set. All meals are our homemade.
  Even the cream is made with our own fruits. We use only ingredients from our own garden.`
}, {
  id: 9,
  title: "COFFEE 1",
  category: "coffee",
  price: 6,
  img: "./img/coffee1.PNG",
  desc: `Muffins - drink set. All meals are our homemade.
  Even the cream is made with our own fruits. We use only ingredients from our own garden.`
}, {
  id: 10,
  title: "HOTSHAKE",
  category: "hotshakes",
  price: 6,
  img: "./img/hotshake.PNG",
  desc: `Muffins - drink set. All meals are our homemade.
  Even the cream is made with our own fruits. We use only ingredients from our own garden.`
}];

const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");


// ????????????????????????
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons();
});

//?????????????????????????????????
function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
    <img class="img" src=${item.img} alt=${item.title}>
    <div class="menu-info">
      <div class="header">
        <h3 class="menu-title">${item.title}</h3>
        <h3 class="price">${item.price}</h3>
      </div>
      <div class="item-text">
        <p>${item.desc}</p>
      </div>
    </div>
  </article>`
  });
  displayMenu = displayMenu.join('');

  sectionCenter.innerHTML = displayMenu;
}

//??????????????????????????????
function displayMenuButtons() {
  const categories = menu.reduce(function (values, item) {
    if (!values.includes(item.category)) {
      values.push(item.category);
    }
    return values;
  },
    ['all']
  );
  const categoryBtns = categories.map(function (category) {
    return `<button class="filer-btn" type="button" data-id=${category}>${category}</button>`
  })
    .join("");
  container.innerHTML = categoryBtns;
  const filterBtns = container.querySelectorAll(".filer-btn");
  
  //??????????????????????????????????????????
  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem
        }
      });
      // console.log(menuCategory);
      if (category === 'all') {
        displayMenuItems(menu)
      }
      else {
        displayMenuItems(menuCategory);
      }
    });
  });
}