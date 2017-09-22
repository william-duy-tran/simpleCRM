import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {ProductListComponent} from './product-list/product-list.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HeroService} from './core/hero/hero.service';
import {HeroDuyService} from './core/hero/heroDuy.service';
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {ProductService} from './core/product/product.service';
import {AppComponent} from './app.component';

@NgModule({
    declarations: [
        AppComponent,
        ProductListComponent,
        HeroDetailComponent,
        ProductDetailComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([
            {
                path: 'products',
                component: ProductListComponent
            },
            {
                path:'product/:id',
                component:ProductDetailComponent
            }
        ])
    ],
    providers: [
        HeroService,
        HeroDuyService,
        ProductService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
