
import { browser, protractor, By, until } from "protractor";
import { SearchPageObject } from "../../pages/searchPage";
import { AddCartFromSearchBarPage } from "../../pages/linioPage/addCartFromSearchBarPage";
import { create } from "domain";
const { Given, When, Then } = require("cucumber");
const expect = require('chai').expect; // revisar el tipo de variable

const addCartFromSearchBarPage: AddCartFromSearchBarPage = new AddCartFromSearchBarPage();
let option;

// Scenario Add a Cart Linio successfully from search bar

Given(/^I go to the Linio page$/, async () => {
  await browser.get(AddCartFromSearchBarPage.URL);
});

When(/^I select "searchbar" with on click$/, async () => {
  await addCartFromSearchBarPage.searchBar.click();
});

When(/^I write in the searchbar "(.*)"$/, async (des) => {
  await addCartFromSearchBarPage.searchBar.sendKeys(des);
});

When(/^I click in the option "(.*)"$/, async (des) => {
  await browser.sleep(4000);
  option = await addCartFromSearchBarPage.menulinio.selectDesiredProduct(des);
  await option.click();
});

When(/^I click in the product "(.*)"$/, async (des) => {
  await browser.sleep(3000);
  option = await addCartFromSearchBarPage.producLinio.selectWishProduct(des);
  await option.click();
});

When(/^I click in the add button "Añadir a Carrito"$/, async () => {
  await browser.sleep(5000);
  await addCartFromSearchBarPage.addButton.click();
});

When(/^I click in the go to car button "ir a carrito"$/, async () => {
  await browser.sleep(3000);
  await addCartFromSearchBarPage.goTocart.click();
});

Then(/^show title "(.*)"$/, async (expectedName) => {
  /*const until = protractor.ExpectedConditions;
  const element = addCartFromSearchBarPage.titleCar
  browser.wait(until.presenceOf(element), 5000, 'Element no exist');*/
  await browser.sleep(5000);
  const actualName = await addCartFromSearchBarPage.titleCar.getText();
  expect(actualName).to.be.equal(expectedName);
});

Then(/^show title summary "(.*)"$/, async (expectedName) => {
  const actualName = await addCartFromSearchBarPage.summaryTitle.getText();
  expect(actualName).to.be.equal(expectedName);
});

Then(/^show  product "(.*)"$/, async (expectedName) => {
  const actualName = await addCartFromSearchBarPage.productName.getText();
  expect(actualName.includes(expectedName))// .to.be.equal(expectedName);
});
