import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template:
      `<p [style.fontSize.px]="tamano">
          esta es una etiqueta
      </p>
      
      <button class="btn btn-primary" (click)="tamano=tamano+5">
          <i>+</i>
      </button>

      <button class="btn btn-primary" (click)="tamano=tamano-5">
          <i>-</i>
      </button>      
      `,
  styles:[]
})
export class NgStyleComponent implements OnInit  {
  tamano:number = 10;
  constructor(){

  }

  ngOnInit(){

  }
}
