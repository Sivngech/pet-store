class Header extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
  <header class="fixed-top bg-white">
  <nav class="navbar navbar-expand-lg py-2">
    <div class="container-fluid">

      <!-- Logo -->
      <a href="#" class="navbar-brand d-flex align-items-center gap-2">
        <img
          src="assets/pet-logo.jpg"
          alt="logo"
          class="rounded-circle"
          width="56"
          height="56"
        >
      </a>

      <!-- Toggle -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mainNavbar"
        aria-controls="mainNavbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- Collapsed content -->
      <div class="collapse navbar-collapse" id="mainNavbar">
        <!-- Menu -->
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-3">
          <li class="nav-item"><a class="nav-link" href="#">About us</a></li>
          <li class="nav-item"><a class="nav-link" href="/product.html">Shop</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Food</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Accessories</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>

          <!-- Icons as menu items (mobile view) -->
          <li class="nav-item d-lg-none">
            <a class="nav-link" href="#">
              <i class="fa-solid fa-magnifying-glass me-2"></i> Search
            </a>
          </li>

          <li class="nav-item d-lg-none">
            <a class="nav-link" href="#">
              <i class="fas fa-shopping-cart me-2"></i> Cart
              <span class="badge bg-danger ms-2">3</span>
            </a>
          </li>

          <li class="nav-item d-lg-none">
            <a class="nav-link" href="#">
              <i class="fas fa-heart me-2"></i> Wishlist
              <span class="badge bg-danger ms-2">3</span>
            </a>
          </li>
        </ul>

        <!-- Icons (desktop only) -->
        <ul class="navbar-nav d-none d-lg-flex align-items-center gap-3">
          <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="fa-solid fa-magnifying-glass"></i>
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link position-relative" href="#">
              <i class="fas fa-shopping-cart"></i>
              <span
                class="position-absolute top-0 start-100 translate-middle
                       badge bg-danger rounded-circle"
              >3</span>
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link position-relative" href="#">
              <i class="fas fa-heart"></i>
              <span
                class="position-absolute top-0 start-100 translate-middle
                       badge bg-danger rounded-circle"
              >3</span>
            </a>
          </li>
        </ul>

      </div>
    </div>
  </nav>
  <hr class="my-0 opacity-25">
</header>
`;
}}
customElements.define('header-component', Header);
