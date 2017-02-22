import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-drop-schule',
  templateUrl: './drop-schule.component.html',
  styleUrls: ['./drop-schule.component.css']
})
export class DropSchuleComponent implements OnInit {

  private school = "";

  constructor(private dataService: DataService) {
  }

  activeSchool(active, inactive){

    var point = ".." + active;
    document.images['dropschool'].src = point;

    $(document).ready(function() {

  $('#dropdownschool').data('open', false);

  $(document).click(function() {
      if($('#dropdownschool').data('open')) {
          $('#dropdownschool').data('open', false);
      } else
          $('#dropdownschool').data('open', true);
          var point = ".." + inactive;
          document.images['dropschool'].src = point;
  });

  $(document).click(function() {
      if($('#dropdownschool').data('open')) {
          $('#dropdownschool').data('open', false);

      }
  });

});

  }

  ngOnInit() {
    this.dataService.getStudent()
      .subscribe(
        data => this.school = data.school,
        error => alert(error),
        () => console.log('loaded')
      );
  }

}
