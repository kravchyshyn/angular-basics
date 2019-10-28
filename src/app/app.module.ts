import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {MultByPipe} from './pipes/mult-by.pipe';
import { IfnotDirective } from './directives/ifnot.directive';
import {PowPipe} from './pipes/pow.pipe';
import { TonumberPipe } from './pipes/tonumber.pipe';
import { ExMarksPipe } from './pipes/ex-marks.pipe';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MultByPipe,
    IfnotDirective,
    PowPipe,
    TonumberPipe,
    ExMarksPipe,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
      FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
