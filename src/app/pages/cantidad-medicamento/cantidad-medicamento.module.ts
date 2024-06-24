import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CantidadMedicamentoPageRoutingModule } from './cantidad-medicamento-routing.module';

import { CantidadMedicamentoPage } from './cantidad-medicamento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CantidadMedicamentoPageRoutingModule
  ],
  declarations: [CantidadMedicamentoPage]
})
export class CantidadMedicamentoPageModule {}
