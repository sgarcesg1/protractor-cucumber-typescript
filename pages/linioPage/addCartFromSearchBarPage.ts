import { Menu } from './../components/menu';

import { MenuLinio } from '../liniocomponents/menuLinio';
import { ProductsLinio } from '../liniocomponents/ProductsLinio';
import { $, $$, ElementFinder, ElementArrayFinder, element } from "protractor";

export class AddCartFromSearchBarPage {
    static URL = "https://www.linio.com.co/";

    public searchBar : ElementFinder;
    public menulinio : MenuLinio;
    public producLinio : ProductsLinio;
    public addButton : ElementFinder;
    public goTocart : ElementFinder;
    public titleCar : ElementFinder;
    public summaryTitle : ElementFinder;
    public productName : ElementFinder;


    constructor() {

        this.searchBar = $(".hidden-sm-down.input-group-search > div .form-control");
        this.menulinio = new MenuLinio();
        this.producLinio = new ProductsLinio();
        this.addButton = $(".col-xs-9 #buy-now");
        this.goTocart = $(".btn.btn-sm.btn-go-to-cart.added-product");
        this.titleCar = $(".title-section.row");
        this.summaryTitle = $(".title-summary");
        this.productName = $(".item-title.col-xs-12");

    }
}



