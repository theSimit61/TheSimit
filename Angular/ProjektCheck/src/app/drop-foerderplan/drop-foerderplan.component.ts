import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {EducationPlanComponent} from '../education-plan/education-plan.component';
import { ActivatedRoute,Params } from '@angular/router';


@Component({
  selector: 'app-drop-foerderplan',
  templateUrl: './drop-foerderplan.component.html',
  styleUrls: ['./drop-foerderplan.component.css']
})
export class DropFoerderplanComponent implements OnInit {

getEducations: string[];

  constructor(private dataService: DataService,  private content: EducationPlanComponent,private Params: ActivatedRoute) {
   var params=this.Params;
   }

   Active(){
     var point = "/images/educationalPlan-active.png";
     document.images['drop'].src = point;

     document.images['droperreicht'].src ="images/achievedCompetences-inactive.png";
     document.images['dropkom'].src = "images/chapterOverview-inactive.png";
   }



loadEdu(id){
      this.dataService.loadEducation(id).subscribe(
            data => this.content.getEducation =data[0].competences,
            error => alert(error),
            () => console.log('loaded')
          );
  this.dataService.loadCompetencesStud().subscribe(
                    data => this.content.getDaten =data,
                    error => alert(error),
                    () => console.log('loaded')
                  );

}

loading(id){

  this.loadEdu(id);
  this.content.head=this.getEducations[id-1].name;
}
  ngOnInit() {

    this.dataService.getEducationPlan()
      .subscribe(
        data => {this.getEducations =data, this.content.head=data[this.Params.snapshot.params.id-1].name},
        error => alert(error),
        () => console.log('Loaded')
      );
      if(!this.Params){

      }
      else{
        if(!this.Params.url._value[1]){
      }
      else{

        this.loadEdu(this.Params.snapshot.params.id);
      }
  }
}
  onHover(eventObject,id){

    eventObject.target.style.backgroundColor = '#5C79BB';

  }
  unHover(eventObject){
    eventObject.target.style.backgroundColor = '#011C38';

  }

}
