import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JSONPage } from './json.page';

const routes: Routes = [
  {
    path: '',
    component: JSONPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JSONPageRoutingModule {}
