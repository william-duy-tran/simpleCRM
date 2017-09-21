/**
 * Created by willo on 9/17/17.
 */
import {Injectable} from '@angular/core';

@Injectable()
export class ProductService {
    saveProduct():Promise<>{
        return Promise.resolve({processMessage:"Okay"})
    }
}
