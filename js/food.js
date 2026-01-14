
const foods = [
  {
    id: 1,
    img: 'assets/food/food-1.jpg',
    title: 'Food',
    description: 'Dry pet food',
    price: '10$'
  },
  {
    id: 2,
    img: 'assets/food/food-2.jpg',
    title: 'Food',
    description: 'Dry pet food, dog and cat can eat.',
    price: '15$'
  },
  {
    id: 3,
    img: 'assets/food/food-3.jpg',
    title: 'Food',
    description: 'Dry pet food',
    price: '14$'
  },
  {
    id: 4,
    img: 'assets/food/food-4.jpg',
    title: 'Food',
    description: 'Dry potato pet food, it has three type to choose.',
    price: '12$'
  }
];


let food = '';

for (let i = 0; i < foods.length; i++) {
  food += `
<div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
  <div class="card rounded-3 overflow-hidden h-100 position-relative">
    <img src="${foods[i].img}" class="card-img-top" alt="toy">
    <span class="position-absolute top-0 end-0 m-2 
                 bg-primary text-card px-2 py-1 rounded-pill">
      ${foods[i].price}
    </span>
    <div class="card-body d-flex flex-column">
      <h5 class="card-title mb-1">${foods[i].title}</h5>
      <p class="card-text text-muted line-clamp">
        ${foods[i].description}
      </p>
      <div class="mt-auto text-end">
        <button 
          class="btn btn-primary text-card add-to-cart"
          data-id="${foods[i].id}"
          data-title="${foods[i].title}"
          data-price="${foods[i].price}"
          data-img="${foods[i].img}"
        >
          Add to cart
        </button>
      </div>
    </div>
  </div>
</div>
  `;
};

document.getElementById("dogFood").innerHTML = food;

const catFoods = [
    {
        id: 5,
        img: 'assets/cats/c-1.jpg',
        title: 'Dry food',
        description: 'Favourite food of cat',
        price: '14$'
    },
    {
        id: 6,
        img: 'assets/cats/c-2.jpg',
        title: 'Dry food',
        description: 'Favourite food of cat',
        price: '14$'
    },
    {
        id: 7,
        img: 'assets/cats/c-3.jpg',
        title: 'Dry food',
        description: 'Favourite food of cat',
        price: '14$'
    },
    {
        id: 8,
        img: 'assets/cats/c-4.jpg',
        title: 'Dry food',
        description: 'Favourite food of cat',
        price: '14$'
    }
];

let catFood = '';

for(let i = 0; i < catFoods.length; i++) {
    catFood += `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
  <div class="card rounded-3 overflow-hidden h-100 position-relative">
    <img src="${catFoods[i].img}" class="card-img-top" alt="toy">
    <span class="position-absolute top-0 end-0 m-2 
                 bg-primary text-card px-2 py-1 rounded-pill">
      ${catFoods[i].price}
    </span>
    <div class="card-body d-flex flex-column">
      <h5 class="card-title mb-1">${catFoods[i].title}</h5>
      <p class="card-text text-muted line-clamp">
        ${catFoods[i].description}
      </p>
      <div class="mt-auto text-end">
        <button 
          class="btn btn-primary text-card add-to-cart"
          data-id="${catFoods[i].id}"
          data-title="${catFoods[i].title}"
          data-price="${catFoods[i].price}"
          data-img="${catFoods[i].img}"
        >
          Add to cart
        </button>
      </div>
    </div>
  </div>
</div>
    `;

};

document.getElementById("catFood").innerHTML = catFood;

const buttons = document.querySelectorAll(".filter-btn");
const sections = document.querySelectorAll(".food-section");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const filter = button.dataset.filter;

        // Button active state
        buttons.forEach(btn => {
            btn.classList.remove("btn-primary");
            btn.classList.add("btn-light");
        });
        button.classList.remove("btn-light");
        button.classList.add("btn-primary");

        // Show / hide sections
        sections.forEach(section => {
            if (filter === "all") {
                section.style.display = "block";
            } else {
                section.style.display = section.classList.contains(filter)
                    ? "block"
                    : "none";
            }
        });
    });
});
