import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'button-container',
  templateUrl: './button-container.component.html',
  styleUrls: ['./button-container.component.css']
})
export class ButtonContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  showNumpad: boolean = false;
  selectedColor: string = '#FFFFFF';
  selectedButton: string = '';

  greenColor = '#00B888';
  yellowColor = '#FFED15';
  redColor = '#FF3610';
  blueColor = '#0CB0E8';

  greenCode   = '8';
  yellowCode  = '4';
  redCode     = '5';
  blueCode    = '2';

  selectedGreen = '-';
  selectedYellow = '-';
  selectedRed = '-';
  selectedBlue = '-';

  correctCode(): boolean {
    return this.selectedGreen === this.greenCode &&
      this.selectedYellow === this.yellowCode &&
      this.selectedRed === this.redCode &&
      this.selectedBlue === this.blueCode;
  }

  /*selectedGreenCode(val: string) { this.selectedGreen = val; }
  selectedYellowCode(val: string) { this.selectedYellow = val; }
  selectedRedCode(val: string) { this.selectedRed = val; }
  selectedBlueCode(val: string) { this.selectedBlue = val; }*/

  selectedCode(value: any) {
    console.log(value);
    this.showNumpad = false;

    switch (value.color) {
      case 'green':
        this.selectedGreen = value.code;
        break;
      case 'yellow':
        this.selectedYellow = value.code;
        break;
      case 'red':
        this.selectedRed = value.code;
        break;
      case 'blue':
        this.selectedBlue = value.code;
        break;
    }

  }

  openNumpad(button: string, colorCode: string) {
    this.selectedColor = colorCode;
    this.selectedButton = button;
    this.showNumpad = true;
  }



}
