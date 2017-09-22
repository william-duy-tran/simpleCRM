/**
 * Created by willo on 9/21/17.
 */
import {Component} from '@angular/core';

@Component({
    selector:"app-root",
    template: `
        <h1>{{title}}</h1>
        <a routerLink="/products">products</a>
        <router-outlet></router-outlet>
    `
})
export class AppComponent {
    title = "Product Management Tool"
}

