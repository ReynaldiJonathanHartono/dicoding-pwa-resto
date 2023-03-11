/* eslint-disable no-undef */
Feature('Liking Resto');

const assert = require('assert');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

const firstCondition = "You don't have any favorite.";

Scenario('showing empty favorite restaurant', ({ I }) => {
  I.seeElement('h3');
  I.see(firstCondition, '.favorite-empty-title');
});

Scenario('Liking one restaurant', async ({ I }) => {
  I.see(firstCondition, '.favorite-empty-title');

  I.amOnPage('/');
  I.seeElement('#resto-list');
  I.seeElement('.resto__selector');
  I.seeElement('.list_resto');
  I.seeElement('.list_resto_title');

  const firstResto = locate('.list_resto').first();
  const firstRestoTitle = await I.grabTextFrom('.list_resto_title');

  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('#resto-list');
  I.seeElement('.resto__selector');
  I.seeElement('.list_resto');
  I.seeElement('.list_resto_title');

  const likeRestoTitle = await I.grabTextFrom('.list_resto_title');

  assert.strictEqual(firstRestoTitle, likeRestoTitle);
});

Scenario('Unliking one restaurant', async ({ I }) => {
  I.see(firstCondition, '.favorite-empty-title');

  I.amOnPage('/');

  I.seeElement('#resto-list');
  I.seeElement('.resto__selector');
  I.seeElement('.list_resto');
  I.seeElement('.list_resto_title');

  const firstResto = locate('.list_resto').first();
  const firstRestoTitle = await I.grabTextFrom('.list_resto_title');

  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('#resto-list');
  I.seeElement('.list_resto');
  I.seeElement('.list_resto_title');

  const likeResto = locate('.list_resto').first();
  const likeRestoTitle = await I.grabTextFrom('.list_resto_title');

  assert.strictEqual(firstRestoTitle, likeRestoTitle);

  I.click(likeResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('h3');
  I.seeElement('.favorite-empty-title');

  const noFavResto = await I.grabTextFrom('.favorite-empty-title');

  assert.strictEqual(noFavResto, firstCondition);
});
