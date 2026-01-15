const pugs = [
  {
    id: 1,
    img: 'assets/products/p-3.jpg',
    title: 'Pug',
    description: 'Soft and warm puppy',
    price: '10$'
  },
  {
    id: 2,
    img: 'assets/products/p-1.jpg',
    title: 'Pug',
    description: 'Smart puppy pug',
    price: '16$',
  },
  {
    id: 3,
    img: 'assets/products/p-4.jpg',
    title: 'Pug',
    description: 'Best dog in the world',
    price: '14$'
  },
  {
    id: 4,
    img: 'assets/products/p-5.jpg',
    title: 'Pug',
    description: 'Smart and helpful',
    price: '13$'
  }
];

let pug = '';

for (let i = 0; i < pugs.length; i++) {
  pug += `
<div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
  <div class="card rounded-3 overflow-hidden h-100 position-relative">
    <img src="${pugs[i].img}" class="card-img-top" alt="toy">
    <span class="position-absolute top-0 end-0 m-2 
                 bg-primary text-card px-2 py-1 rounded-pill">
      ${pugs[i].price}
    </span>
    <div class="card-body d-flex flex-column">
      <h5 class="card-title mb-1">${pugs[i].title}</h5>
      <p class="card-text text-muted line-clamp">
        ${pugs[i].description}
      </p>
      <div class="mt-auto text-end">
        <button 
          class="btn btn-primary text-card add-to-cart"
          data-id="${pugs[i].id}"
          data-title="${pugs[i].title}"
          data-price="${pugs[i].price}"
          data-img="${pugs[i].img}"
        >
          Add to cart
        </button>
      </div>

    </div>
  </div>
</div>
  `;
}

document.getElementById("pug").innerHTML = pug;

const poms = [
  {
    id: 5,
    img: 'assets/products/pom-1.jpg',
    title: 'Pomskey',
    description: 'Best dog in the world',
    price: '10$'
  },
  {
    id: 6,
    img: 'assets/products/chihuahua-1.jpg',
    title: 'Chihuahua',
    description: 'Best dog in the world',
    price: '10$'
  },
  { 
    id: 7,
    img: 'assets/products/husky-1.jpg',
    title: 'Pomskey',
    description: 'Best dog in the world',
    price: '10$'
  },
  {
    id: 8,
    img: 'assets/products/beagle-2.jpg',
    title: 'Dachshund',
    description: 'Small dog',
    price: '10$'
  }
];

let pom = '';

for (let i = 0; i < poms.length; i++) {
  pom += `
<div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
  <div class="card rounded-3 overflow-hidden h-100 position-relative">
    <img src="${poms[i].img}" class="card-img-top" alt="dog">
    <span class="position-absolute top-0 end-0 m-2 
                 bg-primary text-card px-2 py-1 rounded-pill">
      ${poms[i].price}
    </span>
    <div class="card-body d-flex flex-column">
      <h5 class="card-title mb-1">${poms[i].title}</h5>
      <p class="card-text text-muted line-clamp">
        ${poms[i].description}
      </p>
      <div class="mt-auto text-end">
        <button 
          class="btn btn-primary text-card add-to-cart"
          data-id="${poms[i].id}"
          data-title="${poms[i].title}"
          data-price="${poms[i].price}"
          data-img="${poms[i].img}"
        >
          Add to cart
        </button>
      </div>
    </div>
  </div>
</div>
  `;
}

document.getElementById("pom").innerHTML = pom;

const schnoodles = [
  {
    id: 9,
    img: 'assets/products/s-1.jpg',
    title: 'title',
    description: 'Best dog in the world',
    price: '10$'
  },
  {
    id: 10,
    img: 'assets/products/s-2.jpg',
    title: 'title',
    description: 'Best dog in the world',
    price: '10$'
  },
  {
    id: 11,
    img: 'assets/products/s-3.jpg',
    title: 'title',
    description: 'Best dog in the world',
    price: '10$'
  },
  {
    id: 12,
    img: 'assets/products/s-4.jpg',
    title: 'title',
    description: 'Best dog in the world',
    price: '10$'
  }
];

let schno = '';

for ( let i = 0; i < schnoodles.length; i++) {
  schno += `
<div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
  <div class="card rounded-3 overflow-hidden h-100 position-relative">
    <img src="${schnoodles[i].img}" class="card-img-top" alt="dog">
    <span class="position-absolute top-0 end-0 m-2 
                 bg-primary text-card px-2 py-1 rounded-pill">
      ${schnoodles[i].price}
    </span>
    <div class="card-body d-flex flex-column">
      <h5 class="card-title mb-1">${schnoodles[i].title}</h5>
      <p class="card-text text-muted line-clamp">
        ${schnoodles[i].description}
      </p>
      <div class="mt-auto text-end">
        <button 
          class="btn btn-primary text-card add-to-cart"
          data-id="${schnoodles[i].id}"
          data-title="${schnoodles[i].title}"
          data-price="${schnoodles[i].price}"
          data-img="${schnoodles[i].img}"
        >
          Add to cart
        </button>
      </div>

    </div>
  </div>
</div>
  `;
};

document.getElementById("schno").innerHTML = schno;

const ragdolls = [
  {
    id: 34,
    img: 'assets/cats/rag-1.jpg',
    title: 'Ragedoll',
    description: 'Soft and cute',
    price: '30$'
  },
  {
    id: 35,
    img: 'assets/cats/rag-2.png',
    title: 'Ragedoll',
    description: 'Charming cat',
    price: '45$'
  },
  {
    id: 36,
    img: 'assets/cats/rag-3.jpg',
    title: 'Ragedoll',
    description: 'Smart cat',
    price: '25$'
  },
  {
    id: 37,
    img: 'assets/cats/rag-4.jpg',
    title: 'Ragedoll',
    description: 'Kind and friendly',
    price: '65$'
  }
];

let ragdoll = '';

for (let i = 0; i < ragdolls.length; i++) {
  ragdoll += `
<div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
  <div class="card rounded-3 overflow-hidden h-100 position-relative">
    <img src="${ragdolls[i].img}" class="card-img-top" alt="cat">
    <span class="position-absolute top-0 end-0 m-2 
                 bg-primary text-card px-2 py-1 rounded-pill">
      ${ragdolls[i].price}
    </span>
    <div class="card-body d-flex flex-column">
      <h5 class="card-title mb-1">${ragdolls[i].title}</h5>
      <p class="card-text text-muted line-clamp">
        ${ragdolls[i].description}
      </p>
      <div class="mt-auto text-end">
        <button 
          class="btn btn-primary text-card add-to-cart"
          data-id="${ragdolls[i].id}"
          data-title="${ragdolls[i].title}"
          data-price="${ragdolls[i].price}"
          data-img="${ragdolls[i].img}"
        >
          Add to cart
        </button>

      </div>
    </div>
  </div>
</div>
  `;
};

document.getElementById("ragdoll").innerHTML = ragdoll;

const japaneses = [
  {
    id: 38,
    img: 'assets/cats/ja-1.jpg',
    title: 'Japanese Bobtail',
    description: 'Soft and cute',
    price: '50$'
  },
  {
    id: 39,
    img: 'assets/cats/ja-2.jpg',
    title: 'Japanese Bobtail',
    description: 'Charming cat',
    price: '78$'
  },
  {
    id: 40,
    img: 'assets/cats/ja-3.jpg',
    title: 'Japanese Bobtail',
    description: 'Smart cat',
    price: '25$'
  },
  {
    id: 41,
    img: 'assets/cats/ja-4.jpg',
    title: 'Japanese Bobtail',
    description: 'Kind and friendly',
    price: '65$'
  }
];

let japanese = '';

for (let i = 0; i < japaneses.length; i++) {
  japanese += `
<div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
  <div class="card rounded-3 overflow-hidden h-100 position-relative">
    <img src="${japaneses[i].img}" class="card-img-top" alt="cat">
    <span class="position-absolute top-0 end-0 m-2 
                 bg-primary text-card px-2 py-1 rounded-pill">
      ${japaneses[i].price}
    </span>
    <div class="card-body d-flex flex-column">
      <h5 class="card-title mb-1">${japaneses[i].title}</h5>
      <p class="card-text text-muted line-clamp">
        ${japaneses[i].description}
      </p>
      <div class="mt-auto text-end">
        <button 
          class="btn btn-primary text-card add-to-cart"
          data-id="${japaneses[i].id}"
          data-title="${japaneses[i].title}"
          data-price="${japaneses[i].price}"
          data-img="${japaneses[i].img}"
        >
          Add to cart
        </button>

      </div>
    </div>
  </div>
</div>
  `;
};

document.getElementById("japanese").innerHTML = japanese;

const americants = [
  {
    id: 42,
    img: 'assets/cats/am-1.jpg',
    title: 'Americant Curl',
    description: 'Soft and cute',
    price: '60$'
  },
  {
    id: 43,
    img: 'assets/cats/am-2.jpg',
    title: 'Americant Curl',
    description: 'Charming cat',
    price: '88$'
  },
  {
    id: 44,
    img: 'assets/cats/am-3.jpg',
    title: 'Americant Curl',
    description: 'Smart cat',
    price: '125$'
  },
  {
    id: 45,
    img: 'assets/cats/am-4.jpg',
    title: 'Americant Curl',
    description: 'Kind and friendly',
    price: '65$'
  }
];

let americant = '';

for (let i = 0; i < americants.length; i++) {
  americant += `
<div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
  <div class="card rounded-3 overflow-hidden h-100 position-relative">
    <img src="${americants[i].img}" class="card-img-top" alt="cat">
    <span class="position-absolute top-0 end-0 m-2 
                 bg-primary text-card px-2 py-1 rounded-pill">
      ${americants[i].price}
    </span>
    <div class="card-body d-flex flex-column">
      <h5 class="card-title mb-1">${americants[i].title}</h5>
      <p class="card-text text-muted line-clamp">
        ${americants[i].description}
      </p>
      <div class="mt-auto text-end">
        <button 
          class="btn btn-primary text-card add-to-cart"
          data-id="${americants[i].id}"
          data-title="${americants[i].title}"
          data-price="${americants[i].price}"
          data-img="${americants[i].img}"
        >
          Add to cart
        </button>
      </div>

    </div>
  </div>
</div>
  `;
};

document.getElementById("americant").innerHTML = americant;


const foods = [
  {
    id: 34,
    img: 'assets/food/food-1.jpg',
    title: 'Food',
    description: 'Dry pet food',
    price: '10$'
  },
  {
    id: 35,
    img: 'assets/food/food-8.jpg',
    title: 'Food',
    description: 'Wet dog food',
    price: '15$'
  },
  {
    id: 36,
    img: 'assets/food/food-3.jpg',
    title: 'Food',
    description: 'Dry pet food',
    price: '14$'
  },
  {
    id: 37,
    img: 'assets/food/food-4.jpg',
    title: 'Food',
    description: 'Dry potato pet food, it has three type to choose.',
    price: '12$'
  },
  {
    id: 38,
    img: 'assets/cats/w-1.jpg',
    title: 'Wet food',
    description: 'Favourite food of cat',
    price: '14$'
  },
  {
    id: 39,
    img: 'assets/cats/c-2.jpg',
    title: 'Dry food',
    description: 'Favourite food of cat',
    price: '14$'
  },
  {
    id: 40,
    img: 'assets/cats/c-3.jpg',
    title: 'Dry food',
    description: 'Favourite food of cat',
    price: '14$'
  },
  {
    id: 41,
    img: 'assets/cats/c-4.jpg',
    title: 'Dry food',
    description: 'Favourite food of cat',
    price: '14$'
  }
];


let food = '';

for (let i = 0; i < foods.length; i++) {
  food += `
<div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
  <div class="card rounded-3 overflow-hidden h-100 position-relative">
    <img src="${foods[i].img}" class="card-img-top" alt="food">
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

document.getElementById("food").innerHTML = food;


const toys = [
  {
    id: 13,
    img: 'assets/toys/t-1.jpg',
    title: 'Toy',
    description: 'cute toy',
    price: '20$'
  },
  {
    id: 14,
    img: 'assets/toys/t-2.jpg',
    title: 'Toy',
    description: 'cute toy',
    price: '20$'
  },
  {
    id: 15,
    img: 'assets/toys/t-3.jpg',
    title: 'Toy',
    description: 'cute toy',
    price: '20$'
  },
  {
    id: 16,
    img: 'assets/toys/t-4.jpg',
    title: 'Toy',
    description: 'cute toy',
    price: '20$'
  },
  {
    id: 17,
    img: 'assets/toys/k-1.jpg',
    title: 'Toy',
    description: 'cute toy',
    price: '20$'
  },
  {
    id: 18,
    img: 'assets/toys/k-2.jpg',
    title: 'Toy',
    description: 'cute toy',
    price: '20$'
  },
  {
    id: 19,
    img: 'assets/toys/k-3.jpg',
    title: 'Toy',
    description: 'cute toy',
    price: '20$'
  },
  {
    id: 29,
    img: 'assets/toys/k-4.jpg',
    title: 'Toy',
    description: 'cute toy',
    price: '20$'
  },
  {
    id: 30,
    img: 'assets/toys/ball-1.jpg',
    title: 'Toy',
    description: 'cute toy',
    price: '20$'
  },
  {
    id: 31,
    img: 'assets/toys/ball-2.jpg',
    title: 'Toy',
    description: 'cute toy',
    price: '20$'
  },
  {
    id: 32,
    img: 'assets/toys/ball-3.jpg',
    title: 'Toy',
    description: 'cute toy',
    price: '20$'
  },
  {
    id: 33,
    img: 'assets/toys/ball-4.jpg',
    title: 'Toy',
    description: 'cute toy',
    price: '20$'
  }

];

let toy = '';

for (let i = 0; i <toys.length; i++) {
  toy += `
<div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
  <div class="card rounded-3 overflow-hidden h-100 position-relative">
    <img src="${toys[i].img}" class="card-img-top" alt="toy">
    <span class="position-absolute top-0 end-0 m-2 
                 bg-primary text-card px-2 py-1 rounded-pill">
      ${toys[i].price}
    </span>
    <div class="card-body d-flex flex-column">
      <h5 class="card-title mb-1">${toys[i].title}</h5>
      <p class="card-text text-muted line-clamp">
        ${toys[i].description}
      </p>
      <div class="mt-auto text-end">
        <button 
          class="btn btn-primary text-card add-to-cart"
          data-id="${toys[i].id}"
          data-title="${toys[i].title}"
          data-price="${toys[i].price}"
          data-img="${toys[i].img}"
        >
          Add to cart
        </button>
      </div>

    </div>
  </div>
</div>
  `;
};

document.getElementById("toy").innerHTML = toy;

