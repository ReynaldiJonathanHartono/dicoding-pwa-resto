class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
          <div class="home" id="home">
              <div class="top-banner">
                  <div class="content">
                      <div class="text">
                          <h1>Keep your fork,<br> there's pie.</h1>
                      </div>
                  </div>
              </div>
          </div>
        `;
  }
}

customElements.define('hero-custom', Hero);
