import { Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';


@Injectable()
export class LoginService {

  constructor(private http: Http) {

 }

 authenticate(username,password) {

    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .put('http://46.101.204.215:1337/api/V1/login',
          JSON.stringify({ username, password }), {headers: headers })
            .map(response => response.json());
}

}
