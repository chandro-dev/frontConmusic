import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  lista:string[]=["cancion 1", "cancion 2", "cancion 3", "cancion 4"];
  descargarArchivo() {
    const enlace = document.createElement('a');
    enlace.href = "../../assets/music/Todo de Cabeza - Kaleth Morales.mp3";
    enlace.download = "../../assets/music/Todo de Cabeza - Kaleth Morales.mp3";
    enlace.click();
  }
}
