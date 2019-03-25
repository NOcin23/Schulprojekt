import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {MatCheckboxModule} from '@angular/material';
import { MatGridListModule} from '@angular/material';
import { MatSidenavModule } from '@angular/material';
import { MatToolbarModule} from '@angular/material';
import { MatIconModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material';
import { MatOptionModule} from '@angular/material';
import { MatSelectModule} from '@angular/material';
import { MatListModule} from '@angular/material';
import { MatButtonToggleModule} from '@angular/material';
import { MatMenuModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { ShopComponent } from './shop/shop.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { LageComponent } from './lage/lage.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BestellenComponent } from './bestellen/bestellen.component';
import { LoginRegistrierenComponent } from './login-registrieren/login-registrieren.component';
import { LeistungComponent } from './leistung/leistung.component';
import { DatenschutzComponent } from './datenschutz/datenschutz.component';
import { FormsModule} from '@angular/forms';


const meineRouten: Routes = [
  {path: '', component: HomeComponent},
  {path: 'impressum', component: ImpressumComponent},
  {path: 'kontakt', component: KontaktComponent},
  {path: 'lage', component: LageComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'bestellen', component: BestellenComponent},
  {path: 'anmelden', component: LoginRegistrierenComponent},
  {path: 'leistung', component: LeistungComponent},
  {path: 'datenschutz', component: DatenschutzComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ImpressumComponent,
    ShopComponent,
    KontaktComponent,
    LageComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    BestellenComponent,
    LoginRegistrierenComponent,
    LeistungComponent,
    DatenschutzComponent
  ],
  imports: [
    RouterModule.forRoot(meineRouten),
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatGridListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatListModule,
    MatButtonToggleModule,
    MatMenuModule,
    MatButtonModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
