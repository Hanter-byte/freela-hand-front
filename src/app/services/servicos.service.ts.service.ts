import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Servico } from '../models/Servico';

@Injectable({
  providedIn: 'root',
})
export class ServicosServiceTsService {
  baseUrl = 'https://localhost:44317/api/Service';
  constructor(private http: HttpClient) {}

  public getServicos(): Observable<Servico[]> {
    return this.http.get<Servico[]>(this.baseUrl);
  }

  public getServicoById(id: number): Observable<Servico> {
    return this.http.get<Servico>(`${this.baseUrl}/${id}`);
  }

  public postServico(servico: Servico): Observable<Servico> {
    return this.http.post<Servico>(this.baseUrl, servico);
  }

  public putServico(id: number, servico: Servico): Observable<Servico> {
    return this.http.put<Servico>(`${this.baseUrl}/${servico.id}`, servico);
  }

  public deleteServico(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}?id=${id}`);
  }
}
