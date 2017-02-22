import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';


@Component({
  selector: 'app-competence-reached',
  templateUrl: './competence-reached.component.html',
  styleUrls: ['./competence-reached.component.css']
})
export class CompetenceReachedComponent implements OnInit {

  getDaten= [];
getColor ="";
getId="";

  constructor(private dataService: DataService) {

   }

  scrollWin(x,y){
     window.scrollBy(x,y);

   }
   isAll(color){
     if(color=="#8da6d6"){
       return false;
     }
     else{
       return true;
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

  ngOnInit() {
    var point = "images/achievedCompetences-active.png";
    document.images['droperreicht'].src = point;

    document.images['drop'].src = "/images/educationalPlan-inactive.png";
    document.images['drop-p'].src = "/images/student/superhero-catwoman-inactive.png";
    document.images['dropkom'].src = "images/chapterOverview-inactive.png";


  }

}
