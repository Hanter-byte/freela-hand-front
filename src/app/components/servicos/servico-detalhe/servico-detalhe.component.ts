import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Servico } from '@app/models/Servico';
import { ServicosServiceTsService } from '@app/services/servicos.service.ts.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-servico-detalhe',
  templateUrl: './servico-detalhe.component.html',
  styleUrls: ['./servico-detalhe.component.scss'],
})
export class ServicoDetalheComponent {
  servico = {} as Servico;
  form = {} as FormGroup;

  constructor(
    private router: ActivatedRoute,
    private servicoService: ServicosServiceTsService,
    private tostar: ToastrService
  ) {}

  ngOnInit(): void {
    this.carregarServico();
    this.validation();
  }

  public validation(): void {
    this.form = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(200),
      ]),
      price: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(10),
      ]),
    });
  }

  public resetForm(): void {
    this.form.reset();
  }

  public carregarServico(): void {
    const servicoIdParams = this.router.snapshot.paramMap.get('id');

    if (servicoIdParams !== null) {
      this.servicoService.getServicoById(+servicoIdParams).subscribe({
        next: (servico: Servico) => {
          this.servico = { ...servico };
          this.form.patchValue(this.servico);
        },
        error: (error) => {
          console.error(error);
        },
      });
    }
  }

  public salvarServico(): void {
    if (this.form.valid) {
      this.servico = { ...this.form.value };

      this.servicoService.postServico(this.servico).subscribe({
        next: () => {
          this.tostar.success('Serviço cadastrado com sucesso', 'Sucesso');
          this.resetForm();
        },
        error: (error) => {
          this.tostar.error('Erro ao cadastrar serviço', 'Erro');
          console.error(error);
        },
        complete: () => {},
      });
    }
  }
}
