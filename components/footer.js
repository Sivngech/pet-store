class Footer extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
     <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      <link rel="stylesheet" href="css/custom.css">
    </head>
    <footer class="bg-primary bg-primary border-top pt-5 text-dark">
  <div class="container py-5">

    <div class="row align-items-start text-center text-md-start">

      <!-- Logo -->
      <div class="col-12 col-md-3 mb-4 mb-md-0">
        <a href="/index.html" class="text-decoration-none d-inline-flex align-items-center gap-2">
          <img src="assets/pet-logo.jpg" alt="logo" class="rounded-circle" width="56" height="56">
          <span class="fw-bold text-white">Pet Store</span>
        </a>
      </div>

      <!-- Links -->
      <div class="col-12 col-md-9">
        <div class="row text-center text-md-start">

          <div class="col-6 col-md-4 mb-3 mb-md-0">
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link text-dark nav-page" href="index.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-dark nav-page" href="about-us.html">About Us</a>
              </li>
            </ul>
          </div>

          <div class="col-6 col-md-4 mb-3 mb-md-0">
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link text-dark nav-page" href="shop.html">Shop</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-dark nav-page" href="food.html">Food</a>
              </li>
            </ul>
          </div>

          <div class="col-6 col-md-4">
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link text-dark nav-page" href="accessories.html">Accessories</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-dark nav-page" href="contact.html">Contact</a>
              </li>
            </ul>
          </div>

        </div>
      </div>

    </div>

    <hr class="my-4">

    <!-- Bottom -->
    <div class="row align-items-center text-center text-md-start">

      <div class="col-md-6 mb-3 mb-md-0">
        <p class="mb-0 text-white small">
          © 2026 Pet Store. All rights reserved.
        </p>
      </div>

      <div class="col-md-6 d-flex justify-content-center justify-content-md-end align-items-center gap-3">
        <span class="text-white small">Follow us:</span>
        <a href="#" class="text-white fs-5"><i class="fab fa-facebook-f"></i></a>
        <a href="#" class="text-white fs-5"><i class="fab fa-instagram"></i></a>
      </div>
    </div>
  </div>
</footer>

    `;
    const currentPage = window.location.pathname === "/"
      ? "index.html"
      : window.location.pathname.split("/").pop();

    this.querySelectorAll(".nav-page").forEach(link => {
      const linkPage = link.getAttribute("href").split("/").pop();
      if (linkPage === currentPage) {
        link.classList.add("active");
      }
    });
}};
customElements.define('footer-component', Footer);