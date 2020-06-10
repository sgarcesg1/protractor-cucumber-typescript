import { $, $$, ElementArrayFinder, ElementFinder } from "protractor";

// Elementos del componente
export class ProductsLinio {
    public element: ElementFinder; // cual es su "cuadrito"
    //public name: ElementFinder; // 1 solo elemento
    public producOption: ElementArrayFinder; // varios elementos []

    // Assertions

    constructor() {
        this.element = $("#catalogue-product-container"); // paseme el cuadraro
        // $ para un elemento
        // $$ arreglo de elementos []
        // this.name = this.element.$('.SecondLevelItems_submenuTitle__3U6Ct') // busca el titulo dentro del cuadrado
        this.producOption = this.element.$$(".catalogue-product.row") // $$(".catalogue-product.row .title-section") // multiples items
    }

    public async selectWishProduct(name : string): Promise<ElementFinder>{
        let match = null;
        await this.producOption.each(async (product) => { // each= metodo Permite recorrer cada resultado
            const resultName = await product.getText();
            //console.log(resultName)
            const lowercasedResultName = resultName.toLowerCase();
            const lowercasedName = name.toLowerCase();
            if (lowercasedResultName.includes(lowercasedName)) {
                match = product;
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