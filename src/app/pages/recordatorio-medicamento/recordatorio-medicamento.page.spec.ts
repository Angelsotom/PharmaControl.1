import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecordatorioMedicamentoPage } from './recordatorio-medicamento.page';

describe('RecordatorioMedicamentoPage', () => {
  let component: RecordatorioMedicamentoPage;
  let fixture: ComponentFixture<RecordatorioMedicamentoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordatorioMedicamentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
