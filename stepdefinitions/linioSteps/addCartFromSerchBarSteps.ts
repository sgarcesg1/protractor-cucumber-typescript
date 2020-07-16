// import { AddCartFromSearchBarPage } from './../../pages/linioPage/addCartFromSearchBarPage';
import { browser, protractor, By, until } from "protractor";
import { SearchPageObject } from "../../pages/searchPage";
import { AddCartFromSearchBarPage } from "../../pages/linioPage/addCartFromSearchBarPage";
import { create } from "domain";
const { Given, When, Then } = require("cucumber");
const expect = require('chai').expect; // revisar el tipo de variable
// declare module "cucumber" {
//   interface World {
//       page: any;
//       name: string;
//       count: number;
//   }
// }


//  // const addCartFromSearchBarPage: AddCartFromSearchBarPage = new AddCartFromSearchBarPage();



// // Scenario Add a Cart Linio successfully from search bar

// Given(/^the user is on "(.*?)" page$/, async function(page) {
//   this.page = new AddCartFromSearchBarPage();
//   await browser.get(AddCartFromSearchBarPage.URL);
// });

// When(/^the user click on "(.*)"$/, async function() {
//   await this.page.searchBar.click();
// });

// When(/^I write in the searchbar "(.*)"$/, async function(des) {
//   await this.page.searchBar.sendKeys(des);
// });

When(/^the user click on the menu item "(.*)"$/, async function(des) {
  // await browser.sleep(3000);
  const option = await this.page.menulinio.selectDesiredProduct(des);
  await option.click();
});

When(/^the user click on the product "(.*)"$/, async function(des) {
  // await browser.sleep(3000);
  const option = await this.page.producLinio.selectWishProduct(des);
   await option.click();
});

// When(/^the user click on "Añadir a Carrito"$/, async function()  {
//   await browser.sleep(3000);
//   await this.page.addButton.click();
// });

// When(/^the user click on "ir a carrito"$/, async function() {
//   await browser.sleep(3000);
//   await this.page.goTocart.click();
// });

// Then(/^show title "(.*)"$/, async function(expectedName) {
//   /*const until = protractor.ExpectedConditions;
//   const element = addCartFromSearchBarPage.titleCar
//   browser.wait(until.presenceOf(element), 5000, 'Element no exist');*/
//   await browser.sleep(3000);
//   const actualName = await this.page.titleCar.getText();
//   expect(actualName).to.be.equal(expectedName);
// });

// Then(/^show title summary "(.*)"$/, async function(expectedName) {
//   const actualName = await this.page.summaryTitle.getText();
//   expect(actualName).to.be.equal(expectedName);
// });

// Then(/^the user can see a message with the which specifically "(.*)" in "(.*)"$/, async function(expectedName, locationName) {
//   const actualName = await this.page.productName.getText(locationName);
//   expect(actualName.includes(expectedName))
// });

// // Add a Cart from search bar WRONG WRITTEN WORD

// When(/^I click in the serchicon$/, async function() {
//   await this.page.searchIcon.click();
// });

// Then(/^show title Nuestro gurú de compras no encontró resultados para: "(.*)"$/, async function(expectedName) {
//   const actualName = await this.page.mistakeWord.getText();
//   expect(actualName).includes(expectedName);
// });
// Then(/^show message "(.*)"$/, async function(expectedName) {
//   const actualName = await this.page.mistakemessage.getText();
//   expect(actualName).to.be.equal(expectedName);
// });