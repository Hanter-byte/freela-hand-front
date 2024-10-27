import { Component, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { Servico } from 'src/app/models/Servico';
import { ServicosServiceTsService } from 'src/app/services/servicos.service.ts.service';

@Component({
  selector: 'app-servico-lista',
  templateUrl: './servico-lista.component.html',
  styleUrls: ['./servico-lista.component.scss'],
})
export class ServicoListaComponent {
  modalRef?: BsModalRef;
  public servicos: Servico[] = [];
  private _filtroLista: string = '';
  public servicosFiltrados: Servico[] = [];
  public servicoId: number = 0;

  public get filtroLista(): string {
    return this._filtroLista;
  }

  public set filtroLista(value: string) {
    this._filtroLista = value;
    this.servicosFiltrados = this.filtroLista
      ? this.filtrarServicos(this.filtroLista)
      : this.servicos;
  }

  constructor(
    private servicoService: ServicosServiceTsService,
    private modalService: BsModalService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  public filtrarServicos(filtrarPor: string): any {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.servicos.filter(
      (servico: { name: string }) =>
        servico.name.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    );
  }

  public ngOnInit() {
    this.getServicos();
  }

  public getServicos(): void {
    this.servicoService.getServicos().subscribe({
      next: (servicos: Servico[]) => {
        this.servicos = servicos.map((servico) => ({
          ...servico,
        }));
        this.servicosFiltrados = this.servicos;
      },
      error: (error: any) => {
        console.error(error);
        this.toastr.error('Erro ao carregar os serviços!', 'Erro');
      },
    });
  }

  openModal(event: any, template: TemplateRef<any>, servicoId: number): void {
    event.stopPropagation();
    this.servicoId = servicoId;
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  confirm(): void {
    this.modalRef?.hide();
    this.servicoService.deleteServico(this.servicoId).subscribe({
      next: () => {
        this.getServicos();
        this.toastr.success('Serviço deletado com sucesso!', 'Sucesso');
      },
      error: (error: any) => {
        console.error(error);
        this.toastr.error('Erro ao deletar o serviço!', 'Erro');
      },
    });
  }

  decline(): void {
    this.modalRef?.hide();
  }

  detalheServico(id: number): void {
    this.router.navigate([`/servicos/detalhe/${id}`]);
  }
}
