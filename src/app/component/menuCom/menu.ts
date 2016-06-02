import { Component,OnInit,forwardRef} from '@angular/core';
import { Classification } from '../../data/classification';
import {ListService} from "../../service/classListService";


@Component({
  selector: 'menu-list',
  styles: [require('./menu.css')],
  template: require('./menu.html'),
  inputs: ['smallGirdLists'],
directives: [forwardRef(() => MenuListComponent)],
})


export class MenuListComponent {}

@Component({
  selector: 'menu',
  styles: [require('./menu.css')],
  template: require('./menu.html'),
  directives: [forwardRef(() => MenuListComponent)],
  inputs: ['smallGirdLists']
})


export class MenuComponent implements OnInit {
  smallGirdLists: Classification[];
  constructor(

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
