/* import { browser, ElementFinder, ExpectedConditions } from "protractor";
import {SearchPageObject } from "../pages/search-categories-page";
import { Then } from "cucumber";
const { Given, When, setDefaultTimeout } = require("cucumber");
import * as chai from 'chai'
chai.use(require("chai-as-promised"))
const expect = chai.expect;
setDefaultTimeout(10000);

const search: SearchPageObject = new SearchPageObject();
//Mappear pasos de los features

Given(/^the user is on the Falabella page$/, async () => {
    await browser.get(SearchPageObject.url)
    //Before:
    //await  browser.sleep(3000)
    //return await search.modalCloseButton.click();
    //Now:
    await browser.wait(ExpectedConditions.presenceOf(search.modalCloseButton), 3000, "The modal didn't appear")
    return await search.modalCloseButton.click();
});

When(/^the user clicks on button categorias$/, async () => {
    return await search.categoryButton.click()
});

When(/^the user puts the mouse over "(.*)"$/, async (categoryName) => {
    await browser.sleep(3000)
    let selectedCategory = await search.findCategory(categoryName)
    browser.actions().mouseMove(selectedCategory).perform()
    await browser.sleep(3000)
   
});

Then(/^the user should see a submenu "(.*)"$/, async (subcategoryName) => {
    let selectedSubCategory : ElementFinder = await search.findSubCategory(subcategoryName)
    let isSubCategoryVisible = await selectedSubCategory.isDisplayed();
    expect(isSubCategoryVisible).to.be.equals(true)
});

Then(/^the user should see menu item "(.*)"$/, async (menuItemName) => {
    let menuItem : ElementFinder = await search.findMenuItem("", "")
    let isMenuItemVisible = await menuItem.isDisplayed();
    expect(isMenuItemVisible).to.be.equals(true)
    console.log("No se que hacer con mi vida")
}); */