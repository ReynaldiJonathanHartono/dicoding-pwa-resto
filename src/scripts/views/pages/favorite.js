import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import { createRestoItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
        <div class="container">
            <div class="container-title">
                <h2>Your Favorite</h2>
            </div>
            <div class="content">
                <div class="latest">
                    <h3 class="favorite-empty-title" id="empty"> You don't have any favorite. </h3>
                    <div class="list" id="resto-list"> </div>
                </div>
            </div>
        </div>
    `;
  },
  async afterRender() {
    const restos = await FavoriteRestoIdb.getAllRestos();
    const restosContainer = document.querySelector('#resto-list');
    const emptyLabel = document.querySelector('#empty');

    if (restos.length !== 0) {
      restos.forEach((resto) => {
        console.log(resto);
        restosContainer.innerHTML += createRestoItemTemplate(resto);
      });
      emptyLabel.style.display = 'none';
    }
  },
};

export default Favorite;
