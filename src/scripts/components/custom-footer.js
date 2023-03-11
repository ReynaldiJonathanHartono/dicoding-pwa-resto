class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
          <footer class="footer-design" id="down">
              <div class="mini-footer">
                  <p>©2023. Made with <i class="fa fa-heart-o"></i> By <span>Rey</span></p>
              </div>
          </footer>
        `;
  }
}

customElements.define('custom-footer', CustomFooter);
