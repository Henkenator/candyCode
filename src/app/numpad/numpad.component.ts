import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-numpad',
  templateUrl: './numpad.component.html',
  styleUrls: ['./numpad.component.css']
})
export class NumpadComponent implements OnInit {

  @Input() backgroundColor: string = '#0000';
  @Input() color: string = '';

  @Output() selectedCodeEvent = new EventEmitter<{color: string, code: string}>();

  constructor() { }

  ngOnInit(): void {
  }

  onNumberClick(nbr: number): void {
    console.log('clicked:', nbr);
    this.selectedCodeEvent.emit({color: this.color, code: nbr.toString()});
  }

}
