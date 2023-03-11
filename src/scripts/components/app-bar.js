class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
          <nav>
              <div class="menu-btn btn-hamb-menu">
                  <a href="#" onclick="return false;"><i class="fa fa-bars"></i></a>
              </div>
              <div class="navbar">
                  <div class="logo">
                      <a href="/"><span class="logo_text">Life of</span> Pie<span class="logo_text">.</span></a>
                  </div>
                  <ul class="menu">
                      <li><a href="/">Home</a></li>
                      <li><a href="#/favorite">Favorite</a></li>
                      <li><a href="https://www.instagram.com/jonathan_rj18/" target="_blank">About Us</a></li>
                      <div class="cancel-btn btn-hamb-cancel">
                          <a href="#" onclick="return false;"><i class="fa fa-times"></i></a>
                      </div>
                  </ul>
              </div>
          </nav>
        `;
  }
}

customElements.define('app-bar', AppBar);
