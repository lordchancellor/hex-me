import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RgbComponentComponent } from './rgb-component.component';

describe('RgbComponentComponent', () => {
  let component: RgbComponentComponent;
  let fixture: ComponentFixture<RgbComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RgbComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RgbComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
