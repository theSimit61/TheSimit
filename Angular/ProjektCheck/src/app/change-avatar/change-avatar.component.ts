import { Component, OnInit, enableProdMode} from '@angular/core';
import {DataService} from '../data.service';

enableProdMode();
@Component({
  selector: 'app-change-avatar',
  templateUrl: './change-avatar.component.html',
  styleUrls: ['./change-avatar.component.css'],
})

export class ChangeAvatarComponent implements OnInit {
  getAvatar: String[];
  private avatar="";
  private getProfil="";
  private chID="";
  private message="";

   constructor(private dataService: DataService) {

   }


swap(id){
document.images['head'].src =document.images['bild'+id].src;
this.chID=id;
document.getElementById("speichern1").disabled = false;
document.getElementById("speichern2").disabled = false;
}
abbrechen(){
  document.getElementById("speichern1").disabled = true;
  document.getElementById("speichern2").disabled = true;
}

speichern(){
  this.dataService.putAvatarID(this.chID)
  .subscribe(
    response =>this.message=response,
    error => alert(error),
    () => console.log(this.message)
    );

    $(document).ready(function(){
  $("#speichern1").click(function(){
      $("#myModalAva1").modal();
  });
});
$(document).ready(function(){
$("#speichern2").click(function(){
  $("#myModalAva2").modal();
});
});

}

ngOnInit() {
  document.images['drop-p'].src = "../images/student/superhero-catwoman-active.png";

  this.dataService.getStudent()
    .subscribe(
      data => {
        this.avatar = data.avatarId;
      },
      error => alert(error),
      () => console.log('loaded')
    );
  this.dataService.getAvatarID(this.avatar)
    .subscribe(
      data => this.getProfil =data,
      error => alert(error),
      () => console.log('Loaded')
    );

  this.dataService.getAvatar()
    .subscribe(
      data => this.getAvatar =data,
      error => alert(error),
      () => console.log('Loaded')
    );
}
}
