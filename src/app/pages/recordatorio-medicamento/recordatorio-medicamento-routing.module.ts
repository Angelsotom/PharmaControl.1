import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecordatorioMedicamentoPage } from './recordatorio-medicamento.page';

const routes: Routes = [
  {
    path: '',
    component: RecordatorioMedicamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecordatorioMedicamentoPageRoutingModule {}
