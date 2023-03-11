/* eslint-disable no-undef */
/* eslint-disable object-curly-newline */
const DrawerInitiator = {

  init({ nav, navBar, menuBtn, cancelBtn, logoOne, number = 0 }) {
    menuBtn.addEventListener('click', (event) => {
      this._toggleDrawer(event, navBar);
    });

    cancelBtn.addEventListener('click', (event) => {
      this._closeDrawer(event, navBar);
    });

    window.onscroll = () => {
      if (document.documentElement.scrollTop > 20) {
        nav.classList.add('sticky');
        logoOne.classList.add('active');
        menuBtn.classList.add('active');
      } else {
        nav.classList.remove('sticky');
        logoOne.classList.remove('active');
        menuBtn.classList.remove('active');
      }
      if (number === 0 && $(window).scrollTop() > oTop) {
        $('.counter-value').each(() => {
          const $this = $(this);
          const countTo = $this.attr('data-count');
          $({
            countNum: $this.text(),
          }).animate(
            {
              countNum: countTo,
            },
            {
              duration: 2000,
              easing: 'swing',
              step() {
                $this.text(Math.floor(this.countNum));
              },
              complete() {
                $this.text(this.countNum);
              },
            },
          );
        });
      }
    };
  },

  _toggleDrawer(event, navBar) {
    event.stopPropagation();
    navBar.classList.add('active');
    this._removeOpacityDrawer();
    this._removePointerEventsDrawer();
    this._removeStyleOverflowDrawer();
  },

  _closeDrawer(event, navBar) {
    event.stopPropagation();
    navBar.classList.remove('active');
    this._addOpacityDrawer();
    this._addPointerEventsDrawer();
    this._addStyleOverflowDrawer();
  },

  _addOpacityDrawer() {
    menuBtn.style.opacity = 1;
  },

  _removeOpacityDrawer() {
    menuBtn.style.opacity = 0;
  },

  _addPointerEventsDrawer() {
    menuBtn.style.pointerEvents = 'auto';
  },

  _removePointerEventsDrawer() {
    menuBtn.style.pointerEvents = 'none';
  },

  _addStyleOverflowDrawer() {
    body.style.overflow = 'auto';
  },

  _removeStyleOverflowDrawer() {
    body.style.overflow = 'hidden';
  },
};

export default DrawerInitiator;
