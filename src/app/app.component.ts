import {Component, OnInit} from '@angular/core';
import {Hero} from './core/hero/hero';
import {HeroService} from './core/hero/hero.service';
import {HeroDuyService} from './core/hero/heroDuy.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    constructor(
        private heroService: HeroService,
        private heroDuyService: HeroDuyService
    ){};
    ngOnInit(): void {
        this.getHeroes();
    }
    title = 'app';
    hero: Hero = {
        id:1,
        name:'Windstorm'
    };
    heroes: Hero[];
    selectedHero: Hero;
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    };
    getHeroes(): void {
        this.heroService.getHeroes().then(
            heroes=> this.heroes = heroes
        );
    };
    getDuyHeroes(): void {
        this.heroDuyService.getHeroes().then(
            heroes=>this.heroes = heroes
        );
    }

}
