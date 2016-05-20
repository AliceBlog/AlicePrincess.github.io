import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';


import {ListService} from "../service/classListService";
import {HeroService} from "../service/hero.service";
import { SmallGirdComponent } from './smallGird';
import {HeroesComponent} from "./heroes.component";
// import {HeroDetailComponent} from "./hero-detail.component";

@Component({
  selector: 'my-app',
  templateUrl: 'app/component/app.html',
  styleUrls: ['app/component/app.scss'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    ListService,
    HeroService
  ]
})
@RouteConfig([
  {
    path: '/',
    name: 'SmallGird',
    component: SmallGirdComponent,
    useAsDefault: true
  }
])


export class AppComponent {
  title = 'Database';

}
