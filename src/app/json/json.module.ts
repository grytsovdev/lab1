import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JSONPageRoutingModule } from './json-routing.module';

import { JSONPage } from './json.page';
import { MyHeaderModule } from '../my-header/my-header.component.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JSONPageRoutingModule,
    MyHeaderModule
  ],
  declarations: [JSONPage]
})
export class JSONPageModule { }
