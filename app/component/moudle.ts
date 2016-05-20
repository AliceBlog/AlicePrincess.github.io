import {Component,OnInit,Input} from 'angular2/core';
import { Router } from 'angular2/router';
import {typographyPipe} from "../pipe/typography";
@Component({
  selector: 'moudle-gird',
  pipes:[typographyPipe],
  templateUrl: 'app/component/moudle.html',
  styleUrls:  ['app/component/moudle.scss'],
   inputs: ['menus','random']
})

export class MoudleComponent {
// @Input() menus;


}
