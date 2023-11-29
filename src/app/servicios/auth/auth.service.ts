import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { persona } from 'src/app/models/persona';
import { PersonasService } from '../personas/personas.service';
import { LocalStorageService } from '../localstorage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private router: Router,
    private sstorage: LocalStorageService,
    private spersona: PersonasService
  ) {}
  authService(persona: persona):boolean{
    this.spersona.login(persona).subscribe(
      (Response) => {
        this.sstorage.agregarElemento('jwt', Response.token);
        this.router.navigate(['/home']);
        return true;
      },
      (error) => {
        console.log(error.status);
        return false;
      }
    );
    return false;
  }
  validToken() {
    if (this.sstorage.obtenerElemento('jwt')) {
      const jwt = JSON.stringify(this.sstorage.obtenerElemento('jwt'));
      this.spersona.valid(jwt).subscribe(
        (Response) => {
          this.router.navigate(['/home']);
        },
        (error) => {
        }
      );
    }
  }
}
