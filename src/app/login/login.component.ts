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

  constructor(private router: Router, private sauth: AuthService) {}
  logerr(): void {
    if (this.persona.correo != '' && this.persona.pass != '') {
      this.sauth.authService(this.persona);

      
    }
  }
  register(): void {
    this.router.navigate(['/registro']);
  }
}
