import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { persona } from '../models/persona';
import { AuthService } from '../servicios/auth/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public persona = new persona();
  message:String='';
  constructor(private router: Router, private sauth: AuthService) {
    this.sauth.validToken();
  }
  loger(): void {
    if (this.persona.correo != '' && this.persona.pass != '') {
      if(this.sauth.authService(this.persona)){

      }else{
        this.message='Credenciales incorrectas'
      };
    }
  }
  register(): void {
    this.router.navigate(['/registro']);
  }
}
