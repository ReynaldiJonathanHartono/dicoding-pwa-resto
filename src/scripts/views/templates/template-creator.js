/* eslint-disable no-tabs */
import CONFIG from '../../globals/config';

const createRestoCardOverview = (resto) => `
	<div class="desc-container">
		<div class="desc-title">
			<p class="desc-rating">
				<i class="fa fa-star"></i>
				Rating : 
				<span class="desc-rating-value">${resto.restaurant.rating}</span>
				<span class="desc-category" id="desc-category"> </span>
			</p>
			<h2> ${resto.restaurant.name} </h2>
			<p> ${resto.restaurant.address}, ${resto.restaurant.city} </p>
		</div>
		<div class="desc-content">
			<div class="desc-content-text">
				<p> ${resto.restaurant.description} </p>
			</div>
			<div class="desc-content-image">
				<img data-src="${CONFIG.BASE_IMAGE_URL + resto.restaurant.pictureId}" class="desc-thumbnail lazyload" alt="${resto.name}">
			</div>
		</div>
	</div>
`;

const createSpanCategories = (category) => `
	<span> ${category.name} </span>
`;

const createCustomerReview = (review) => `
	<li class="review-list">
		<div class="review-avatar"></div>
		<div class="review-list-content">
			<p class="review-name"> ${review.name} </p>
			<p class="review-date"> ${review.date} </p>
			<p> ${review.review} </p>
		</div>
	</li>
`;

const createRestoItemTemplate = (resto) => `
	<a href="#/detail/${resto.id}" class="resto__selector">	
		<div class="list_resto">
			<img class="list_resto_thumb lazyload" data-src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}"alt="${resto.name}" title="${resto.name}">
			<div class="city"><i class="fa fa-home"></i>&nbsp${resto.city}</div>
			<div class="list_resto_content">
				<p class="list_resto_rating">
					<i class="fa fa-star"></i>
						Rating : 
						<span class="list_resto_rating_value">${resto.rating}</span>
				</p>
				<h2 class="list_resto_title">${resto.name}</h2>
				<div class="list_resto_desc">${resto.description.slice(0, 150)}...</div>
			</div>
		</div>
	</a>
`;

const createLikeButtonTemplate = () => `
	<button aria-label="like this resto" id="likeButton" class="like">
		<i class="fa fa-heart-o" aria-hidden="true"></i>
	</button>
`;

const createLikedButtonTemplate = () => `
	<button aria-label="unlike this resto" id="likeButton" class="like">
		<i class="fa fa-heart" aria-hidden="true"></i>
	</button>
`;

export {
  createRestoItemTemplate,
  createRestoCardOverview,
  createCustomerReview,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createSpanCategories,
};
