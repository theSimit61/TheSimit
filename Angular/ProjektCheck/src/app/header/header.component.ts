import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
getStudent: String[];

  constructor(private dataService: DataService) {

  }
    ngOnInit() {
      this.dataService.getStudent()
        .subscribe(
          data => this.getStudent = data,
          error => alert(error),
          () => console.log('Loaded')
        );
    }

  }
