import { Component } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  palabras:string[]=["banana","pepe","pedro","animal"];

  show:boolean=true;

    cambiarShow():void{
      this.show=!this.show;
    }

}
