import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from 'src/app/models/persona';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PersonasService {
  private url: string = 'http://localhost:3000/persona';
  private headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  constructor(private http: HttpClient) {}
  register(persona: persona): Observable<any> {
    return this.http.post(this.url, persona, { headers: this.headers });
  }
  login(persona: persona): Observable<any> {
    return this.http.post(this.url, persona, { headers: this.headers });
  }
}
