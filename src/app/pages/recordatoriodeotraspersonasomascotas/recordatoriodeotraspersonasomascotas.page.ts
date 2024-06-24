import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recordatoriodeotraspersonasomascotas',
  templateUrl: './recordatoriodeotraspersonasomascotas.page.html',
  styleUrls: ['./recordatoriodeotraspersonasomascotas.page.scss'],
})
export class RecordatoriodeotraspersonasomascotasPage {
  reminders = [
    { name: 'Medicamento para Mascota 1', time: '08:00 AM' },
    { name: 'Medicamento para Persona 1', time: '10:00 AM' },
    { name: 'Medicamento para Mascota 2', time: '06:00 PM' }
  ];

  constructor(private router: Router) {}

  goToPage(page: string) {
    this.router.navigate([`/${page}`]);
  }
}
