import { Menu } from './components/menu';
import { $, $$, ElementFinder, ElementArrayFinder, element } from "protractor";

// Elementos de la pagina

export class SearchPageObject {
    static url = "https://www.falabella.com.co/falabella-co/";

    public menuButton: ElementFinder;
    public menu: any;


    // Assertions

    constructor() {
      this.menuButton = $('#hamburgerMenu')
      this.menu = new Menu ()

    }
  }