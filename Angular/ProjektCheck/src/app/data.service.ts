import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  getData() {
        return this.http.get('http://46.101.204.215:1337/api/V1/avatar')
             .map((res: Response) => res.json());
     }
}
