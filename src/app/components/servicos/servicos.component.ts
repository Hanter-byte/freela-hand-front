import { Component } from '@angular/core';
import { ServicosServiceTsService } from 'src/app/services/servicos.service.ts.service';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.scss'],
  providers: [ServicosServiceTsService],
})
export class ServicosComponent {}
