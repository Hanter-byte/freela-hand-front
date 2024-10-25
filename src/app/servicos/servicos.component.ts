import { Component } from '@angular/core';
import { ServicosServiceTsService } from '../services/servicos.service.ts.service';
import { Servico } from '../models/Servico';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.scss'],
  providers: [ServicosServiceTsService],
})
export class ServicosComponent {
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

  constructor(private servicoService: ServicosServiceTsService) {}

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
      },
    });
  }
}
