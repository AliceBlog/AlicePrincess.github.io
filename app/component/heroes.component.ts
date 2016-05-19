import {Component,OnInit} from 'angular2/core';
import { Router } from 'angular2/router';
import { Hero } from '../data/hero';
import { HeroDetailComponent } from './hero-detail.component';
import {HeroService} from "../service/hero.service";

@Component({
  selector: 'my-heroes',
  templateUrl: 'app/component/heroes.component.html',
  styleUrls:  ['app/component/heroes.component.scss'],
  directives: [HeroDetailComponent]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  constructor(
    private router: Router,
    private heroService: HeroService) { }

  getHeroes() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero) { this.selectedHero = hero; }

  gotoDetail() {
    this.router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
  }
}
