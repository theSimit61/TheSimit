import {  Component,  OnInit} from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-change-pw',
  templateUrl: './change-pw.component.html',
  styleUrls: ['./change-pw.component.css']
})
export class ChangePwComponent implements OnInit {
  private message="Falsches Passwort";
  private background="#b71967";
  check =false;


  constructor(private dataService: DataService) { }



  aendern(){
    var aktuell =(<HTMLInputElement>document.getElementById("inputPassword")).value;
    var neu =(<HTMLInputElement>document.getElementById("popPw")).value;
    var neuBest =(<HTMLInputElement>document.getElementById("inputPasswordnew")).value;

    if(aktuell == "MDKJ142"){
      this.background="#b71967";
      this.check=false;
      if(neu == neuBest && neu!=""||neuBest!=""){
        this.background="#76b82d";
        this.check=true;
        this.dataService.passwordChange()
        .subscribe(
          response =>this.message=response,
          error => alert(error),
          () => console.log(this.message)
          );
          $(document).ready(function(){
        $("#aendern").click(function(){
            $("#myModal").modal();
        });
    });
      }
      else{
        this.message="Eingaben stimmen nicht überein!";
        console.log("Eingaben stimmen nicht überein!")
        $(document).ready(function(){
      $("#aendern").click(function(){
          $("#myModal").modal();
      });
  });
      }
}
  else{
    this.message="Das aktuelle Passwort ist falsch!";
    console.log("Das aktuelle Passwort ist falsch!")
    $(document).ready(function(){
  $("#aendern").click(function(){
      $("#myModal").modal();
  });
});

  }
}


  ngOnInit() {
    $(document).ready(function(){
        $('[data-toggle="popover"]').popover({
            placement : 'right'
        });
    });


  }

}
