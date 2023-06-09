import 'regenerator-runtime';
import './components/app-bar';
import './components/hero';
import './components/custom-footer';
import '../styles/main.css';
import '../styles/responsive.css';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import App from './views/app';
import swRegister from './utils/sw-register';
import WebSocketInitiator from './utils/websocket-initiator';
import CONFIG from './globals/config';

const app = new App({
  nav: document.querySelector('nav'),
  navBar: document.querySelector('.navbar'),
  menuBtn: document.querySelector('.menu-btn'),
  cancelBtn: document.querySelector('.cancel-btn'),
  logoOne: document.querySelector('.logo'),
  content: document.querySelector('#content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
  WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});
