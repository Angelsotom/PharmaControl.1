import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecordatoriodeotraspersonasomascotasPage } from './recordatoriodeotraspersonasomascotas.page';

const routes: Routes = [
  {
    path: '',
    component: RecordatoriodeotraspersonasomascotasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecordatoriodeotraspersonasomascotasPageRoutingModule {}
