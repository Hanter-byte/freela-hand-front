import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from '@app/models/identity/UserLogin';
import { AccountService } from '@app/services/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  model = {} as UserLogin;

  constructor(
    private accountService: AccountService,
    private router: Router,
    private toaster: ToastrService
  ) {}

  public login(): void {
    this.accountService.login(this.model).subscribe({
      next: () => {
        this.router.navigateByUrl('/dashboard');
        this.toaster.success('Login realizado com sucesso', 'Sucesso');
      },
      error: (error: any) => {
        this.toaster.error('Usuário ou senha inválido', 'Erro');
        this.model = {} as UserLogin;
      },
      complete() {},
    });
  }
}
