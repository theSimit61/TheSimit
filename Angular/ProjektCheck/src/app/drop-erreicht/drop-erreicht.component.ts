import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {CompetenceReachedComponent} from '../competence-reached/competence-reached.component';
import { ActivatedRoute,Params } from '@angular/router';


@Component({
  selector: 'app-drop-erreicht',
  templateUrl: './drop-erreicht.component.html',
  styleUrls: ['./drop-erreicht.component.css']
})
export class DropErreichtComponent implements OnInit {

  getChapterTrue: String[];

    constructor(private dataService: DataService, private content: CompetenceReachedComponent,private Params: ActivatedRoute) {
     var params=this.Params;
     }

     activeErreicht(){
       var point = "images/achievedCompetences-active.png";
       document.images['droperreicht'].src = point;

       document.images['drop'].src = "/images/educationalPlan-inactive.png";
       document.images['drop-p'].src = "/images/student/superhero-catwoman-inactive.png";
       document.images['dropkom'].src = "images/chapterOverview-inactive.png";


     }


    allCompetences(){

      console.log('allcom');
      this.content.getColor = "#8da6d6";
      this.content.getId="15";
      this.dataService.loadAllTrueCompetences().subscribe(
                        data => this.content.getDaten =data,
                        error => alert(error),
                        () => console.log('loaded')
                  );
    }

    loadReached(id){
console.log('loadreach');
      this.dataService.loadTrueCompetences(id).subscribe(
                        data => this.content.getDaten =data,
                        error => alert(error),
                        () => console.log('loaded')
                      );
                      this.dataService.getChapterNameColorWithId(id).subscribe(
                        data => {this.content.getColor =data.strongcolor,this.content.getId=data._id},
                        error => alert(error),
                        () => console.log('loaded')
                      );


    }

      onHover(eventObject, bcolor){
        eventObject.target.style.backgroundColor = bcolor;

      }
      unHover(eventObject, bcolor){
        eventObject.target.style.backgroundColor = bcolor;

      }

    ngOnInit() {

      this.dataService.getChapterNameColor()
        .subscribe(
          data => this.getChapterTrue =data,
          error => alert(error),
          () => console.log('Loaded')
        );

        console.log();
      if(!this.Params||this.Params.snapshot.params.id==0){

        this.allCompetences();

      }
      else{
        if(!this.Params.url._value[1]){
      }
      else{
        this.loadReached(this.Params.snapshot.params.id);
      }
}



}
}
