import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-drop-profil',
  templateUrl: './drop-profil.component.html',
  styleUrls: ['./drop-profil.component.css']
})
export class DropProfilComponent implements OnInit {
private avatar="";
private forename="";
private surname="";
private getProfil="";
  constructor(private dataService: DataService) { }

  onHover(eventObject){
    eventObject.target.style.backgroundColor = '#5C79BB';
  }
  unHover(eventObject){
    eventObject.target.style.backgroundColor = '#011C38';
  }

  avatarActive(source){
    var point = ".." + source;
    document.images['drop-p'].src = point;
  }

  ngOnInit() {

    this.dataService.getStudent()
      .subscribe(
        data => {
          this.avatar = data.avatarId;
          this.forename = data.forename;
          this.surname = data.surname;
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

  }

}
