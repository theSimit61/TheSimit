import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-change-avatar',
  template:`
   <span>{{avatar}}</span>
   `,
  templateUrl: './change-avatar.component.html',
  styleUrls: ['./change-avatar.component.css']
})

export class ChangeAvatarComponent implements OnInit {

  public avatar = <Object>[];

   constructor(private dataService: DataService) {
     this.loadData();
   }

   loadData() {
     this.dataService
         .getData()
         .subscribe((avatar: Array<Object>) => this.avatar = avatar);
   }


swap(Bildname, BildURL){
document.images[Bildname].src = BildURL;
}


ngOnInit() {

}
}
