import {Injectable} from 'angular2/core';
import { Hero } from '../data/hero';
import {HEROES} from "../data/mock-heroes";

@Injectable()
export class HeroService {
  getHeroes() {
    
    return Promise.resolve(HEROES);
  }

  // See the "Take it slow" appendix
  getHeroesSlowly() {
    return new Promise<Hero[]>(resolve =>
      setTimeout(()=>resolve(HEROES), 2000) // 2 seconds
    );
  }

  getHero(id: number) {
    return Promise.resolve(HEROES).then(
      heroes => heroes.filter(hero => hero.id === id)[0]
    );
  }
}
