import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drop-logout',
  templateUrl: './drop-logout.component.html',
  styleUrls: ['./drop-logout.component.css']
})
export class DropLogoutComponent implements OnInit {

  constructor() { }

  activeLogout(){
    var point = "images/logout-active.png";
    document.images['droplogout'].src = point;

    $(document).ready(function() {

  $('#dropdownlog').data('open', false);

  $(document).click(function() {
      if($('#dropdownlog').data('open')) {
          $('#dropdownlog').data('open', false);
      } else
          $('#dropdownlog').data('open', true);
          document.images['droplogout'].src = "images/logout-iactive.png";
  });

  $(document).click(function() {
      if($('#dropdownlog').data('open')) {
          $('#dropdownlog').data('open', false);

      }
  });

});


  }

  logout(){
    localStorage.removeItem('token');
  }

  close(obj) {
    console.log(obj.parent);
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
