const pugs = [
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
    price: '16$',
  },
  {
    img: 'assets/products/p-4.jpg',
    title: 'Pug',
    description: 'Best dog in the world',
    price: '14$'
  },
  {
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
    img: 'assets/products/pom-1.jpg',
    title: 'Pomskey',
    description: 'Best dog in the world',
    price: '10$'
  },
  {
    img: 'assets/products/chihuahua-1.jpg',
    title: 'Chihuahua',
    description: 'Best dog in the world',
    price: '10$'
  },
  {
    img: 'assets/products/husky-1.jpg',
    title: 'Pomskey',
    description: 'Best dog in the world',
    price: '10$'
  },
  {
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
    <img src="${poms[i].img}" class="card-img-top" alt="toy">
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
    img: 'assets/products/s-1.jpg',
    title: 'title',
    description: 'Best dog in the world',
    price: '10$'
  },
  {
    img: 'assets/products/s-2.jpg',
    title: 'title',
    description: 'Best dog in the world',
    price: '10$'
  },
  {
    img: 'assets/products/s-3.jpg',
    title: 'title',
    description: 'Best dog in the world',
    price: '10$'
  },
  {
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
    <img src="${schnoodles[i].img}" class="card-img-top" alt="toy">
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

const toys = [
  {
    img: 'assets/toys/t-1.jpg',
    title: 'Toy',
    description: 'cute toy',
    price: '20$'
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
    price: '20$'
  },
  {
    img: 'assets/toys/t-4.jpg',
    title: 'Toy',
    description: 'cute toy',
    price: '20$'
  },
   {
    img: 'assets/toys/k-1.jpg',
    title: 'Toy',
    description: 'cute toy',
    price: '20$'
  },
  {
    img: 'assets/toys/k-2.jpg',
    title: 'Toy',
    description: 'cute toy',
    price: '20$'
  },
  {
    img: 'assets/toys/k-3.jpg',
    title: 'Toy',
    description: 'cute toy',
    price: '20$'
  },
  {
    img: 'assets/toys/k-4.jpg',
    title: 'Toy',
    description: 'cute toy',
    price: '20$'
  },
  {
    img: 'assets/toys/ball-1.jpg',
    title: 'Toy',
    description: 'cute toy',
    price: '20$'
  },
  {
    img: 'assets/toys/ball-2.jpg',
    title: 'Toy',
    description: 'cute toy',
    price: '20$'
  },
  {
    img: 'assets/toys/ball-3.jpg',
    title: 'Toy',
    description: 'cute toy',
    price: '20$'
  },
  {
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

