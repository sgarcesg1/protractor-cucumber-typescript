import { browser, protractor, By } from "protractor";
import { SearchPageObject } from "../pages/searchPage";
import { SearchFPage } from "../pages/searchFPage";
import { create } from "domain";
const { Given, When, Then } = require("cucumber");
var expect = require('chai').expect;

const searchPage: SearchFPage  = new SearchFPage();


Given(/^I go to the falabela page$/, async () => {
  await browser.get(SearchFPage.URL);
});

When(/^I click en buscar$/, async () => {
  await searchPage.search.click();
});

When(/^I click in the "No Gracias"$/, async () => {
  await browser.sleep(1500);
  await searchPage.popUp.click();  
});

When(/^I write "(.*)"$/, async (des) => {
  await searchPage.search.sendKeys(des);
  
});

When(/^I select with click in the "Motorola"$/, async () => {
  await browser.sleep(1500);
  await searchPage.brand.click();
  
});

Then(/^show message "(.*)"$/, async (expectedName) => {
  await browser.sleep(3000);
  var actualName = await searchPage.filter.getText();
  expect(actualName).to.be.equal(expectedName);
});

Then(/^show selected brand "(.*)"$/, async (expectedName) => {
  var actualName = await searchPage.selectedBrand.getText();
  expect(actualName.split("\n")[0]).to.be.equal(expectedName);
});
