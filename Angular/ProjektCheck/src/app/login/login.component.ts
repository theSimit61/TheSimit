import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})

export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService) {

   }

 exist: boolean = false;

    log(){
      console.log('ALALALALA');
      var user=(<HTMLInputElement>document.getElementById("inputBenutzer")).value;
      var pass=(<HTMLInputElement>document.getElementById("inputPassword")).value;

      this.loginService.authenticate(user,pass)
        .subscribe(
          response => {this.save(response.token),this.exist=true},
          error => alert(error),
          () => console.log('Authentication Complete')
        );
    

      }
      save(token){
        localStorage.setItem('token', token);

      }

  ngOnInit() {

  }

}
