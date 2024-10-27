import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicosComponent } from './components/servicos/servicos.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './shared/nav/nav.component';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { DateTimeFormatPipe } from './helpers/DateTimeFormat.pipe';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ToastrModule } from 'ngx-toastr';
import { TituloComponent } from './shared/titulo/titulo.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ServicoDetalheComponent } from './components/servicos/servico-detalhe/servico-detalhe.component';
import { ServicoListaComponent } from './components/servicos/servico-lista/servico-lista.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { PerfilComponent } from './components/user/perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    ServicosComponent,
    ClientesComponent,
    NavComponent,
    TituloComponent,
    DashboardComponent,
    ServicoDetalheComponent,
    ServicoListaComponent,
    UserComponent,
    LoginComponent,
    RegisterComponent,
    PerfilComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    FormsModule,
    DateTimeFormatPipe,
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      progressBar: true,
      progressAnimation: 'increasing',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
