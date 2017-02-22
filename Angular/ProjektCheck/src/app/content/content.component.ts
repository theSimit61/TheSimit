import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],

})
export class ContentComponent implements OnInit {
  constructor(private dataService: DataService) { }

getDaten=[];
getIllustrations="";
getEducation= [];
getEducation2 = [];
getEducation3 = [];
getColor ="";
text = "";
head = "";
helpRi=0;
helpLe=0;
pic = 0;
contentHeight= 0;
zahl= 0;

 scrollWin(x,y){
    window.scrollBy(x,y);
  }


isEducation(number){

for(var i=0;i < 15;i++){
  if(number==this.getEducation[i].competenceId || number==this.getEducation2[i].competenceId||number==this.getEducation3[i].competenceId){
    return true;
  }
}
return false;
}

isOK(ok,checked){
  if(ok==false&&checked==true){
    return true;
  }
  else{
    return false;
  }

}
isNOK(ok,checked){
  if(ok==false&&checked==false){
    return true;
  }
  else{
    return false;
  }
}

illuPicture(){
  this.zahl++;
  if(this.zahl >= 12){
    this.zahl=0;
    this.pic=0;
  }
  this.contentHeight = document.getElementById("content").offsetHeight;
   this.pic = this.pic + 750;
  if(this.contentHeight > this.pic){
    return true;
  }
  else {
    this.contentHeight = 0;
    return false;
  }
}



popoverDate(id, date){
  var datum: Date = date;
    $('#pop'+id).popover({
      container: 'body',
      content: "Du hast diese Kompetenz am " +datum+ " erreicht!",
      html: true
  });
}

popoverEdu(id){
  this.note(id);
  $('#popEdu'+id).popover({
    container: 'body',
    content: this.head + " <br /> <br /> "  + "- " +this.text,
    html: true
});
}

note(number){
var  text ="";
for(var i=0;i < 15;i++){
  if(number==this.getEducation[i].competenceId){
    this.text= this.getEducation[i].note;
    this.head= "MATHE ZR BIS 10 ";
  }
  if(number==this.getEducation2[i].competenceId){
      this.text= this.getEducation2[i].note;
    this.head="DEUTSCH SATZANFÄNGE ";

  }
  if(number==this.getEducation3[i].competenceId){
      this.text= this.getEducation3[i].note;
      this.head="SACHKUNDE, DER WALD ";

  }
}
}




  ngOnInit() {
    var point = "images/chapterOverview-active.png";
    document.images['dropkom'].src = point;

    document.images['droperreicht'].src ="images/achievedCompetences-inactive.png";
    document.images['drop'].src = "/images/educationalPlan-inactive.png";
}



}
