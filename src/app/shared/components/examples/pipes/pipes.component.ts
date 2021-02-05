import { Component, OnInit } from '@angular/core';
import { CeaserPipe } from '../../../utility/CaesarPipe';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  constructor() { }

  date: string = '02/22/2021';
  text: string = 'Hello World';
  selectedDateFormat:number = 1;
  selectedLetterCase = 1;
  key:number = 3;
  plainText = 'This is a block of plai text';
  ceaserPipe: CeaserPipe;

  ngOnInit(): void {
  }

  get cipherdText() {
    if (this.ceaserPipe == null ) this.ceaserPipe = new CeaserPipe();
    return this.ceaserPipe.transform(this.plainText, this.key);
  }

  get dateFormate() {
    switch(this.selectedDateFormat){
      case 1 : return 'dd/mm/yy'; break;
      case 2 : return 'mm/dd/yy'; break;
      case 3 : return 'yy/mm/dd'; break;
    }
  }

  get letterCase(){
    switch(this.selectedDateFormat){
      case 1 : return 'uppercase'; break;
      case 2 : return 'lowercase'; break;
      case 3 : return 'titlecase'; break;
    }
  }



}
