import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CimaApiService {

  private baseUrl: string = 'https://cima.aemps.es/cima/rest/';

  constructor(private http: HttpClient) { }

  getMedicamentos(condiciones: any): Observable<any> {
    const url = `${this.baseUrl}medicamentos?${this.buildQueryString(condiciones)}`;
    return this.http.get<any>(url);
  }

  private buildQueryString(params: any): string {
    return Object.keys(params)
      .map(key => `${key}=${encodeURIComponent(params[key])}`)
      .join('&');
  }
}
