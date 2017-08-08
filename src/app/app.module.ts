import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BodyComponent } from './components/body/body.component';
import { HexComponent } from './components/hex-component/hex.component';
import { RgbComponentComponent } from './components/rgb-component/rgb-component.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    HexComponent,
    RgbComponentComponent
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
