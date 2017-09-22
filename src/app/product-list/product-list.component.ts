import {Component, OnInit} from '@angular/core';
import {Product} from '../core/product/product';
import {ProductService} from '../core/product/product.service';

const products:Product[] = [
    {id:1, name:"ao", color:"red", size:"M"},
    {id:2, name:"quan", color:"red", size:"M"},
    {id:3, name:"Non", color:"red", size:"M"},
    {id:4, name:"Giay", color:"red", size:"M"},
]
@Component({
    selector: 'product-list',
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})

export class ProductListComponent {
    constructor(
        private productService: ProductService ,
    ){};
    // ngOnInit(): void {
    //     this.getHeroes();
    // }
    title = 'My Heroes';
    products=products;
    selectedProduct: Product;
    onSelect(product: Product): void {
        this.selectedProduct = product;
    };
    getHeroes(): void {
        this.productService.getProducts().then(
            res=> this.products = res.data
        );
    };
}
