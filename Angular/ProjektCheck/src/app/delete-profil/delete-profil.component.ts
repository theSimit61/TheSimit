import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-delete-profil',
  templateUrl: './delete-profil.component.html',
  styleUrls: ['./delete-profil.component.css']
})
export class DeleteProfilComponent implements OnInit {

private message="Falsches Passwort";
private background="#b71967";
check =false;
  constructor(private dataService: DataService) { }


delete(){
  var input =(<HTMLInputElement>document.getElementById("inputPassword")).value;

  if(input == "MDKJ142"){
    this.background="#76b82d";
    this.check=true;
    this.dataService.deleteStudent()
    .subscribe(
      response =>this.message=response,
      error => alert(error),
      () => console.log(this.message);
      );
      console.log('true');
      $(document).ready(function(){
    $("#delete").click(function(){
        $("#myModalTrue").modal();
    });
});
  }
  else{
    $(document).ready(function(){
    $("#delete").click(function(){
        $("#myModalTrue").modal();
        console.log("Falsches pop");
      });
    });
    this.check=false;
    console.log("Falsches Passwort")
    this.message="Falsches Passwort";
    this.background="#b71967";

  }
}

  ngOnInit() {

  }

}
