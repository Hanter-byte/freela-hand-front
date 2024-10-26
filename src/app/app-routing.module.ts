import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ServicosComponent } from './components/servicos/servicos.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ServicoDetalheComponent } from './components/servicos/servico-detalhe/servico-detalhe.component';
import { ServicoListaComponent } from './components/servicos/servico-lista/servico-lista.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'servicos',
    component: ServicosComponent,
    children: [
      { path: 'detalhe/:id', component: ServicoDetalheComponent },
      { path: 'detalhe', component: ServicoDetalheComponent },
      { path: 'lista', component: ServicoListaComponent },
    ],
  },
  { path: 'clientes', component: ClientesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
