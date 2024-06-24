import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecordatorioMedicamentoPageRoutingModule } from './recordatorio-medicamento-routing.module';

import { RecordatorioMedicamentoPage } from './recordatorio-medicamento.page';
import {MatDatepickerModule} from '@angular/material/datepicker';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecordatorioMedicamentoPageRoutingModule,
    MatDatepickerModule
  ],
  declarations: [RecordatorioMedicamentoPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RecordatorioMedicamentoPageModule {}
