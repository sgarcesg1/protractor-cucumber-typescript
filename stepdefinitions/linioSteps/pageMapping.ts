import { LinioLoginModalPage } from './../../pages/linioPage/linioLoginModalPage';
import { browser, protractor, By, until } from "protractor";
import { SearchPageObject } from "../../pages/searchPage";
import { AddCartFromSearchBarPage } from "../../pages/linioPage/addCartFromSearchBarPage";


// page-mapping.ts
// Mapa (key , value)

export let pageMapping = {
  "Linio": new AddCartFromSearchBarPage(),
  "LoginLinio": new LinioLoginModalPage(),

}
