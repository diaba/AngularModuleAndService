import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EquipmentModule } from './equipment/equipment.module';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    // add the equipment module containing our container component
    EquipmentModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
