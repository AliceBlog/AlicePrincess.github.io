import {Pipe} from 'angular2/core';

@Pipe({
  name:"typography"
})
export class typographyPipe {
transform(value,data){
  for(var i = 0; i < value.length; i++){
if(i%2==0){
  value[i].type="large"
}
if(i%2==1){
  value[i].type="small"
}
  }
  var newValue={"first":[],"second":[],"third":[]};

var colNum=Math.ceil(value.length/3);

for (var i = 0; i < value.length; i++) {
  if (i<colNum) {
    newValue.first.push(value[i]);

  }else
  if (i<colNum*2) {
    newValue.second.push(value[i]);
  }else{
    newValue.third.push(value[i]);
  }
}
if(colNum%2==1){
  newValue.first[colNum-1].type="small";
  if(value.length%3==0){
  newValue.third[colNum-1].type="small";
  }
}
  return newValue[data];

}
}
