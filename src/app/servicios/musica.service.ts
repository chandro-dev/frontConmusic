import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { LocalStorageService } from './localstorage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class MusicaService {
  private url: string = 'http://191.88.249.172:3000';

  constructor(
    private http: HttpClient,
    private sstorage: LocalStorageService
  ) {}
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${JSON.parse(
      JSON.stringify(this.sstorage.obtenerElemento('jwt'))
    )}`,
  });
  // Obtener la URL de una canción específica
  getMusicUrl(songId: String): Observable<string> {
    const url = `${this.url}/music/${songId}`;
    const jwtToken = this.getJwtToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${JSON.parse(jwtToken)}`,
    });
    return this.http
      .get(url, { headers, responseType: 'blob' })
      .pipe(map((blob) => URL.createObjectURL(blob)));
  }

  private getJwtToken(): string {
    return JSON.stringify(this.sstorage.obtenerElemento('jwt'));
  }
  music(): Observable<any> {
    return this.http.get(this.url + '/musica', {
      headers: this.headers,
    });
  }
}
