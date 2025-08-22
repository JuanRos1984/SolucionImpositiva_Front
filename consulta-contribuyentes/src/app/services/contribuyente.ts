import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Contribuyente {
  private apiUrl = 'https://localhost:7110/api/Contribuyente';

  constructor(private http: HttpClient) {}

  getContribuyentes(): Observable<any> {
    return this.http.get(`${this.apiUrl}/obtener-contribuyentes`);
  }
}
