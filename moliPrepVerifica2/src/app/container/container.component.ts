import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
cantiere: string[];
  constructor() {
  this.cantiere = ['gru', 'ruspa', 'martello', 'martello pneumatico','cacciavite','autocarro','scarshian','fortmoli','corrascars']; //Riempiamo il vettore
  }
  ngOnInit() {
  }

}
