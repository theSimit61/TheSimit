import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {ContentComponent} from '../content/content.component';
import { ActivatedRoute,Params } from '@angular/router';


@Component({
  selector: 'app-drop-kompetenz',
  templateUrl: './drop-kompetenz.component.html',
  styleUrls: ['./drop-kompetenz.component.css']
})
export class DropKompetenzComponent implements OnInit {

getChapter: String[];

  constructor(private dataService: DataService, private content: ContentComponent, private Params: ActivatedRoute) {
    var params=this.Params;
  }

  activeKom(){

    var point = "images/chapterOverview-active.png";
    document.images['dropkom'].src = point;

    document.images['droperreicht'].src ="images/achievedCompetences-inactive.png";
    document.images['drop'].src = "/images/educationalPlan-inactive.png";

  }

  load(id){

    this.dataService.loadEducation(1).subscribe(
          data => this.content.getEducation =data[0].competences,
          error => alert(error),
          () => console.log('loaded')
        );
        this.dataService.loadEducation(2).subscribe(
              data => this.content.getEducation2 =data[0].competences,
              error => alert(error),
              () => console.log('loaded')
            );
            this.dataService.loadEducation(3).subscribe(
                  data => this.content.getEducation3 =data[0].competences,
                  error => alert(error),
                  () => console.log('loaded')
                );
                this.dataService.loadCompetences(id).subscribe(
                  data => this.content.getDaten =data,
                  error => alert(error),
                  () => console.log('loaded')
                );

                this.dataService.loadIllustrations(id).subscribe(
                      data => this.content.getIllustrations =data,
                      error => alert(error),
                      () => console.log('loaded')
                    );

    this.dataService.getChapterNameColorWithId(id).subscribe(
      data => this.content.getColor =data,
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
      data => this.getChapter =data,
      error => alert(error),
      () => console.log('Loaded')
    );

    if(!this.Params){

    }
    else{
      if(!this.Params.url._value[1]){
    }
    else{

      this.load(this.Params.snapshot.params.id);
    }
}
}}
