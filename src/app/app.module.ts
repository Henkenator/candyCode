import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonContainerComponent } from './button-container/button-container.component';
import { ButtonComponent } from './button/button.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NumpadComponent } from './numpad/numpad.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonContainerComponent,
    ButtonComponent,
    NumpadComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
