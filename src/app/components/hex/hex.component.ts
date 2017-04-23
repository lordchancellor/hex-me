import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'hm-hex',
  templateUrl: './hex.component.html',
  styleUrls: ['./hex.component.scss']
})
export class HexComponent implements OnInit {
  hexForm: FormGroup;
  maxLength: string = '6';
  pattern: string = "[a-fA-F0-9]";

  constructor(private fb: FormBuilder) { 
    this.hexForm = fb.group({
      'hex': ['']
    });
  }

  ngOnInit() {
  }

  valueChanged(value: string) {
    console.log(value);
  }

}
