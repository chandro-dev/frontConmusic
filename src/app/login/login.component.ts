import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private email :string='';
  private pwd :string='';
  constructor(private router: Router) {
   }
  logerr():void{
    this.router.navigate(['/home']);
  }
}
