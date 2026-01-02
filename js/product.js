const schnoodle_dogs = [
  {
    img: 'assets/products/p-3.jpg',
    title: 'title',
    description: 'Best dog in the world'
  },
  {
    img: 'assets/products/p-3.jpg',
    title: 'title',
    description: 'Best dog in the world'
  },
  {
    img: 'assets/products/p-3.jpg',
    title: 'title',
    description: 'Best dog in the world'
  },
  {
    img: 'assets/products/p-3.jpg',
    title: 'title',
    description: 'Best dog in the world'
  },
  {
    img: 'assets/products/p-3.jpg',
    title: 'title',
    description: 'Best dog in the world'
  },
  {
    img: 'assets/products/p-3.jpg',
    title: 'title',
    description: 'Best dog in the world'
  },
  {
    img: 'assets/products/p-3.jpg',
    title: 'title',
    description: 'Best dog in the world'
  },
  {
    img: 'assets/products/p-3.jpg',
    title: 'title',
    description: 'Best dog in the world'
  }
];

let schnoodle_dog = '';

for (let i = 0; i < schnoodle_dogs.length; i++) {
  schnoodle_dog += `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
        <div class="bg-dark text-white rounded-3 overflow-hidden h-100">
            <img src="${schnoodle_dogs[i].img}" class="img-fluid w-100 rounded-top" alt="">
            <div class="p-3 d-flex flex-column gap-2">
            <p class="mb-0">${schnoodle_dogs[i].title}</p>
            <p class="mb-0">${schnoodle_dogs[i].description}</p>
            <div class="d-flex justify-content-end mt-auto">
                <button class="btn btn-primary">view</button>
            </div>
            </div>
        </div>
        </div>

  `;
}

document.getElementById("dog-schnoodle").innerHTML = schnoodle_dog;
