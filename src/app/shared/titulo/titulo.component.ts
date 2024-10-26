import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.scss'],
})
export class TituloComponent {
  @Input() titulo: string | undefined;
  @Input() subtitulo: string | undefined;
  @Input() icon: string = '';
  @Input() botaoListar: boolean = false;

  constructor(private router: Router) {}

  ngOninit(): void {}

  listar(): void {
    this.router.navigate([`/${this.titulo?.toLowerCase()}/lista`]);
  }
}
