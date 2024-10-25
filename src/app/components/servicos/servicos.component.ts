import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { Servico } from 'src/app/models/Servico';
import { ServicosServiceTsService } from 'src/app/services/servicos.service.ts.service';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.scss'],
  providers: [ServicosServiceTsService],
})
export class ServicosComponent {
  modalRef?: BsModalRef;

  public servicos: Servico[] = [];
  private _filtroLista: string = '';
  public servicosFiltrados: Servico[] = [];

  public get filtroLista(): string {
    return this._filtroLista;
  }

  public set filtroLista(value: string) {
    this._filtroLista = value;
    this.servicosFiltrados = this.filtroLista
      ? this.filtrarServicos(this.filtroLista)
      : this.servicos;
  }

  public filtrarServicos(filtrarPor: string): any {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.servicos.filter(
      (servico: { name: string }) =>
        servico.name.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    );
  }

  constructor(
    private servicoService: ServicosServiceTsService,
    private modalService: BsModalService,
    private toastr: ToastrService
  ) {}

  public ngOnInit() {
    this.getServicos();
  }

  public getServicos(): void {
    this.servicoService.getServicos().subscribe({
      next: (servicos: Servico[]) => {
        this.servicos = servicos.map((servico) => ({
          ...servico,
          dateTime: new Date(),
        }));
        this.servicosFiltrados = this.servicos;
      },
      error: (error: any) => {
        console.error(error);
        this.toastr.error('Erro ao carregar os serviços!', 'Erro');
      },
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  confirm(): void {
    this.modalRef?.hide();
    this.toastr.success('Serviço excluído com sucesso!', 'Exclusão');
  }

  decline(): void {
    this.modalRef?.hide();
  }
}