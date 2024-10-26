import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoDetalheComponent } from './servico-detalhe.component';

describe('ServicoDetalheComponent', () => {
  let component: ServicoDetalheComponent;
  let fixture: ComponentFixture<ServicoDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicoDetalheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicoDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
