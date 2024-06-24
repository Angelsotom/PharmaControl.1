import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cantidad-medicamento',
  templateUrl: './cantidad-medicamento.page.html',
  styleUrls: ['./cantidad-medicamento.page.scss'],
})
export class CantidadMedicamentoPage {
  medicines = [
    { name: 'Paracetamol', quantity: 20 },
    { name: 'Ibuprofeno', quantity: 15 },
    { name: 'Antibiótico', quantity: 10 }
  ];

  constructor(private router: Router) {}

  goToPage(page: string) {
    this.router.navigate([`/${page}`]);
  }
}
