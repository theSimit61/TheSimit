import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drop-fragen',
  templateUrl: './drop-fragen.component.html',
  styleUrls: ['./drop-fragen.component.css']
})
export class DropFragenComponent implements OnInit {

  constructor() { }

  activeAsk(){
    var point = "images/help-active.png";
    document.images['dropfragen'].src = point;

    $(document).ready(function() {

  $('#dropdownfrage').data('open', false);

  $(document).click(function() {
      if($('#dropdownfrage').data('open')) {
          $('#dropdownfrage').data('open', false);
      } else
          $('#dropdownfrage').data('open', true);
          document.images['dropfragen'].src ="images/help-inactive.png";
  });

  $(document).click(function() {
      if($('#dropdownfrage').data('open')) {
          $('#dropdownfrage').data('open', false);

      }
  });

});


  }

  onHover(eventObject){
    eventObject.target.style.backgroundColor = '#5C79BB';

  }
  unHover(eventObject){
    eventObject.target.style.backgroundColor = '#011C38';

  }

  ngOnInit() {
  }

}
