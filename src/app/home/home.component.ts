import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { cancion } from '../models/cancion';
import { MusicaService } from '../servicios/musica.service';
import { CancionesService } from '../servicios/canciones/canciones.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  _input: string = '';
  @Output() messageEvent = new EventEmitter<string>();

  lista: cancion[] = [];
  lista_cambio: cancion[] = [];
  constructor(
    private smusica: MusicaService,
    private scanciones: CancionesService
  ) {
    this.smusica.music().subscribe((Response) => {
      console.log(Response);
      this.lista = Response;
      this.lista_cambio = this.lista;
    });
  }
  ngOnInit(): void {}

  repro: string = '';
  descargarArchivo(songId: String, autor: String) {
    this.smusica.getMusicUrl(songId + '_' + autor + '.mp3').subscribe(
      (musicUrl) => {
        console.log('URL de la música:', musicUrl);
        const enlace = document.createElement('a');
        enlace.href = musicUrl;
        enlace.download = songId + '_' + autor + '.mp3';
        enlace.click();
      },
      (error) => {
        console.error('Error al obtener la URL de la música', error);
      }
    );
  }
  playMusic(songId: String, autor: String) {
    console.log(songId + '_' + autor + '.mp3');
    this.smusica.getMusicUrl(songId + '_' + autor + '.mp3').subscribe(
      (musicUrl) => {
        console.log('URL de la música:', musicUrl);
        this.repro = musicUrl;
        this.messageEvent.emit(this.repro);
      },
      (error) => {
        console.error('Error al obtener la URL de la música', error);
      }
    );
  }
  cambiarLista() {
    this.lista_cambio = [];
    this.lista.forEach((cancion) => {
      if (
        cancion.nombre
          .toLocaleLowerCase()
          .includes(this._input.toLocaleLowerCase())
      ) {
        this.lista_cambio.push(cancion);
      }
    });

    if (
      this._input == '' ||
      this._input == ' ' ||
      this._input == undefined ||
      this._input == null
    ) {
      this.lista_cambio = this.lista;
    }
  }
}
