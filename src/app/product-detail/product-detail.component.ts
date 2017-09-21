/**
 * Created by willo on 9/17/17.
 */
import {Component, Input} from '@angular/core';
import {Product} from '../core/product/product';
import {ProductService} from '../core/product/product.service';

@Component({
    selector:"product-detail",
    templateUrl:"./product-detail.template.html"
})

export class ProductDetailComponent {
    constructor(private productService:ProductService){};
    product: Product = {
        id:1,
        name: "ao",
        color:"vang",
        size:"M"
    };
    products: Product[];
    @Input() productInput:string;
    productColors = ["pink","red","blue","green"];
    saveProduct(): void{
        this.productService.saveProduct(this.product).then(res=>alert(res.processMessage))
    };
    setProductColor(color:string):void {
        this.product.color = color;
    };
    getProducts(): void {
        this.productService.getProducts().then(res=>
            this.products = res.data
        )
    }
}
