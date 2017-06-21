import { JohnCenaModule } from './john-cena/john-cena.module';
import { HelloComponent } from './john-cena/hello/hello.component';
import { BrowserModule } from '@angular/platform-browser';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { InputDemoComponent } from './input-demo/input-demo.component';
import { OutputDemoComponent } from './output-demo/output-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InputDemoComponent,
    OutputDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    JohnCenaModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
