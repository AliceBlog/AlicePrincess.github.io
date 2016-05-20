import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './component/app.component'

bootstrap(AppComponent);

var i=0;
document.body.onmousewheel = function(event) {

  event.returnValue = false;
  if(event.preventDefault) {
           event.preventDefault();
       }
       var delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
  if(delta<0){
    i+=10;
    if(i>document.body.scrollWidth-document.body.offsetWidth){
      i=document.body.scrollWidth-document.body.offsetWidth;

    }
    window.scrollTo(i,0);
  }else if(delta>0){
    i-=10;
    if(i<0){
      i=0
    }
window.scrollTo(i,0);
  }

};
