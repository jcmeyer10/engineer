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
  pickedEngineer = '';

getEng(){

  var number = Math.random() * 100;

  if (number > 0 &&  number <= 34) {
    this.myEng = this.engineers[0];
    this.myEng.timesPicked++;
  } else if (number > 34 && number <= 66 ){
    this.myEng = this.engineers[1];
    this.myEng.timesPicked++;
  } else {
    this.myEng = this.engineers[2];
    this.myEng.timesPicked++;
  }
}
  }
