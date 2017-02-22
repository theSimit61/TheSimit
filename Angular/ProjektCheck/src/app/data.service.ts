import {Http, Response, Headers} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class DataService {

  constructor(private http: Http) { }

loadIllustrations(id){
  var headers = new Headers();
  headers.append('Authorization',  localStorage.getItem('token'));
return this.http.get('http://46.101.204.215:1337/api/V1/chapterillustrations/'+id,  {headers} ).
    map((res: Response) => res.json());
}

  loadAllTrueCompetences(){
    var headers = new Headers();
    headers.append('Authorization',  localStorage.getItem('token'));
  return this.http.get('http://46.101.204.215:1337//api/V1/studentcompetence?checked=true',  {headers} ).
      map((res: Response) => res.json());
  }
  loadTrueCompetences(id){
    var headers = new Headers();
    headers.append('Authorization',  localStorage.getItem('token'));
  return this.http.get('http://46.101.204.215:1337//api/V1/studentcompetence?checked=true&chapterId='+id,  {headers} ).
      map((res: Response) => res.json());
  }
loadCompetences(id){
  var headers = new Headers();
  headers.append('Authorization',  localStorage.getItem('token'));
return this.http.get('http://46.101.204.215:1337/api/V1/studentcompetence?chapterId='+id,  {headers} ).
    map((res: Response) => res.json());
}
loadCompetencesStud(){
  var headers = new Headers();
  headers.append('Authorization',  localStorage.getItem('token'));
return this.http.get('http://46.101.204.215:1337/api/V1/studentcompetence',  {headers} ).
    map((res: Response) => res.json());
}
loadEducation(id){
  var headers = new Headers();
  headers.append('Authorization',  localStorage.getItem('token'));
return this.http.get('http://46.101.204.215:1337/api/V1/educationalPlan/'+id,  {headers} ).
    map((res: Response) => res.json());
}
passwordChange(){
  var password = "MDKJ142"
  var headers = new Headers();

  headers.append('Authorization',  localStorage.getItem('token'));
  return this.http
    .put('http://46.101.204.215:1337/api/V1/requestPasswordRecovery',
        JSON.stringify({password}),  {headers: headers })
          .map(response => response.json());
}

deleteStudent(){
  var headers = new Headers();
  headers.append('Authorization',  localStorage.getItem('token'));
  return this.http
    .delete('http://46.101.204.215:1337/api/V1/student',
          {headers: headers })
          .map(response => response.json());
}

   putAvatarID(id){
      var headers = new Headers();
      headers.append('Authorization',  localStorage.getItem('token'));
      return this.http
        .put('http://46.101.204.215:1337/api/V1/avatar/'+id,
            JSON.stringify({}), {headers: headers })
              .map(response => response.json());
   }
   getAvatar() {
    var headers = new Headers();
    headers.append('Authorization',  localStorage.getItem('token'));
    return this.http.get('http://46.101.204.215:1337/api/V1/avatar',  {headers} ).
      map((res: Response) => res.json());
  }
  getAvatarID(id) {
   var headers = new Headers();
   headers.append('Authorization',  localStorage.getItem('token'));
   return this.http.get('http://46.101.204.215:1337/api/V1/avatar/'+id,  {headers} ).
     map((res: Response) => res.json());
 }

  getStudent() {
   var headers = new Headers();
   headers.append('Authorization',  localStorage.getItem('token'));
   return this.http.get('http://46.101.204.215:1337/api/V1/student',  {headers} ).
     map((res: Response) => res.json());
 }

 getChapterNameColor() {
   var headers = new Headers();
   headers.append('Authorization',  localStorage.getItem('token'));
   return this.http.get('http://46.101.204.215:1337/api/V1/chapter',  {headers} ).
     map((res: Response) => res.json());
 }

 getChapterNameColorWithId(id) {
   var headers = new Headers();
   headers.append('Authorization',  localStorage.getItem('token'));
   return this.http.get('http://46.101.204.215:1337/api/V1/chapter/'+id,  {headers} ).
     map((res: Response) => res.json());
 }

getEducationPlan(){
  var headers = new Headers();
  headers.append('Authorization',  localStorage.getItem('token'));
  return this.http.get('http://46.101.204.215:1337/api/V1/educationalPlan',  {headers} ).
    map((res: Response) => res.json());
}
}
