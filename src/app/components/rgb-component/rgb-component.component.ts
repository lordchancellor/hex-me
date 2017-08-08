import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hm-rgb',
  templateUrl: './rgb-component.component.html',
  styleUrls: ['./rgb-component.component.scss']
})
export class RgbComponentComponent {
  hexArray: string[];
  rgb: number[];
  @Output() hexCode: EventEmitter<string>;
  @Output() useLightText: EventEmitter<boolean>;
  @Input() background: string;
  @Input() textColour: string;

  constructor() {
    this.hexArray = ['ff', 'ff', 'ff'];
    this.rgb = [255, 255, 255];
    this.hexCode = new EventEmitter<string>();
    this.useLightText = new EventEmitter<boolean>();
  }

  valueChanged(value: string, colour: string): void {
    let hexValue: string;

    if (this.validateCode(value)) {
      let code: number = Number(value);

      switch (colour) {
        case 'red':
          hexValue = this.convertToHex(code);
          this.hexArray[0] = hexValue;
          this.rgb.splice(0, 1, code);
          break;
        case 'green':
          hexValue = this.convertToHex(code);
          this.hexArray[1] = hexValue;
          this.rgb.splice(1, 1, code);
          break;
        case 'blue':
          hexValue = this.convertToHex(code);
          this.hexArray[2] = hexValue;
          this.rgb.splice(2, 1, code);
          break;
        default:
          break;
      }
  
      this.hexCode.emit(this.hexArray.join(''));
      this.background = `#${this.hexArray.join('')}`;

      if (this.isDark(this.rgb)) {
        this.textColour = '#ffffff';
        this.useLightText.emit(true);
      }
      else {
        this.textColour = '#333333';
        this.useLightText.emit(false);
      }

      console.log(this.hexArray.join(''));
    }
  }

  convertToHex(code: number): string {
    if (code < 16) {
      return `0${this.hexify(code)}`;
    }
    else {
      return `${this.hexify(Math.floor(code/16))}${this.hexify(code%16)}`;
    }
  }

  hexify(value: number): string {
    if (value < 10) {
      return value.toString();
    }
    else {
      switch (value) {
        case 10:
          return 'a';
        case 11:
          return 'b';
        case 12:
          return 'c';
        case 13:
          return 'd';
        case 14:
          return 'e';
        case 15:
          return 'f';
        default:
          return '0';
      }
    }
  }

  validateCode(code: string): boolean {
    const regex: RegExp = /^([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$/;

    return regex.test(code);
  }

  isDark(rgb: number[]): boolean {
    console.log('Luminence: ', (rgb[0] * 0.299 + rgb[1] * 0.587 + rgb[2] * 0.114) / 256);
    return (rgb[0] * 0.299 + rgb[1] * 0.587 + rgb[2] * 0.114) / 256 < 0.5;
  }

}
