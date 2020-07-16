// import { AddCartFromSearchBarPage } from './../../pages/linioPage/addCartFromSearchBarPage';
import { browser, protractor, By, until } from "protractor";
import { SearchPageObject } from "../../pages/searchPage";
import { AddCartFromSearchBarPage } from "../../pages/linioPage/addCartFromSearchBarPage";
import { create } from "domain";
import { pageMapping } from "./pageMapping"

const { Given, When, Then } = require("cucumber");
const expect = require('chai').expect; // revisar el tipo de variable

declare module "cucumber" {
  interface World {
      page: any;
      name: string;
      count: number;
  }
  
}

// const addCartFromSearchBarPage: AddCartFromSearchBarPage = new AddCartFromSearchBarPage();
 // let option;




// Scenario Add a Cart Linio successfully from search bar

// Given(/^the user is on "(.*?)" page$/, async function(des) {
//   this.page = new AddCartFromSearchBarPage();
//   await browser.get(AddCartFromSearchBarPage.URL);
// });

Given(/^the user is on "(.*?)" page$/, async function(page) {
  this.page = getPage(page);  
  await browser.get(this.page.URL);
});

function getPage (str) {
  return pageMapping[str];
}

When(/^the user click on "(.*)"$/, async function(des) {
  await this.page.getField(des).click();
});

When(/^the user write in "(.*)" "(.*)"$/, async function(element,text) {
  await this.page.getField(element).sendKeys(text);
});

When(/^the user wait$/, async function () {
  await browser.sleep(3000)
});

When(/^the user Mouse hover in the "(.*?)"$/, async function(location) {
  const dropDown = await this.page.getField(location);
  browser.actions().mouseMove(dropDown).perform();
  await browser.sleep(3000);
});


Then(/^the user can see a message with the text "(.*?)" in "(.*?)"$/, async function(expectedMessage, ubicationMessage) {
  const actualMessage = await this.page.getField(ubicationMessage).getText();
  // console.log(actualMessage);
  expect(actualMessage).to.be.equal(expectedMessage);
});

Then(/^the user can see a message with the text it contains "(.*?)" in "(.*?)"$/, async function(expectedName, locationName) {
  const actualName = await this.page.getField(locationName).getText();
  expect(actualName.includes(expectedName))
});


// When(/^the user click on "(.*)"$/, async function(des) {
//   await browser.sleep(3000);
//   option = await this.page.menulinio.selectDesiredProduct(des);
//   await option.click();
// });

// When(/^the user click on "(.*)"$/, async function(des) {
//   await browser.sleep(3000);
//   option = await this.page.producLinio.selectWishProduct(des);
//   await option.click();
// });

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

// Then(/^show  product "(.*)"$/, async function(expectedName) {
//   const actualName = await this.page.productName.getText();
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