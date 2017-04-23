import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BodyComponent } from './components/body/body.component';
import { HexComponent } from './components/hex/hex.component';
import { RgbaComponent } from './components/rgba/rgba.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    HexComponent,
    RgbaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
