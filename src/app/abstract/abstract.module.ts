import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbstractPageRoutingModule } from './abstract-routing.module';

import { AbstractPage } from './abstract.page';
import { MyHeaderModule } from '../my-header/my-header.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbstractPageRoutingModule,
    MyHeaderModule
  ],
  declarations: [AbstractPage]
})
export class AbstractPageModule { }
