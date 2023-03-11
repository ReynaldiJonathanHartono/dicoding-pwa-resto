import UrlParser from '../../routes/url-parser';
import RestoDBSource from '../../data/resto.source';

import {
  createCustomerReview,
  createRestoCardOverview,
  createSpanCategories,
} from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
        <div class="container">
          <div class="detail">
            <div class="detail-info">
              <div class="detail-info-desc" id="restoOverview"> </div>
              <div class="detail-info-menu">
                <div class="menu-container">
                  <div class="menu-title">
                    <h2> Menu </h2>
                  </div>
                  <div class="menu-content">
                    <div class="content-food">
                      <h3 class="food-title"> Food </h3>
                      <ul class="list-menu" id="listFood"></ul>
                    </div>
                    <div class="content-drink">
                      <h3 class="food-title"> Beverage </h3>
                      <ul class="list-menu" id="listDrink"></ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="detail-info-review">
                <div class="review-container">
                  <div class="review-title">
                    <h2> What people says about us! </h2>
                  </div>
                  <ul class="review-content" id="listReview">
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detailResto = await RestoDBSource.detailResto(url.id);
    const results = detailResto.restaurant;

    const restoOverview = document.querySelector('#restoOverview');
    restoOverview.innerHTML += createRestoCardOverview(detailResto);

    const containerInfoCategories = document.querySelector('#desc-category');
    results.categories.forEach((category) => {
      containerInfoCategories.innerHTML += createSpanCategories(category);
    });

    const foodsMenuContainer = document.querySelector('#listFood');
    results.menus.foods.forEach((food) => {
      foodsMenuContainer.innerHTML += `<li>${food.name}</li>`;
    });

    const drinksMenuContainer = document.querySelector('#listDrink');
    results.menus.drinks.forEach((drink) => {
      drinksMenuContainer.innerHTML += `<li>${drink.name}</li>`;
    });

    const reviewerContainer = document.querySelector('#listReview');
    results.customerReviews.forEach((review) => {
      reviewerContainer.innerHTML += createCustomerReview(review);
    });

    LikeButtonInitiator.init(
      {
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        resto: {
          id: results.id,
          name: results.name,
          city: results.city,
          rating: results.rating,
          address: results.address,
          pictureId: results.pictureId,
          description: results.description,
        },
      },
    );
  },
};

export default Detail;
