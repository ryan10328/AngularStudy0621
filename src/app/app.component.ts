import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  imageUrl: string = 'http://cdn2.ettoday.net/images/1526/1526567.jpg';
  isDisabled: boolean = true;
  spanNum: number = 2;

  dataSource: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  save() {
    console.log(`save`);
  }

  name: string = 'Ryan';

  delete(evt) {
    // evt 為 output-demo 元件的 item
    // filter 為過濾資料的方式，它只會回傳符合條件的資料
    // 我們要將 evt !== item 的資料留下
    this.dataSource = this.dataSource.filter(item => {
      return evt !== item;
    });
  }
}
