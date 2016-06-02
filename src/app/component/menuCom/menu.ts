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


export class MenuListComponent {
  ngOnInit() {
    console.log("into");
  }
}

@Component({
  selector: 'menu',
  styles: [require('./menu.css')],
  template: require('./menu.html'),
  directives: [forwardRef(() => MenuListComponent)],
  inputs: ['smallGirdLists']
})


export class MenuComponent implements OnInit {
  smallGirdLists: Classification[];
  menuArray=[];
  menuNum:number;
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

    showNextMenu(data, num) {
      this.menuNum=num;
        if (num == 1) {
            this.menuArray[1] = [];
            this.menuArray[2]  = [];
            this.menuArray[0]  = data;

        } else if (num == 2) {
            this.menuArray[2]= [];
            this.menuArray[1]= data;
        } else if (num == 3) {
            this.menuArray[2]= data;
        }
        else if (num == 4) {
            this.menuArray[3]= data;
        }
    }
}
