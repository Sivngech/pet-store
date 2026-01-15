const leashes = [
  {
    id: 1,
    img: 'assets/toys/leash-1.jpg',
    title: 'Leash',
    description: 'Pink leash for your puppy.',
    price: '12$'
  },
  {
    id: 2,
    img: 'assets/toys/ac-2.jpg',
    title: 'Leash',
    description: 'For baby pet.',
    price: '20$'
  },
  {
    id: 3,
    img: 'assets/toys/ac-3.jpg',
    title: 'Leash',
    description: 'Can bring your dog anywhere with it.',
    price: '15$'
  },
  {
    id: 3,
    img: 'assets/toys/ac-4.jpg',
    title: 'Leash',
    description: 'Casual and clean.',
    price: '11$'
  },
  {
    id: 12,
    img: 'assets/toys/ac-27.jpg',
    title: 'Collar',
    description: 'Colorful Collar easy to use with your pet.',
    price: '12$'
  },
  {
    id: 13,
    img: 'assets/toys/ac-28.jpg',
    title: 'Collar',
    description: 'Colorful Collar easy to use with your pet.',
    price: '10$'
  },
  {
    id: 14,
    img: 'assets/toys/ac-29.jpg',
    title: 'Collar',
    description: 'Colorful Collar easy to use with your pet.',
    price: '12$'
  },
  {
    id: 15,
    img: 'assets/toys/ac-30.jpg',
    title: 'Collar',
    description: 'Colorful Collar easy to use with your pet.',
    price: '12$'
  },

];

let leash = '';

for (let i = 0; i <leashes.length; i++) {
  leash += `
<div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
  <div class="card rounded-3 overflow-hidden h-100 position-relative">
    <img src="${leashes[i].img}" class="card-img-top" alt="toy">
    <span class="position-absolute top-0 end-0 m-2 
                 bg-primary text-card px-2 py-1 rounded-pill">
      ${leashes[i].price}
    </span>
    <div class="card-body d-flex flex-column">
      <h5 class="card-title mb-1">${leashes[i].title}</h5>
      <p class="card-text text-muted line-clamp">
        ${leashes[i].description}
      </p>
      <div class="mt-auto text-end">
        <button 
          class="btn btn-primary text-card add-to-cart"
          data-id="${leashes[i].id}"
          data-title="${leashes[i].title}"
          data-price="${leashes[i].price}"
          data-img="${leashes[i].img}"
        >
          Add to cart
        </button>
      </div>

    </div>
  </div>
</div>
  `;
};

document.getElementById("leash").innerHTML = leash;

const bowls = [
  {
    id: 4,
    img: 'assets/toys/ac-19.jpg',
    title: 'Bowl',
    description: 'cute toy',
    price: '5$'
  },
  {
    id: 5,
    img: 'assets/toys/ac-20.jpg',
    title: 'Bowl',
    description: 'cute toy',
    price: '2$'
  },
  {
    id: 6,
    img: 'assets/toys/ac-21.jpg',
    title: 'Bowl',
    description: 'cute toy',
    price: '3$'
  },
  {
    id: 7,
    img: 'assets/toys/ac-22.jpg',
    title: 'Bowl',
    description: 'cute toy',
    price: '4$'
  },
  {
    id: 8,
    img: 'assets/toys/ac-23.jpg',
    title: 'Bowl',
    description: 'cute toy',
    price: '6$'
  },
  {
    id: 9,
    img: 'assets/toys/ac-24.jpg',
    title: 'Bowl',
    description: 'cute toy',
    price: '9$'
  },
  {
    id: 10,
    img: 'assets/toys/ac-25.jpg',
    title: 'Bowl',
    description: 'cute toy',
    price: '3$'
  },
  {
    id: 11,
    img: 'assets/toys/ac-26.jpg',
    title: 'Bowl',
    description: 'cute toy',
    price: '9$'
  }
];

let bowl = '';

for (let i = 0; i <bowls.length; i++) {
  bowl += `
<div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
  <div class="card rounded-3 overflow-hidden h-100 position-relative">
    <img src="${bowls[i].img}" class="card-img-top" alt="bowl">
    <span class="position-absolute top-0 end-0 m-2 
                 bg-primary text-card px-2 py-1 rounded-pill">
      ${bowls[i].price}
    </span>
    <div class="card-body d-flex flex-column">
      <h5 class="card-title mb-1">${bowls[i].title}</h5>
      <p class="card-text text-muted line-clamp">
        ${bowls[i].description}
      </p>
      <div class="mt-auto text-end">
        <button 
          class="btn btn-primary text-card add-to-cart"
          data-id="${bowls[i].id}"
          data-title="${bowls[i].title}"
          data-price="${bowls[i].price}"
          data-img="${bowls[i].img}"
        >
          Add to cart
        </button>
      </div>

    </div>
  </div>
</div>
  `;
};

document.getElementById("bowl").innerHTML = bowl;

const beds = [
    {
        id: 16,
        img: 'assets/toys/ac-16.jpg',
        title: 'Bed',
        description: 'Cozy and warm bed.',
        price: '18$'
    },
    {
        id: 17,
        img: 'assets/toys/ac-15.jpg',
        title: 'Bed',
        description: 'soft and clean bed.',
        price: '20$'
    },
    {
        id: 18,
        img: 'assets/toys/ac-14.jpg',
        title: 'Item',
        description: 'Use it to store some accessories.',
        price: '12$'
    },
    {
        id: 19,
        img: 'assets/toys/ac-17.jpg',
        title: 'Bed',
        description: 'Blue bed your pet will be like.',
        price: '11$'
    },
    {
        id: 20,
        img: 'assets/toys/ac-12.jpg',
        title: 'Item',
        description: 'Pink item',
        price: '13$'
    },
    {
        id: 21,
        img: 'assets/toys/ac-9.jpg',
        title: 'Item',
        description: 'Look casual',
        price: '15$'
    },
    {
        id: 22,
        img: 'assets/toys/ac-10.jpg',
        title: 'Item',
        description: 'Simple but useful.',
        price: '12$'
    },
    {
        id: 23,
        img: 'assets/toys/ac-11.jpg',
        title: 'Item',
        description: 'Can store many accessories',
        price: '10$'
    }
];

let bed = '';

for( let i = 0; i < beds.length; i++) {
    bed += `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
  <div class="card rounded-3 overflow-hidden h-100 position-relative">
    <img src="${beds[i].img}" class="card-img-top" alt="bed">
    <span class="position-absolute top-0 end-0 m-2 
                 bg-primary text-card px-2 py-1 rounded-pill">
      ${beds[i].price}
    </span>
    <div class="card-body d-flex flex-column">
      <h5 class="card-title mb-1">${beds[i].title}</h5>
      <p class="card-text text-muted line-clamp">
        ${beds[i].description}
      </p>
      <div class="mt-auto text-end">
        <button 
          class="btn btn-primary text-card add-to-cart"
          data-id="${beds[i].id}"
          data-title="${beds[i].title}"
          data-price="${beds[i].price}"
          data-img="${beds[i].img}"
        >
          Add to cart
        </button>
      </div>

    </div>
  </div>
</div>
    `;
}

document.getElementById("bed").innerHTML = bed;

const toys = [
  {
    id: 13,
    img: 'assets/toys/t-1.jpg',
    title: 'Toy',
    description: 'cute toy',
    price: '10$'
  },
  {
    id: 14,
    img: 'assets/toys/t-2.jpg',
    title: 'Toy',
    description: 'cute toy',
    price: '8$'
  },
  {
    id: 15,
    img: 'assets/toys/t-3.jpg',
    title: 'Toy',
    description: 'cute toy',
    price: '9$'
  },
  {
    id: 16,
    img: 'assets/toys/t-4.jpg',
    title: 'Toy',
    description: 'cute toy',
    price: '3$'
  },
  {
    id: 17,
    img: 'assets/toys/k-1.jpg',
    title: 'Toy',
    description: 'cute toy',
    price: '3$'
  },
  {
    id: 18,
    img: 'assets/toys/k-2.jpg',
    title: 'Toy',
    description: 'cute toy',
    price: '9$'
  },
  {
    id: 19,
    img: 'assets/toys/k-3.jpg',
    title: 'Toy',
    description: 'cute toy',
    price: '8$'
  },
  {
    id: 29,
    img: 'assets/toys/k-4.jpg',
    title: 'Toy',
    description: 'cute toy',
    price: '7$'
  },
  {
    id: 30,
    img: 'assets/toys/ball-1.jpg',
    title: 'Toy',
    description: 'cute toy',
    price: '3$'
  },
  {
    id: 31,
    img: 'assets/toys/ball-2.jpg',
    title: 'Toy',
    description: 'cute toy',
    price: '8$'
  },
  {
    id: 32,
    img: 'assets/toys/ball-3.jpg',
    title: 'Toy',
    description: 'cute toy',
    price: '3$'
  },
  {
    id: 33,
    img: 'assets/toys/ball-4.jpg',
    title: 'Toy',
    description: 'cute toy',
    price: '2$'
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