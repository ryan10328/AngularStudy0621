import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  // styleUrls: ['./header.component.css']
  styles: [
    `.yellow { background-color: yellow; } `,
    `.deleted { text-decoration: line-through; } `
  ],
  encapsulation: ViewEncapsulation.Emulated
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isYellow: boolean = true;
  spanWidth: number = 1;
}
