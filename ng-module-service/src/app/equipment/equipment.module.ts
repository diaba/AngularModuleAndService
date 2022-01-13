import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterSwordComponent } from './master-sword/master-sword.component';
import { HylianSheldComponent } from './hylian-sheld/hylian-sheld.component';


@NgModule({
  declarations: [
    MasterSwordComponent,
    HylianSheldComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ // allowing other to import this module
    MasterSwordComponent,
    HylianSheldComponent
  ]
})
export class EquipmentModule { }
