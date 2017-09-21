import {Component, OnInit} from '@angular/core';
import {Product} from '../core/product/product';
import {ProductService} from '../core/product/product.service';

@Component({
    selector: 'product-list',
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})

export class ProductListComponent implements OnInit{
    constructor(
        private productService: ProductService ,
    ){};
    ngOnInit(): void {
        this.getHeroes();
    }
    title = 'My Heroes';
    products: Product[];
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
