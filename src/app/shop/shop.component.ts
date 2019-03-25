import {Component, OnInit} from '@angular/core';
import {BestellenComponent} from '../bestellen/bestellen.component';
import {LoginRegistrierenComponent} from '../login-registrieren/login-registrieren.component';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  public bestellen: BestellenComponent;
  public login: LoginRegistrierenComponent;
  public but;
  constructor() {
  }
  ngOnInit() {
  }
}
