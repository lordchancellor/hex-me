import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hm-hex',
  templateUrl: './hex.component.html',
  styleUrls: ['./hex.component.scss']
})
export class HexComponent {
  @Input() background: string;
  @Input() textColour: string;
  @Output() rgbCode: EventEmitter<number[]>;
  @Output() useLightText: EventEmitter<boolean>;
  maxLength: string;
  placeholder: string;

  constructor() {
    this.rgbCode = new EventEmitter<number[]>();
    this.useLightText = new EventEmitter<boolean>();
    this.maxLength = '6';
    this.placeholder = 'hex';
  }

  valueChanged(value: string) {
    const length = value.length;
    let rgbArray: number[];

    if (length === 3 || length === 6 && this.validateHex(value)) {
      this.rgbCode.emit(this.convertHex(value));

      if (this.isDark(this.convertHex(value))) {
        this.textColour = '#ffffff';
        console.log('Emitting true');
        this.useLightText.emit(true);
      }
      else {
        this.textColour = '#333333';
         console.log('Emitting false');
        this.useLightText.emit(false);
      }
    }
    else if (length === 0) {
      this.rgbCode.emit([255, 255, 255]);
      this.textColour = '#333333';
       console.log('Emitting false');
      this.useLightText.emit(false);
    }

    this.background = `#${value}`;
  }

  validateHex(value: string): boolean {
    const regEx: RegExp = /[a-fA-F0-9]/;
    
    return regEx.test(value);
  }

  convertHex(value: string): number[] {
    const hexArray = value.length === 6 ? value.split('') : this.makeFullHex(value);
    let red: number;
    let green: number;
    let blue: number;
    
    console.log(hexArray);

    red = this.hexToRgb(hexArray[0], hexArray[1]);
    green = this.hexToRgb(hexArray[2], hexArray[3]);
    blue = this.hexToRgb(hexArray[4], hexArray[5]);

    console.log([red, green, blue]);

    return [red, green, blue];
  }

  hexToRgb(ten: string, unit: string): number {
    return (this.numberify(ten) * 16) + this.numberify(unit);
  }

  numberify(val: string): number {
    return !isNaN(Number(val)) ? Number(val) : this.hexToDec(val);
  }

  hexToDec(val: string): number {
    switch (val.toLowerCase()) {
      case 'a':
        return 10;
      case 'b':
        return 11;
      case 'c':
        return 12;
      case 'd':
        return 13;
      case 'e':
        return 14;
      case 'f':
        return 15;
      default:
        return 0;
    }
  }

  makeFullHex(value: string): string[] {
    const shortHexArray = value.split('');
    const longHexArray = [
      shortHexArray[0], 
      shortHexArray[0], 
      shortHexArray[1], 
      shortHexArray[1], 
      shortHexArray[2], 
      shortHexArray[2]
    ];

    return longHexArray;
  }

  isDark(rgb: number[]): boolean {
    console.log('Luminence: ', (rgb[0] * 0.299 + rgb[1] * 0.587 + rgb[2] * 0.114) / 256);
    return (rgb[0] * 0.299 + rgb[1] * 0.587 + rgb[2] * 0.114) / 256 < 0.5;
  }

}
