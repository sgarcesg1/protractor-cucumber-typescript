import { Menu } from './../components/menu';

import { MenuLinio } from '../liniocomponents/menuLinio';
import { ProductsLinio } from '../liniocomponents/ProductsLinio';
import { $, $$, ElementFinder, ElementArrayFinder, element } from "protractor";
const camelcase  = require("camelcase");

export class AddCartFromSearchBarPage {
    public URL = "https://www.linio.com.co/";

    public searchBar : ElementFinder;
    public menulinio : MenuLinio;
    public producLinio : ProductsLinio;
    public addButton : ElementFinder;
    public goToCart : ElementFinder;
    public shoppingCart : ElementFinder;
    public summaryTitle : ElementFinder;
    public productName : ElementFinder;
    public searchIcon : ElementFinder;
    public mistakeWord : ElementFinder;
    public mistakeMessage :ElementFinder;


    constructor() {

        this.searchBar = $(".hidden-sm-down.input-group-search > div .form-control");
        this.menulinio = new MenuLinio();
        this.producLinio = new ProductsLinio();
        this.addButton = $("#buy-now.btn.btn-lg.btn-primary") // $(".col-xs-9 #buy-now");
        this.goToCart = $(".btn.btn-sm.btn-go-to-cart.added-product");
        this.shoppingCart = $(".title-section.row");
        this.summaryTitle = $(".title-summary");
        this.productName = $(".item-title.col-xs-12");
        this.searchIcon = $(".btn.btn-primary.btn-search");
        this.mistakeWord =  $(".search-term");
        this.mistakeMessage = $(".text-content.secondary-text");

    }

    getField(name : string): ElementFinder {
        const field = this[camelcase(name)];
        if (!field) {
            throw "Field not found for name:" + name;
        }
        return this[camelcase(name)];
    }
}



