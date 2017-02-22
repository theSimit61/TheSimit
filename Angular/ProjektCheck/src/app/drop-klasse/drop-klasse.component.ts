import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-drop-klasse',
  templateUrl: './drop-klasse.component.html',
  styleUrls: ['./drop-klasse.component.css']
})
export class DropKlasseComponent implements OnInit {

  private study = "";
  private teacher ="";

    constructor(private dataService: DataService) {

    }

    activeClass(active, inactive){

      var point = ".." + active;
      document.images['dropklasse'].src = point;

      $(document).ready(function() {

    $('#dropdown').data('open', false);

    $(document).click(function() {
        if($('#dropdown').data('open')) {
            $('#dropdown').data('open', false);
        } else
            $('#dropdown').data('open', true);
            var point = ".." + inactive;
            document.images['dropklasse'].src = point;
    });

    $(document).click(function() {
        if($('#dropdown').data('open')) {
            $('#dropdown').data('open', false);

        }
    });

});

    }


      ngOnInit() {
        this.dataService.getStudent()
          .subscribe(
            data => {
              this.study = data.studyGroups;
              this.teacher = data.formteacher;

            },

            error => alert(error),
            () => console.log('loaded')
          );
      }

}
