import { $, $$, ElementArrayFinder, ElementFinder } from "protractor";

// Elementos del componente
export class MenuLinio {
    public element: ElementFinder; // cual es su "cuadrito"
    public name: ElementFinder; // 1 solo elemento
    public suggestions: ElementArrayFinder; // varios elementos []

    // Assertions

    constructor() {
        this.element = $("#search-auto-results"); // paseme el cuadraro
        // $ para un elemento
        // $$ arreglo de elementos []
        // this.name = this.element.$('.SecondLevelItems_submenuTitle__3U6Ct') // busca el titulo dentro del cuadrado
        this.suggestions = this.element.$$(".search-suggestions-item") // 7 items
    }

    public async selectDesiredProduct(name : string): Promise<ElementFinder>{
        let match = null;
        await this.suggestions.each(async (suggestion) => { // each= metodo Permite recorrer cada resultado
            const resultName = await suggestion.getText();
            if (resultName === name) {
                match = suggestion;
            }
        });
        return match;
    }

    /*public async selectProduct(name : string): Promise<ElementFinder>{
        let result = null;
        await this.items.each(async (item) => {
            const itemName = await item.getText()
            if (itemName === name) {
                result = item;
            }
        })
        return result;
    }*/

}

// new SubCategory($('.secondLevelMenu.secondLevelMenu__dekstop'))