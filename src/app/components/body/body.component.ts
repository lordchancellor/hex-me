import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hm-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  background : string;
  textColour: string;

  constructor() { }

  ngOnInit() {
    this.background = '#ffffff';
    this.textColour = '#333333';
  }

  changeBackground(code: string|number[], type: string): void {
    switch (type) {
      case 'rgb':
      console.log('here');
        this.background = `rgb(${code[0]}, ${code[1]}, ${code[2]})`;
        break;
      case 'hex':
        this.background = `#${code}`;
        break;
      default:
        this.background = '#ffffff';
        break;
    }

    console.log(this.background);
  }

  useLightText(isDark: boolean): void {
    console.log('Catching emission: ', isDark);
    this.textColour = isDark ? '#ffffff' : '#333333';
  }

}