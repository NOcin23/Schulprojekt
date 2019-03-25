import { Component, OnInit } from '@angular/core';
import {UserserviceService} from '../services/userservice/userservice.service';

@Component({
  selector: 'app-login-registrieren',
  templateUrl: './login-registrieren.component.html',
  styleUrls: ['./login-registrieren.component.scss']
})
export class LoginRegistrierenComponent implements OnInit {
  vorname: string;
  nachname: string;
  strasse: string;
  plz: number;
  ort: string;
  email: string;
  password: string;
  constructor(private userService: UserserviceService) { }

  onClick(event) {
    event.preventDefault();
    console.log(this.password);
    this.userService.createUser(this.vorname, this.nachname, this.strasse, this.plz, this.ort, this.email, this.password).subscribe(
      success => {
        console.log(success);
      },
      error => {
        console.log(error);
      }
    );
  }
  ngOnInit() {
  }

}
