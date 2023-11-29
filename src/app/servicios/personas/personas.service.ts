import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from 'src/app/models/persona';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PersonasService {
  private url: string = 'http://191.88.249.172:3000/';
  private headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  constructor(private http: HttpClient) {}
  register(persona: persona): Observable<any> {
    return this.http.post(this.url+'persona', persona, { headers: this.headers });
  }
  login(persona: persona): Observable<any> {
    return this.http.post(this.url+'Login', persona, { headers: this.headers });
  }
  valid(token: string): Observable<any> {
     const _headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${JSON.parse(token)}`,
    });
    return this.http.get(this.url+'token', { headers:_headers });
  }
}
