import { Component, OnInit } from '@angular/core';
import { CimaApiService } from '../../services/cima-api-service';

@Component({
  selector: 'app-medicamentos',
  templateUrl: './medicamentos.page.html',
  styleUrls: ['./medicamentos.page.scss'],
})
export class MedicamentosPage implements OnInit {

  medicamentos: any[] = [];
  nombreMedicamento: string = '';
  searchPerformed: boolean = false;

  constructor(private cimaApiService: CimaApiService) { }

  ngOnInit() {
    // Puedes realizar una búsqueda inicial si lo deseas
    this.getMedicamentos('Paracetamol');
  }

  buscarMedicamentos() {
    this.getMedicamentos(this.nombreMedicamento);
  }

  getMedicamentos(nombre: string) {
    const condiciones = {
      nombre: nombre
    };
    this.cimaApiService.getMedicamentos(condiciones).subscribe(
      data => {
        this.medicamentos = data.resultados || [];
        this.searchPerformed = true; // Marca que la búsqueda se ha realizado
        console.log(this.medicamentos);
      },
      error => {
        console.error('Error al obtener los medicamentos:', error);
        this.medicamentos = [];
        this.searchPerformed = true; // Marca que la búsqueda se ha realizado
      }
    );
  }
}


