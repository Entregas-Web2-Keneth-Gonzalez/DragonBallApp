import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPlComponent } from './detail-pl/detail-pl.component';

const routes: Routes = [
  {
    path: '',
    component: DetailPlComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailPlRoutingModule { }
