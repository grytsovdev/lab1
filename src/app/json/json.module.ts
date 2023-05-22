import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JSONPageRoutingModule } from './json-routing.module';

import { JSONPage } from './json.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JSONPageRoutingModule
  ],
  declarations: [JSONPage]
})
export class JSONPageModule { }
