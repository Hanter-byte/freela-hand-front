import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@app/models/identity/User';
import { map, Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private baseUrl = 'https://localhost:5001/api/Token/LoginUser';
  constructor(private http: HttpClient) {}

  public login(model: any): Observable<void> {
    return this.http.post<User>(this.baseUrl, model).pipe(
      take(1),
      map((response: User) => {
        localStorage.setItem('user', JSON.stringify(response));
      })
    );
  }
}
