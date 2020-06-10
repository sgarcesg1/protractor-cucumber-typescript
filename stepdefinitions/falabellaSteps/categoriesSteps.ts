import { browser, ElementFinder } from "protractor";
import {SearchPageObject } from "../../pages/falabellaPage/search-categories-page";
import { Then } from "cucumber";
const { Given, When, setDefaultTimeout } = require("cucumber");
import * as chai from 'chai'
import { Menu } from "../../pages/components/menu";
import { Category } from "../../pages/components/category";
import { SubCategory } from "../../pages/components/subcategory";
chai.use(require("chai-as-promised"))
const expect = chai.expect;
setDefaultTimeout(10000);

const search: SearchPageObject = new SearchPageObject();
let category: Category = null;

// Mappear pasos de los features

Given(/^the user is on the Falabella page$/, async () => {
    return await browser.get(SearchPageObject.url)
});

When(/^the user click on button categorias$/, async () => {
    await search.menuButton.click();
});

// TODO> mouseover
When(/^the user click on category "(.*)"$/, async (categoryName) => {
    category = await search.menu.findCategory(categoryName)
    await category.name.click()
});

When(/^the user click on item "(.*)" inside "(.*)"$/, async (itemName, subcategoryName) => {
    const subCategory = await category.findSubCategory(subcategoryName)
    const item = await subCategory.findItem(itemName)
    await item.click()
});

When(/^the user wait$/, async () => {
    await browser.sleep(3000)
});