/* eslint-disable object-curly-newline */
import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({ nav, navBar, menuBtn, cancelBtn, logoOne, content }) {
    this._nav = nav;
    this._navBar = navBar;
    this._menuBtn = menuBtn;
    this._cancelBtn = cancelBtn;
    this._logoOne = logoOne;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      nav: this._nav,
      navBar: this._navBar,
      menuBtn: this._menuBtn,
      cancelBtn: this._cancelBtn,
      logoOne: this._logoOne,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();

    const skipLinkElem = document.querySelector('.skip-link');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#content').focus();
    });
  }
}

export default App;
