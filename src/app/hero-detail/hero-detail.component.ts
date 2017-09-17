/**
 * Created by willo on 9/17/17.
 */
import {Component, Input} from '@angular/core';
import {Hero} from '../core/hero/hero'

@Component({
    selector: 'hero-detail',
    templateUrl: './hero-detail.template.html'
})
export class HeroDetailComponent {
    @Input() hero: Hero;
}