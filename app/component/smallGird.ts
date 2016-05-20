import {Component,OnInit} from 'angular2/core';
import { Router } from 'angular2/router';
import { Classification } from '../data/classification';
import {ListService} from "../service/classListService";

import { MoudleComponent } from './moudle';

@Component({
  selector: 'small-gird',
  templateUrl: 'app/component/smallGird.html',
  styleUrls:  ['app/component/smallGird.scss'],
  directives: [MoudleComponent]
})


export class SmallGirdComponent implements OnInit {
  smallGirdLists: Classification[];
  random:number=Math.floor(Math.random()*7+1);
  constructor(
    private router: Router,
    private listService: ListService) { }
    getLists() {
      this.listService.getLists().then(
        smallGirdLists => this.smallGirdLists = smallGirdLists
      );
    }
  ngOnInit() {
  this.getLists();
  }
}
