import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CantidadMedicamentoPage } from './cantidad-medicamento.page';

describe('CantidadMedicamentoPage', () => {
  let component: CantidadMedicamentoPage;
  let fixture: ComponentFixture<CantidadMedicamentoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CantidadMedicamentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
