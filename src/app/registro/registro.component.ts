import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { persona } from '../models/persona';
import { PersonasService } from '../servicios/personas/personas.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent {
  persona: persona = new persona();
  constructor(private router: Router, private spersona: PersonasService) {}

  volverAtras() {
    this.router.navigate(['/']);
  }
  registrar() {
    console.log(this.persona)
    this.spersona.register(this.persona).subscribe(
      (Response) => {
        console.log(Response);
      },
      (error) => {
        console.log(error.status);
      }
    );
  }
}
