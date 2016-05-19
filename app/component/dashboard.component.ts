import {Component,OnInit} from 'angular2/core';
import { Router } from 'angular2/router';

import {Hero} from "../data/hero";
import {HeroService} from "../service/hero.service";

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/component/dashboard.component.html',
  styleUrls: ['app/component/dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(
    private router: Router,
    private heroService: HeroService) {
  }

  ngOnInit() {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes);
  }

  gotoDetail(hero: Hero) {
    let link = ['HeroDetail', { id: hero.id }];
    this.router.navigate(link);
  }
}
