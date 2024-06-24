import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecordatoriodeotraspersonasomascotasPageRoutingModule } from './recordatoriodeotraspersonasomascotas-routing.module';

import { RecordatoriodeotraspersonasomascotasPage } from './recordatoriodeotraspersonasomascotas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecordatoriodeotraspersonasomascotasPageRoutingModule
  ],
  declarations: [RecordatoriodeotraspersonasomascotasPage]
})
export class RecordatoriodeotraspersonasomascotasPageModule {}
