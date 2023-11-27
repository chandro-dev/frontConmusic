import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { persona } from 'src/app/models/persona';
import { PersonasService } from '../personas/personas.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router, private spersona:PersonasService) {}
  authService(persona: persona) {
    this.router.navigate(["/home"]);
  }
}
