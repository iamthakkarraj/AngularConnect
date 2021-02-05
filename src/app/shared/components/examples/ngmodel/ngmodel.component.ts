import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngmodel',
  templateUrl: './ngmodel.component.html',
  styleUrls: ['./ngmodel.component.css']
})
export class NgmodelComponent implements OnInit {

  reflector: string = 'I will Reflect MySelf';
  
  constructor() { }

  ngOnInit(): void {
  }  

}
