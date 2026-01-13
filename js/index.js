
const products = [
  {
    img: 'assets/toys/t-1.jpg',
    title: 'Toy',
    description: 'cute toy',
    price: '30$'
  },
  {
    img: 'assets/toys/t-2.jpg',
    title: 'Toy',
    description: 'cute toy',
    price: '20$'
  },
  {
    img: 'assets/toys/t-3.jpg',
    title: 'Toy',
    description: 'cute toy',
    price: '40$'
  },
  {
    img: 'assets/toys/t-4.jpg',
    title: 'Toy',
    description: 'cute toy',
    price: '15$'
  },
  {
    img: 'assets/toys/ac-1.jpg',
    title: 'Collar',
    description: 'Colorful Collar easy to use with your pet.',
    price: '22$'
  },
  {
    img: 'assets/toys/ac-2.jpg',
    title: 'Leash',
    description: 'For baby pet.',
    price: '20$'
  },
  {
    img: 'assets/toys/ac-3.jpg',
    title: 'Leash',
    description: 'Can bring your dog anywhere with it.',
    price: '30$'
  },
  {
    img: 'assets/toys/ac-4.jpg',
    title: 'Leash',
    description: 'Casual and clean.',
    price: '40$'
  }

];

let product = '';

for (let i = 0; i <products.length; i++) {
  product += `
<div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
  <div class="card rounded-3 overflow-hidden h-100 position-relative">
    <img src="${products[i].img}" class="card-img-top" alt="toy">
    <span class="position-absolute top-0 end-0 m-2 
                 bg-primary text-card px-2 py-1 rounded-pill">
      ${products[i].price}
    </span>
    <div class="card-body d-flex flex-column">
      <h5 class="card-title mb-1">${products[i].title}</h5>
      <p class="card-text text-muted line-clamp">
        ${products[i].description}
      </p>
      <div class="mt-auto text-end">
        <button 
          class="btn btn-primary text-card add-to-cart"
          data-title="${products[i].title}"
          data-price="${products[i].price}"
          data-img="${products[i].img}"
        >
          Add to cart
        </button>

      </div>

    </div>
  </div>
</div>
  `;
};

document.getElementById("product").innerHTML = product;

const dogs = [
   {
    img: 'assets/products/p-3.jpg',
    title: 'Pug',
    description: 'Soft and warm puppy',
    price: '10$'
  },
  {
    img: 'assets/products/p-1.jpg',
    title: 'Pug',
    description: 'Smart puppy pug',
    price: '10$'
  },
  {
    img: 'assets/products/pom-1.jpg',
    title: 'Pomskey',
    description: 'Smart and helpful',
    price: '10$'
  },
  {
    img: 'assets/products/chihuahua-1.jpg',
    title: 'Chihuahua',
    description: 'Kind and cute dog',
    price: '10$'
  },
  {
    img: 'assets/products/s-1.jpg',
    title: 'Schnoodle',
    description: 'Friendly and kind dog',
    price: '10$'
  },
  {
    img: 'assets/products/s-2.jpg',
    title: 'Schnoodle',
    description: 'Helpfull and playable',
    price: '10$'
  },
  {
    img: 'assets/products/s-3.jpg',
    title: 'Schnoodle',
    description: 'Softy and friendly',
    price: '10$'
  },
  {
    img: 'assets/products/s-4.jpg',
    title: 'Schnoodle',
    description: 'Sleepy dog',
    price: '10$'
  }
];

let dog = '';

for( i = 0; i < dogs.length; i++){
  dog += `
<div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
  <div class="card rounded-3 overflow-hidden h-100 position-relative">
    <img src="${dogs[i].img}" class="card-img-top" alt="toy">
    <span class="position-absolute top-0 end-0 m-2 
                 bg-primary text-card px-2 py-1 rounded-pill">
      ${dogs[i].price}
    </span>
    <div class="card-body d-flex flex-column">
      <h5 class="card-title mb-1">${dogs[i].title}</h5>
      <p class="card-text text-muted line-clamp">
        ${dogs[i].description}
      </p>
      <div class="mt-auto text-end">
        <button 
          class="btn btn-primary text-card add-to-cart"
          data-title="${dogs[i].title}"
          data-price="${dogs[i].price}"
          data-img="${dogs[i].img}"
        >
          Add to cart
        </button>
      </div>
    </div>
  </div>
</div>
  `;
};

document.getElementById("dog").innerHTML = dog;


const foods = [
  {
    img: 'assets/food/food-1.jpg',
    title: 'Food',
    description: 'Dry pet food',
    price: '10$'
  },
  {
    img: 'assets/food/food-2.jpg',
    title: 'Food',
    description: 'Dry pet food, dog and cat can eat.',
    price: '15$'
  },
  {
    img: 'assets/food/food-3.jpg',
    title: 'Food',
    description: 'Dry pet food',
    price: '14$'
  },
  {
    img: 'assets/food/food-4.jpg',
    title: 'Food',
    description: 'Dry potato pet food, it has three type to choose.',
    price: '12$'
  }
];

let food = '';

for ( let i = 0; i < foods.length; i++){
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

document.getElementById("food").innerHTML = food;
/**
 * product bought console
 */
JSON.parse(localStorage.getItem("purchasedProducts"))
