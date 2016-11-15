import { Component } from '@angular/core';
import { Engineer }  from './engineer'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Engineers';
  engineers = [
    new Engineer("Jim", 0),
    new Engineer("John", 0),
    new Engineer("Bob", 0)
  ];
  myEng = this.engineers[0];


  getEng(){
    var target = event.srcElement || event.currentTarget;
    console.log(target);
    var idAttr = target.attributes;
    console.log(idAttr);

    var number = Math.random() * 100;

    if (number > 0 &&  number <= 34) {
      var pickedEngineer = "Jim";
      console.log(pickedEngineer);
      return pickedEngineer;
    } else if (number > 34 && number <= 66 ){
      var pickedEngineer = "John";
      console.log(pickedEngineer);
      return pickedEngineer;
    } else {
      var pickedEngineer = "Bob";
      console.log(pickedEngineer);
      return pickedEngineer;
    }
  }
  }
