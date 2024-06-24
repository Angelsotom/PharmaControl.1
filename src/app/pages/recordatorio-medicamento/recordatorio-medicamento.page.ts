import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recordatorio-medicamento',
  templateUrl: './recordatorio-medicamento.page.html',
  styleUrls: ['./recordatorio-medicamento.page.scss'],
})
export class RecordatorioMedicamentoPage {
  reminder = {
    name: '',
    time: ''
  };

  constructor(private router: Router) {}

  addReminder() {
    // Lógica para agregar un recordatorio de medicamento
    console.log('Recordatorio agregado', this.reminder);
  }

  goToPage(page: string) {
    this.router.navigate([`/${page}`]);
  }
}
