import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Comprobantes {
  private apiUrl = 'https://localhost:7110/api/Comprobante';

  constructor(private http: HttpClient) {}

  getComprobantes(rnc: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/ncf-por-contribuyente/${rnc}`);
  }
}
