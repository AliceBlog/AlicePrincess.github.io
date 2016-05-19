import {Component,OnInit} from 'angular2/core';
import { RouteParams } from 'angular2/router';

import { HeroService } from '../service/hero.service';
import { Hero } from '../data/hero';

@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/component/hero-detail.component.html',
  styleUrls: ['app/component/hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;

  constructor(
    private heroService: HeroService,
    private routeParams: RouteParams) {
  }

  ngOnInit() {
    let id = +this.routeParams.get('id');
    this.heroService.getHero(id)
      .then(hero => this.hero = hero);
  }

  goBack() {
    window.history.back();
  }
}
