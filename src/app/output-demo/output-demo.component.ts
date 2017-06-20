import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output-demo',
  templateUrl: './output-demo.component.html',
  styleUrls: ['./output-demo.component.css']
})
export class OutputDemoComponent implements OnInit {

  @Input() dataSource: any[] = [];

  @Output() onDelete = new EventEmitter();
  // @Output('myOnDelete') onDelete = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  delete(item) {
    this.onDelete.emit(item);
  }

}
