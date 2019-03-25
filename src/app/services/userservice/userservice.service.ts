import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private httpClient: HttpClient) {
  }

  createUser(vorname: string, nachname: string, strasse: string, plz: number,
             ort: string, email: string, password: string): Observable<any> {
    const body: { vname: string, nname: string, str: string, pl: number, o: string, userName: string; pass: string } = {
      vname: vorname,
      nname: nachname,
      str: strasse,
      pl: plz,
      o: ort,
      userName: email,
      pass: password,
    };
    return this.httpClient.post('https://intern-api-dev.md.de/v2/user/register', body);
  }
}
