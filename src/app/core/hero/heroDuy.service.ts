/**
 * Created by willo on 9/17/17.
 */
import {Injectable} from '@angular/core'
import {Hero} from './hero';
const Heroes: Hero[] = [
    {id: 11, name: 'Mr. Nice'},
    {id: 12, name: 'Narco'},
];
@Injectable()
export class HeroDuyService {
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(Heroes);
    }
}
