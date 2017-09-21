/**
 * Created by willo on 9/17/17.
 */
import {Injectable} from '@angular/core';
import {Result} from './result';
import {Product} from './product'

@Injectable()
export class ProductService {
    saveProduct(product:Product):Promise<Result>{
        let productsInLocal = localStorage.getItem("Products");
        let products = [];
        if (productsInLocal !== null) {
            products = JSON.parse(productsInLocal);
        };

        products.push(product);
        return Promise.resolve({processMessage:"Okay"})
    };
    getProducts(): Promise<Result> {
        let productsInLocal = localStorage.getItem("Products");
        let products = [];
        if (productsInLocal !== null) {
            products = JSON.parse(productsInLocal);
        };

        return Promise.resolve({data:products});
    }
}
