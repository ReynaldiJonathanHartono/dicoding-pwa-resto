import RestoDBSource from '../../data/resto.source';
import { createRestoItemTemplate } from '../templates/template-creator';

const Resto = {
  async render() {
    return `
      <div class="container">
        <div class="container-title">
          <h2>Explore Us Around the World</h2>
        </div>
        <div class="content">
            <div class="latest">
              <div class="list" id="resto-list"> </div>
            </div>
        </div>
      </div>
    `;
  },
  async afterRender() {
    const restaurant = await RestoDBSource.infoResto();
    const restaurantContainer = document.querySelector('#resto-list');
    restaurant.forEach((resto) => {
      restaurantContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Resto;
