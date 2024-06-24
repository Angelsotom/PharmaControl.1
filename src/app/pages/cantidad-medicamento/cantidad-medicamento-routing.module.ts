import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CantidadMedicamentoPage } from './cantidad-medicamento.page';

const routes: Routes = [
  {
    path: '',
    component: CantidadMedicamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CantidadMedicamentoPageRoutingModule {}
