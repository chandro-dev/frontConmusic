import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../servicios/localstorage/local-storage.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent {
  instrumento: string = 'Batería';

  constructor(private router: Router, private sstorage: LocalStorageService) {}
  login() {
    this.router.navigate(['/']);
  }
  receivedMessage = '';

  receiveMessage(message: string) {
    this.receivedMessage = message;
  }
  cerrarSesion() {
    this.sstorage.eliminarElemento('jwt');
    this.router.navigate(['/']);
  }
}
