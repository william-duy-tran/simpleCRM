import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HeroService} from './core/hero/hero.service';
import {HeroDuyService} from './core/hero/heroDuy.service';
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {ProductService} from './core/product/product.service';

@NgModule({
    declarations: [
        AppComponent,
        HeroDetailComponent,
        ProductDetailComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
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
