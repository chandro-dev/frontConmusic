import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public persona = new persona();

  constructor(private router: Router, private sauth: AuthService) {}
  logerr(): void {
    if (this.persona.correo != '' && this.persona.pass != '') {
      this.sauth.authService(this.persona);

      
   }
  logerr():void{
    this.router.navigate(['/home']);
  }
  register():void{
    this.router.navigate(['/registro']);
  }
}
