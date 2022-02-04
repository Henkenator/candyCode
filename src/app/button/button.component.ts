import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  color: string = '#37246e';
  @Input() backgroundColor: string = '#FFFFFF';
  @Input() selectedCode: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
