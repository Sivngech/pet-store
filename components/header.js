class Header extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <head>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      <link rel="stylesheet" href="css/custom.css">
    </head>
   <header class="fixed-top bg-white">
      <nav class="navbar navbar-expand-lg py-2">
        <div class="container-fluid">

          <!-- Logo -->
          <a href="/index.html" class="navbar-brand d-flex align-items-center gap-2">
            <img src="assets/pet-logo.jpg" alt="logo" class="rounded-circle" width="56" height="56">
            <span class="fw-bold text-primary">Pet Store</span>
          </a>

          <!-- Toggle -->
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>

          <!-- Navbar content -->
          <div class="collapse navbar-collapse" id="mainNavbar">

            <!-- Menu -->
            <ul class="navbar-nav mx-auto gap-lg-3">

              <li class="nav-item"><a class="nav-link nav-page" href="/index.html">Home</a></li>
              <li class="nav-item"><a class="nav-link nav-page" href="/about-us.html">About us</a></li>
              <li class="nav-item"><a class="nav-link nav-page" href="/shop.html">Shop</a></li>
              <li class="nav-item"><a class="nav-link nav-page" href="#">Food</a></li>
              <li class="nav-item"><a class="nav-link nav-page" href="#">Accessories</a></li>
              <li class="nav-item"><a class="nav-link nav-page" href="/contact.html">Contact</a></li>

              <li class="nav-item px-2">
              <form class="d-flex align-items-center gap-2" role="search">
                <i class="fa-solid fa-magnifying-glass text-primary"></i>
                <input
                  type="search"
                  class="form-control form-control-sm bg-primary text-card"
                  placeholder="Search..."
                  aria-label="Search"
                  style="min-width: 160px;"
                >
              </form>
            </li>
              <!--Mobile Cart -->
              <li class="nav-item d-lg-none">
                <a class="nav-link open-cart" href="#">
                  <i class="fas fa-shopping-cart me-2"></i>
                  Cart
                  <span class="badge bg-primary ms-2" id="cartBadgeMobile">0</span>
                </a>
              </li>
            </ul>

            <!--Desktop icons -->
            <ul class="navbar-nav d-none d-lg-flex align-items-center gap-3">
              <!-- Desktop Cart -->
              <li class="nav-item">
                <a class="nav-link position-relative open-cart" href="#">
                  <i class="fas fa-shopping-cart"></i>
                  <span
                    class="position-absolute top-0 start-100 translate-middle badge bg-primary rounded-circle"
                    id="cartBadgeDesktop"
                  >
                    0
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <hr class="my-0 opacity-25">
  </header>
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
  }
}
customElements.define('header-component', Header);
