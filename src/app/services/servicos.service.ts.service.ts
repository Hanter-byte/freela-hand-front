import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Servico } from '../models/Servico';

@Injectable()
// {providedIn: 'root',}
export class ServicosServiceTsService {
  baseUrl = 'https://localhost:44317/api/Service';
  constructor(private http: HttpClient) {}

  public getServicos(): Observable<Servico[]> {
    return this.http.get<Servico[]>(this.baseUrl);
  }

  public getServicoById(id: number): Observable<Servico> {
    return this.http.get<Servico>(`${this.baseUrl}/${id}`);
  }
}
