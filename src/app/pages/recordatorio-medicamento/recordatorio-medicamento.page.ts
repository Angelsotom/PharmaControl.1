import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReminderService } from '../../services/reminder.service';

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

  constructor(private router: Router, private reminderService: ReminderService) {}

  async addReminder() {
    if (this.reminder.name && this.reminder.time) {
      await this.reminderService.addReminder(this.reminder);
      this.reminder.name = '';
      this.reminder.time = '';
      this.router.navigate(['/home']);
    } else {
      // Mostrar alerta o mensaje de error
    }
  }

  goToPage(page: string) {
    this.router.navigate([`/${page}`]);
  }
}
