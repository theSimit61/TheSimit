import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-education-plan',
  templateUrl: './education-plan.component.html',
  styleUrls: ['./education-plan.component.css']
})
export class EducationPlanComponent implements OnInit {
  getDaten: String[];
  getEducation = [];
  text = "";
  head = "";



  constructor(private dataService: DataService) { }


   scrollWin(x,y){
      window.scrollBy(x,y);

    }

  isEducation(number){
  for(var i=0;i < 15;i++){
    if(number==this.getEducation[i].competenceId ){
      this.text= this.getEducation[i].note;
  return true;
    }
  }
  return false;
  }

  isOK(checked){
    if(checked==true){
      return true;
    }
    else{
      return false;
    }

  }
  isNOK(checked){
    if(checked==false){
      return true;
    }
    else{
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
    var text= this.isEducation(id);
    $('#popEdu'+id).popover({
      container: 'body',
      content: this.head + " <br /> <br /> "  + "- " +this.text,
      html: true
  });
  }




  ngOnInit() {
    var point = "/images/educationalPlan-active.png";
    document.images['drop'].src = point;

    document.images['droperreicht'].src ="images/achievedCompetences-inactive.png";
    document.images['dropkom'].src = "images/chapterOverview-inactive.png";

  }

}
