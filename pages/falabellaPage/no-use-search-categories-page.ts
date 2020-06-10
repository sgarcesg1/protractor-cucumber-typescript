import { $, $$, ElementFinder, ElementArrayFinder, element } from "protractor";
// URL
// Elementos de la pagina

// menu.findCategory("Tecnología").mouse.over
// submenu.getSubCategory("Gaming").isDisplayed()
// submenu.getMenuItem("Gaming", "Nintendo").isDisplayed()

export class SearchPageObject {
    static url = "https://www.falabella.com.co/falabella-co/";

    public categoryButton: ElementFinder;
    public modalCloseButton: ElementFinder;
    public categories: ElementArrayFinder;
    public subcategories: ElementArrayFinder;
    // Assertions

    constructor() {
      this.categoryButton = $('#hamburgerMenu')
      this.modalCloseButton = $('#acc-alert-close')
      this.categories = $$('.FirstLevelItems_menuText__UYB9A')
      this.subcategories = $$('.SecondLevelItems_displaySubMenuDesktop__33Gpt .SecondLevelItems_submenuTitle__3U6Ct')

    }

    async findCategory(categoryName) :Promise<ElementFinder> {
      let category = null;
      // [16]
      await this.categories.each(async element => {// tecnologia en el feature
        const name = await element.getText()
        if (name === categoryName) {
          category = element;
        }
      });
      return category;
    }

    async findSubCategory(subCategoryName) :Promise<ElementFinder> {
      let subcategory = null;
      // [8]
      await this.subcategories.each(async element => {
        const name = await element.getText()
        if (name === subCategoryName) {
          subcategory = element;
        }
      });
      return subcategory;
    }

    async findMenuItem(subCategoryName, menuItemName) :Promise<ElementFinder> {
      console.log('ohhh por Dios no mas')
    }
}

// c ategory $$('.Menu-module_firstCategories__1v_O9') just 1


// subacategory
// $$('.SecondLevelItems_detailsElements__36uYN') this have 112 elements
// $$('.SecondLevelItems_displaySubMenuDesktop__33Gpt .SecondLevelItems_detailsElements__36uYN') this have 8 elements 


// title $$('.SecondLevelItems_submenuTitle__3U6Ct') have 112 elemente
// $$('.SecondLevelItems_detailsElements__36uYN .SecondLevelItems_submenuTitle__3U6Ct') just 112
