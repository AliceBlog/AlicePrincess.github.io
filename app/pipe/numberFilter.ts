import {Pipe} from 'angular2/core';

@Pipe({
  name:"numberFilter"
})
export class numberPipe {
transform(value){

var newValue=Math.floor(Math.random()*7+1);
  return newValue;

}
}
